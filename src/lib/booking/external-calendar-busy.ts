import { DateTime } from "luxon";
import { BOOKING_ZONE, normalizeUtcIso } from "@/lib/booking-schedule";

const BOOKING_EXTERNAL_CALENDAR_ICS_URL = process.env.BOOKING_EXTERNAL_CALENDAR_ICS_URL?.trim() || "";
const BOOKING_EXTERNAL_CALENDAR_SUMMARY_MATCH =
  process.env.BOOKING_EXTERNAL_CALENDAR_SUMMARY_MATCH?.trim().toLowerCase() || "";
const FETCH_TIMEOUT_MS = 8_000;
const CACHE_MS = 60_000;

type BusyWindow = {
  startUtc: DateTime;
  endUtc: DateTime;
};

type CacheEntry = {
  expiresAt: number;
  windows: BusyWindow[];
};

let cachedBusyWindows: CacheEntry | null = null;

function decodeIcsText(raw: string): string {
  return raw
    .replace(/\\n/gi, "\n")
    .replace(/\\,/g, ",")
    .replace(/\\;/g, ";")
    .replace(/\\\\/g, "\\");
}

function unfoldIcsLines(ics: string): string[] {
  const lines = ics.replace(/\r\n/g, "\n").split("\n");
  const out: string[] = [];
  for (const line of lines) {
    if ((line.startsWith(" ") || line.startsWith("\t")) && out.length > 0) {
      out[out.length - 1] += line.slice(1);
    } else {
      out.push(line);
    }
  }
  return out;
}

function parseField(line: string): { name: string; params: Map<string, string>; value: string } | null {
  const i = line.indexOf(":");
  if (i <= 0) return null;

  const head = line.slice(0, i);
  const value = line.slice(i + 1);
  const [rawName, ...paramParts] = head.split(";");
  const name = rawName.trim().toUpperCase();
  const params = new Map<string, string>();

  for (const part of paramParts) {
    const eq = part.indexOf("=");
    if (eq <= 0) continue;
    const key = part.slice(0, eq).trim().toUpperCase();
    const val = part.slice(eq + 1).trim().replace(/^"|"$/g, "");
    if (key) params.set(key, val);
  }

  return { name, params, value };
}

function resolveIcsTimezone(tzidRaw: string | undefined): string {
  const tzid = (tzidRaw || "").trim();
  if (!tzid) return BOOKING_ZONE;

  // Outlook commonly emits Windows timezone IDs in ICS feeds.
  const windowsToIana: Record<string, string> = {
    "Pacific Standard Time": "America/Los_Angeles",
  };
  return windowsToIana[tzid] || tzid;
}

function parseIcsDate(value: string, params: Map<string, string>): DateTime | null {
  const valueType = (params.get("VALUE") || "").toUpperCase();
  if (valueType === "DATE" && /^\d{8}$/.test(value)) {
    const dt = DateTime.fromFormat(value, "yyyyLLdd", { zone: BOOKING_ZONE }).startOf("day");
    return dt.isValid ? dt : null;
  }

  const m = value.match(/^(\d{8})T(\d{4}|\d{6})(Z?)$/);
  if (!m) return null;

  const [, datePart, timePart, zPart] = m;
  const timeFormat = timePart.length === 4 ? "HHmm" : "HHmmss";
  const format = zPart ? `yyyyLLdd'T'${timeFormat}'Z'` : `yyyyLLdd'T'${timeFormat}`;
  const zone = zPart ? "utc" : resolveIcsTimezone(params.get("TZID"));
  const dt = DateTime.fromFormat(`${datePart}T${timePart}${zPart}`, format, { zone });
  return dt.isValid ? dt : null;
}

