import { NextRequest, NextResponse } from "next/server";
import { DateTime } from "luxon";
import { bookingEmails } from "@/content/booking";
import { cleanString, getClientIp } from "@/lib/api-route-helpers";
import { collectBlockedStartsForRange, isSlotBusy } from "@/lib/booking/busy";
import { fetchExternalBusyWindows, isExternalCalendarConfigured } from "@/lib/booking/external-calendar-busy";
import {
  CalendarUnavailableError,
  createGoogleCalendarEvent,
  fetchGoogleBusyWindows,
  getGoogleCalendarConfig,
} from "@/lib/booking/google-calendar";
import {
  buildSlotsPayload,
  currentYearMonthPacific,
  formatBookingSlotPacificLabel,
  isValidSlotStart,
  isYearMonthWithinBounds,
  normalizeUtcIso,
  parseMonthParam,
  slotEndIso,
  yearMonthStartPacific,
} from "@/lib/booking/schedule";
import { sendBookingNotifications } from "@/lib/booking/send-booking-notifications";
import { isTurnstileConfigured, validateTurnstileToken } from "@/lib/cloudflare-turnstile";
import { validateEmailInput } from "@/lib/email-validation";
import { checkRateLimit } from "@/lib/rate-limit";
import { site } from "@/lib/site";

/** Google plus two Resend calls can pass the default function budget. */
export const maxDuration = 30;

const CALENDAR_DOWN = "I can't reach my calendar right now. Call or email instead.";
const SLOT_TAKEN = "That time just got taken. Pick another one.";

type BookingPayload = {
  startsAt?: string;
  name?: string;
  email?: string;
  phone?: string;
  note?: string;
  turnstileToken?: string;
  /** Honeypot, see the contact route. */
  fs_contact_extra?: string;
};

function noStore(body: unknown, init?: ResponseInit) {
  return NextResponse.json(body, { ...init, headers: { "Cache-Control": "no-store", ...(init?.headers ?? {}) } });
}

/**
 * GET ?month=YYYY-MM: every slot in the month with its availability.
 *
 * Google Calendar is the system of record. Without it there is nowhere to
 * hold a booking, so the route reports the calendar as unavailable and the
 * page shows the phone and the email instead of a grid nobody can book from.
 * The optional iCal feed only adds busy time from a second calendar on top.
 */
export async function GET(req: NextRequest) {
  const ym = parseMonthParam(req.nextUrl.searchParams.get("month")) ?? currentYearMonthPacific();
  if (!isYearMonthWithinBounds(ym)) {
    return noStore({ error: "That month is outside the booking window." }, { status: 400 });
  }

  const config = getGoogleCalendarConfig();
  if (!config) {
    return noStore({ error: CALENDAR_DOWN }, { status: 503 });
  }

  const monthStart = yearMonthStartPacific(ym);
  const rangeStart = normalizeUtcIso(monthStart);
  const rangeEnd = normalizeUtcIso(monthStart.plus({ months: 1 }));

  try {
    const windows = await fetchGoogleBusyWindows(config, rangeStart, rangeEnd);
    if (isExternalCalendarConfigured()) {
      windows.push(...(await fetchExternalBusyWindows()));
    }
    const blocked = collectBlockedStartsForRange(
      windows,
      DateTime.fromISO(rangeStart, { zone: "utc" }),
      DateTime.fromISO(rangeEnd, { zone: "utc" }),
    );
    const payload = buildSlotsPayload(ym, blocked);
    if (!payload) {
      return noStore({ error: "That month could not be read." }, { status: 400 });
    }
    return noStore(payload);
  } catch (err) {
    console.error("[booking] availability failed", err instanceof Error ? err.message : String(err));
    return noStore({ error: CALENDAR_DOWN }, { status: 503 });
  }
}

