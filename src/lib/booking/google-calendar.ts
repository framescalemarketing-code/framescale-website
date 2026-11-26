import "server-only";
import { createSign } from "node:crypto";
import { DateTime } from "luxon";
import type { BusyWindow } from "@/lib/booking/busy";
import { BOOKING_ZONE } from "@/lib/booking/schedule";

/**
 * Jonathan's Google Calendar, through a service account he has shared the
 * calendar with at "Make changes to events". No SDK: the service-account
 * JWT is signed here with Node's crypto and exchanged for an access token,
 * then the two Calendar endpoints are called with fetch, which is how this
 * repo already talks to Resend.
 *
 * Service accounts cannot add attendees to events on a personal calendar,
 * so the event is created without any and the visitor's invite goes out as
 * an .ics attachment on the confirmation email instead.
 */

const TOKEN_URL = "https://oauth2.googleapis.com/token";
const CALENDAR_API = "https://www.googleapis.com/calendar/v3";
const SCOPE = "https://www.googleapis.com/auth/calendar";
const FETCH_TIMEOUT_MS = 8_000;
const BUSY_CACHE_MS = 60_000;

export type GoogleCalendarConfig = {
  calendarId: string;
  clientEmail: string;
  privateKey: string;
};

export class CalendarUnavailableError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CalendarUnavailableError";
  }
}

export function getGoogleCalendarConfig(): GoogleCalendarConfig | null {
  const calendarId = process.env.GOOGLE_CALENDAR_ID?.trim();
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim();
  // Vercel keeps real newlines; a key pasted with literal "\n" is unescaped.
  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.trim().replace(/\\n/g, "\n");
  if (!calendarId || !clientEmail || !privateKey) return null;
  return { calendarId, clientEmail, privateKey };
}

export function isGoogleCalendarConfigured(): boolean {
  return getGoogleCalendarConfig() !== null;
}

function base64url(input: string): string {
  return Buffer.from(input).toString("base64url");
}

let tokenCache: { token: string; expiresAt: number } | null = null;

async function getAccessToken(config: GoogleCalendarConfig): Promise<string> {
  if (tokenCache && tokenCache.expiresAt > Date.now() + 60_000) {
    return tokenCache.token;
  }

  const issuedAt = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = base64url(
    JSON.stringify({
      iss: config.clientEmail,
      scope: SCOPE,
      aud: TOKEN_URL,
      iat: issuedAt,
      exp: issuedAt + 3600,
    }),
  );
  const unsigned = `${header}.${claims}`;
  const signer = createSign("RSA-SHA256");
  signer.update(unsigned);
  signer.end();
  const signature = signer.sign(config.privateKey, "base64url");

  const response = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: `${unsigned}.${signature}`,
    }),
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
  });

  if (!response.ok) {
    throw new CalendarUnavailableError(`google token endpoint responded ${response.status}`);
  }

  const data = (await response.json()) as { access_token?: string; expires_in?: number };
  if (!data.access_token) {
    throw new CalendarUnavailableError("google token endpoint returned no access token");
  }

  tokenCache = { token: data.access_token, expiresAt: Date.now() + (data.expires_in ?? 3600) * 1000 };
  return data.access_token;
}

const busyCache = new Map<string, { expiresAt: number; windows: BusyWindow[] }>();

/** Busy windows on the calendar between two UTC ISO instants. Cached briefly per range. */
export async function fetchGoogleBusyWindows(
  config: GoogleCalendarConfig,
  rangeStartUtcIso: string,
  rangeEndUtcIso: string,
): Promise<BusyWindow[]> {
  const cacheKey = `${rangeStartUtcIso}|${rangeEndUtcIso}`;
  const cached = busyCache.get(cacheKey);
  if (cached && cached.expiresAt > Date.now()) {
    return cached.windows;
  }

  const token = await getAccessToken(config);
  const response = await fetch(`${CALENDAR_API}/freeBusy`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      timeMin: rangeStartUtcIso,
      timeMax: rangeEndUtcIso,
      timeZone: BOOKING_ZONE,
      items: [{ id: config.calendarId }],
    }),
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
  });

  if (!response.ok) {
    throw new CalendarUnavailableError(`google freebusy responded ${response.status}`);
  }

  const data = (await response.json()) as {
    calendars?: Record<string, { busy?: { start: string; end: string }[]; errors?: unknown[] }>;
  };
  const calendar = data.calendars?.[config.calendarId];
  if (!calendar || (calendar.errors && calendar.errors.length > 0)) {
    throw new CalendarUnavailableError("google freebusy returned no usable calendar");
  }

  const windows = (calendar.busy ?? [])
    .map((window) => ({
      startUtc: DateTime.fromISO(window.start, { zone: "utc" }),
      endUtc: DateTime.fromISO(window.end, { zone: "utc" }),
    }))
    .filter((window) => window.startUtc.isValid && window.endUtc.isValid && window.endUtc > window.startUtc);

  busyCache.set(cacheKey, { windows, expiresAt: Date.now() + BUSY_CACHE_MS });
  return windows;
}

/** Drop the cached windows for a range after a booking lands inside it. */
export function forgetGoogleBusyCache(): void {
  busyCache.clear();
}

export type CreatedEvent = {
  id: string;
  htmlLink: string | null;
};

export async function createGoogleCalendarEvent(
  config: GoogleCalendarConfig,
  input: { startsAtUtcIso: string; endsAtUtcIso: string; summary: string; description: string },
): Promise<CreatedEvent> {
  const token = await getAccessToken(config);
  const response = await fetch(`${CALENDAR_API}/calendars/${encodeURIComponent(config.calendarId)}/events`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      summary: input.summary,
      description: input.description,
      start: { dateTime: input.startsAtUtcIso, timeZone: BOOKING_ZONE },
      end: { dateTime: input.endsAtUtcIso, timeZone: BOOKING_ZONE },
      reminders: { useDefault: true },
    }),
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
  });

  if (!response.ok) {
    throw new CalendarUnavailableError(`google events.insert responded ${response.status}`);
  }

  const data = (await response.json()) as { id?: string; htmlLink?: string };
  if (!data.id) {
    throw new CalendarUnavailableError("google events.insert returned no id");
  }

  forgetGoogleBusyCache();
  return { id: data.id, htmlLink: data.htmlLink ?? null };
}