function parseBusyWindowsFromIcs(ics: string): BusyWindow[] {
  if (!BOOKING_EXTERNAL_CALENDAR_SUMMARY_MATCH) return [];

  const lines = unfoldIcsLines(ics);
  const windows: BusyWindow[] = [];

  let inEvent = false;
  let summary = "";
  let startsAt: DateTime | null = null;
  let endsAt: DateTime | null = null;

  for (const line of lines) {
    if (line === "BEGIN:VEVENT") {
      inEvent = true;
      summary = "";
      startsAt = null;
      endsAt = null;
      continue;
    }

    if (!inEvent) continue;

    if (line === "END:VEVENT") {
      inEvent = false;
      const matchesSummary = summary.toLowerCase().includes(BOOKING_EXTERNAL_CALENDAR_SUMMARY_MATCH);
      if (matchesSummary && startsAt && endsAt && endsAt > startsAt) {
        windows.push({ startUtc: startsAt.toUTC(), endUtc: endsAt.toUTC() });
      }
      continue;
    }

    const field = parseField(line);
    if (!field) continue;

    if (field.name === "SUMMARY") {
      summary = decodeIcsText(field.value);
      continue;
    }

    if (field.name === "DTSTART") {
      startsAt = parseIcsDate(field.value, field.params);
      continue;
    }

    if (field.name === "DTEND") {
      endsAt = parseIcsDate(field.value, field.params);
    }
  }

  return windows;
}

function floorToHalfHour(dt: DateTime): DateTime {
  const flooredMinute = dt.minute < 30 ? 0 : 30;
  return dt.set({ minute: flooredMinute, second: 0, millisecond: 0 });
}

function collectBlockedStartsForRange(
  windows: BusyWindow[],
  rangeStartUtc: DateTime,
  rangeEndUtc: DateTime,
): Set<string> {
  const blocked = new Set<string>();

  for (const window of windows) {
    const startUtc = window.startUtc > rangeStartUtc ? window.startUtc : rangeStartUtc;
    const endUtc = window.endUtc < rangeEndUtc ? window.endUtc : rangeEndUtc;
    if (endUtc <= startUtc) continue;

    const startLocal = startUtc.setZone(BOOKING_ZONE);
    const endLocal = endUtc.setZone(BOOKING_ZONE);
    let cursor = floorToHalfHour(startLocal);

    while (cursor < endLocal) {
      const slotEnd = cursor.plus({ minutes: 30 });
      if (slotEnd > startLocal && cursor < endLocal) {
        blocked.add(normalizeUtcIso(cursor));
      }
      cursor = cursor.plus({ minutes: 30 });
    }
  }

  return blocked;
}

async function fetchBusyWindows(): Promise<BusyWindow[]> {
  if (!BOOKING_EXTERNAL_CALENDAR_ICS_URL || !BOOKING_EXTERNAL_CALENDAR_SUMMARY_MATCH) return [];

  const now = Date.now();
  if (cachedBusyWindows && cachedBusyWindows.expiresAt > now) {
    return cachedBusyWindows.windows;
  }

  try {
    const res = await fetch(BOOKING_EXTERNAL_CALENDAR_ICS_URL, {
      method: "GET",
      cache: "no-store",
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    });
    if (!res.ok) return [];

    const ics = await res.text();
    const windows = parseBusyWindowsFromIcs(ics);
    cachedBusyWindows = {
      windows,
      expiresAt: now + CACHE_MS,
    };
    return windows;
  } catch {
    return [];
  }
}

export async function loadExternalBusySlotStarts(
  rangeStartUtcIso: string,
  rangeEndUtcIso: string,
): Promise<Set<string>> {
  const rangeStartUtc = DateTime.fromISO(rangeStartUtcIso, { zone: "utc" });
  const rangeEndUtc = DateTime.fromISO(rangeEndUtcIso, { zone: "utc" });
  if (!rangeStartUtc.isValid || !rangeEndUtc.isValid || rangeEndUtc <= rangeStartUtc) {
    return new Set<string>();
  }

  const windows = await fetchBusyWindows();
  return collectBlockedStartsForRange(windows, rangeStartUtc, rangeEndUtc);
}