/** POST: book one slot. Creates the calendar event, then sends the two emails. */
export async function POST(req: NextRequest) {
  const contentLength = Number(req.headers.get("content-length") ?? 0);
  if (contentLength > 16_000) {
    return noStore({ error: "Payload too large." }, { status: 413 });
  }

  let payload: BookingPayload;
  try {
    payload = (await req.json()) as BookingPayload;
  } catch {
    return noStore({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const clientIp = getClientIp(req);

  if (cleanString(payload.fs_contact_extra, 100)) {
    console.warn("[booking] honeypot tripped", {
      ip: clientIp,
      ua: req.headers.get("user-agent")?.slice(0, 120) ?? null,
    });
    return noStore({ ok: true });
  }

  const limit = checkRateLimit(clientIp ? `booking:${clientIp}` : null);
  if (!limit.ok) {
    return noStore(
      { error: "Too many attempts in a row. Wait a few minutes, or call instead." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfterSeconds) } },
    );
  }

  const startsAt = cleanString(payload.startsAt, 40);
  const name = cleanString(payload.name, 120);
  const email = cleanString(payload.email, 320).toLowerCase();
  const phone = cleanString(payload.phone, 40);
  const note = cleanString(payload.note, 1000);
  const turnstileToken = cleanString(payload.turnstileToken, 2048);

  if (!startsAt || !isValidSlotStart(startsAt)) {
    return noStore({ error: "Pick a day and a time first." }, { status: 400 });
  }
  if (!name) {
    return noStore({ error: "Name is required." }, { status: 400 });
  }
  const emailErr = validateEmailInput(email);
  if (emailErr) {
    return noStore({ error: emailErr }, { status: 400 });
  }
  if (phone.replace(/\D/g, "").length < 10) {
    return noStore({ error: "Enter a number I can call you on." }, { status: 400 });
  }

  if (process.env.VERCEL_ENV === "production" && !isTurnstileConfigured()) {
    console.error("[booking] Turnstile is not configured in production");
    return noStore({ error: CALENDAR_DOWN }, { status: 500 });
  }

  if (isTurnstileConfigured()) {
    if (!turnstileToken) {
      return noStore({ error: "Please complete the security check." }, { status: 400 });
    }
    const verification = await validateTurnstileToken({ token: turnstileToken, remoteIp: clientIp });
    if (!verification.success) {
      return noStore({ error: "Security check failed. Please try again." }, { status: 400 });
    }
  }

  const config = getGoogleCalendarConfig();
  if (!config) {
    return noStore({ error: CALENDAR_DOWN }, { status: 503 });
  }

  const startsAtIso = normalizeUtcIso(DateTime.fromISO(startsAt, { zone: "utc" }));
  const endsAtIso = slotEndIso(startsAtIso);

  try {
    // Re-read the calendar for just this slot right before writing, so two
    // people who loaded the same month cannot both take it.
    const windows = await fetchGoogleBusyWindows(config, startsAtIso, endsAtIso);
    if (isSlotBusy(windows, startsAtIso, endsAtIso)) {
      return noStore({ error: SLOT_TAKEN }, { status: 409 });
    }

    const event = await createGoogleCalendarEvent(config, {
      startsAtUtcIso: startsAtIso,
      endsAtUtcIso: endsAtIso,
      summary: bookingEmails.eventSummary(name),
      description: [
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        "",
        note ? `Note: ${note}` : "No note.",
        "",
        `Booked from ${site.hostname}${site.bookingPath}`,
      ].join("\n"),
    });

    await sendBookingNotifications({
      eventId: event.id,
      startsAtIso,
      endsAtIso,
      name,
      email,
      phone,
      note,
    });

    return noStore({ ok: true, startsAt: startsAtIso, when: formatBookingSlotPacificLabel(startsAtIso) });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    if (err instanceof CalendarUnavailableError) {
      console.error("[booking] calendar unavailable", message);
      return noStore({ error: CALENDAR_DOWN }, { status: 503 });
    }
    console.error("[booking] failed", message);
    return noStore({ error: "Something went wrong on my end. Call or email instead." }, { status: 500 });
  }
}
