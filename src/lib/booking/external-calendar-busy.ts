import "server-only";
import { DateTime, Duration, IANAZone } from "luxon";
import { rrulestr } from "rrule";
import { BOOKING_ZONE, normalizeUtcIso } from "@/lib/booking/schedule";
import type { BusyWindow } from "@/lib/booking/busy";

/**
 * Busy-time reader for a private iCal feed URL (Google Calendar's "secret
 * address in iCal format"), with no credentials. It can read a calendar but
 * never write to one. On its own it is the email-mode calendar: the site
 * reads busy time from it and bookings travel as invites the owner adds.
 * Alongside the Google service account it just adds a second calendar's busy
 * time on top.
 *
 * What counts as busy matches what Google's freeBusy reports: opaque,
 * non-cancelled events, with recurring series expanded across the booking
 * horizon and their exceptions honoured. Events marked "Free"
 * (TRANSP:TRANSPARENT), which is Google's default for all-day entries, do
 * not block anything.
 */
const BOOKING_EXTERNAL_CALENDAR_ICS_URL = process.env.BOOKING_EXTERNAL_CALENDAR_ICS_URL?.trim() || "";
const FETCH_TIMEOUT_MS = 8_000;
const CACHE_MS = 60_000;
/** Recurring series are expanded this far ahead; nothing past the booking horizon is offered anyway. */
const EXPAND_WEEKS_AHEAD = 10;

/** The Windows zone names Outlook feeds commonly carry. Anything else must be an IANA id. */
const WINDOWS_TO_IANA: Record<string, string> = {
  "Pacific Standard Time": "America/Los_Angeles",
  "Mountain Standard Time": "America/Denver",
  "US Mountain Standard Time": "America/Phoenix",
  "Central Standard Time": "America/Chicago",
  "Eastern Standard Time": "America/New_York",
  "Hawaiian Standard Time": "Pacific/Honolulu",
  "Alaskan Standard Time": "America/Anchorage",
  "GMT Standard Time": "Europe/London",
  UTC: "UTC",
  "Coordinated Universal Time": "UTC",
};

type CacheEntry = {
  expiresAt: number;
  windows: BusyWindow[];
};

let cachedBusyWindows: CacheEntry | null = null;

export function isExternalCalendarConfigured(): boolean {
  return Boolean(BOOKING_EXTERNAL_CALENDAR_ICS_URL);
}

type ParsedDate = {
  dt: DateTime;
  /**
   * The zone a recurring series repeats in: the TZID it was given, "utc" for
   * a Z-stamped time (which RFC 5545 fixes at that instant across DST), and
   * the booking zone for all-day dates.
   */
  zone: string;
  allDay: boolean;
};

type EventRecord = {
  uid: string;
  start: ParsedDate | null;
  end: ParsedDate | null;
  /** ISO 8601 duration, used when DTEND is absent. */
  duration: string | null;
  rrule: string | null;
  exdates: DateTime[];
  recurrenceId: DateTime | null;
  transparent: boolean;
  cancelled: boolean;
};

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

/** Split on a separator, ignoring any inside double quotes (a TZID may read `"(UTC-08:00) Pacific Time"`). */
function splitOutsideQuotes(text: string, separator: string, limit = Infinity): string[] {
  const parts: string[] = [];
  let current = "";
  let quoted = false;
  for (const ch of text) {
    if (ch === '"') quoted = !quoted;
    if (ch === separator && !quoted && parts.length < limit - 1) {
      parts.push(current);
      current = "";
      continue;
    }
    current += ch;
  }
  parts.push(current);
  return parts;
}

function parseField(line: string): { name: string; params: Map<string, string>; value: string } | null {
  const [head, value] = splitOutsideQuotes(line, ":", 2);
  if (!head || value === undefined) return null;

  const [rawName, ...paramParts] = splitOutsideQuotes(head, ";");
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

/**
 * A TZID that luxon does not know would otherwise drop the event, which
 * offers a slot the owner is busy in. Unknown zones fall back to the booking
 * zone with a warning: a possibly mis-timed block beats an open slot.
 */
function resolveIcsTimezone(tzidRaw: string | undefined): string {
  const tzid = (tzidRaw || "").trim();
  if (!tzid) return BOOKING_ZONE;
  const zone = WINDOWS_TO_IANA[tzid] || tzid;
  if (IANAZone.isValidZone(zone)) return zone;
  console.warn(`[booking] external calendar uses unknown TZID "${tzid}"; treating as ${BOOKING_ZONE}`);
  return BOOKING_ZONE;
}

function parseIcsDate(value: string, params: Map<string, string>): ParsedDate | null {
  const valueType = (params.get("VALUE") || "").toUpperCase();
  if (valueType === "DATE" || /^\d{8}$/.test(value)) {
    if (!/^\d{8}$/.test(value)) return null;
    const dt = DateTime.fromFormat(value, "yyyyLLdd", { zone: BOOKING_ZONE }).startOf("day");
    return dt.isValid ? { dt, zone: BOOKING_ZONE, allDay: true } : null;
  }

  const m = value.match(/^(\d{8})T(\d{4}|\d{6})(Z?)$/);
  if (!m) return null;

  const [, datePart, timePart, zPart] = m;
  const timeFormat = timePart.length === 4 ? "HHmm" : "HHmmss";
  const format = zPart ? `yyyyLLdd'T'${timeFormat}'Z'` : `yyyyLLdd'T'${timeFormat}`;
  const zone = zPart ? "utc" : resolveIcsTimezone(params.get("TZID"));
  const dt = DateTime.fromFormat(`${datePart}${zPart ? "T" + timePart + "Z" : "T" + timePart}`, format, { zone });
  return dt.isValid ? { dt, zone, allDay: false } : null;
}

/** DTEND is optional: a DURATION, or for an all-day date the rest of that day, stands in for it. */
function resolveEnd(record: EventRecord): ParsedDate | null {
  if (record.end) return record.end;
  if (!record.start) return null;
  if (record.duration) {
    const span = Duration.fromISO(record.duration);
    if (span.isValid && span.as("minutes") > 0) {
      return { ...record.start, dt: record.start.dt.plus(span) };
    }
  }
  if (record.start.allDay) {
    return { ...record.start, dt: record.start.dt.plus({ days: 1 }) };
  }
  return null;
}

/** EXDATE and RECURRENCE-ID may list several values separated by commas. */
function parseIcsDateList(value: string, params: Map<string, string>): DateTime[] {
  return value
    .split(",")
    .map((part) => parseIcsDate(part.trim(), params))
    .filter((parsed): parsed is ParsedDate => parsed !== null)
    .map((parsed) => parsed.dt);
}

function parseEvents(ics: string): EventRecord[] {
  const lines = unfoldIcsLines(ics);
  const records: EventRecord[] = [];
  let current: EventRecord | null = null;

  for (const line of lines) {
    if (line === "BEGIN:VEVENT") {
      current = {
        uid: "",
        start: null,
        end: null,
        duration: null,
        rrule: null,
        exdates: [],
        recurrenceId: null,
        transparent: false,
        cancelled: false,
      };
      continue;
    }

    if (!current) continue;

    if (line === "END:VEVENT") {
      current.end = resolveEnd(current);
      records.push(current);
      current = null;
      continue;
    }

    const field = parseField(line);
    if (!field) continue;

    switch (field.name) {
      case "UID":
        current.uid = field.value.trim();
        break;
      case "DTSTART":
        current.start = parseIcsDate(field.value, field.params);
        break;
      case "DTEND":
        current.end = parseIcsDate(field.value, field.params);
        break;
      case "DURATION":
        current.duration = field.value.trim();
        break;
      case "RRULE":
        current.rrule = field.value.trim();
        break;
      case "EXDATE":
        current.exdates.push(...parseIcsDateList(field.value, field.params));
        break;
      case "RECURRENCE-ID":
        current.recurrenceId = parseIcsDate(field.value, field.params)?.dt ?? null;
        break;
      case "TRANSP":
        current.transparent = field.value.trim().toUpperCase() === "TRANSPARENT";
        break;
      case "STATUS":
        current.cancelled = field.value.trim().toUpperCase() === "CANCELLED";
        break;
      default:
        break;
    }
  }

  return records;
}

/** Wall-clock time in `zone` written as if it were UTC, which is how rrule wants floating input. */
function floatingStamp(dt: DateTime, zone: string): string {
  return `${dt.setZone(zone).toFormat("yyyyLLdd'T'HHmmss")}Z`;
}

function floatingDate(dt: DateTime, zone: string): Date {
  const z = dt.setZone(zone);
  return new Date(Date.UTC(z.year, z.month - 1, z.day, z.hour, z.minute, z.second));
}

/** rrule reads UNTIL against the floating times, so a UTC UNTIL is moved into the event's zone first. */
function normalizeUntil(rule: string, zone: string): string {
  if (zone === "utc") return rule;
  return rule.replace(/UNTIL=(\d{8}T\d{6})Z/, (_, stamp: string) => {
    const until = DateTime.fromFormat(stamp, "yyyyLLdd'T'HHmmss", { zone: "utc" });
    return until.isValid ? `UNTIL=${until.setZone(zone).toFormat("yyyyLLdd'T'HHmmss")}` : `UNTIL=${stamp}Z`;
  });
}

function expandSeries(
  record: EventRecord,
  exclusions: Set<string>,
  rangeStart: DateTime,
  rangeEnd: DateTime,
): BusyWindow[] {
  const { start, end, rrule } = record;
  if (!start || !end || !rrule) return [];

  const zone = start.zone;
  const durationMinutes = end.dt.diff(start.dt, "minutes").minutes;
  if (!(durationMinutes > 0)) return [];

  let occurrences: Date[];
  try {
    const set = rrulestr(`DTSTART:${floatingStamp(start.dt, zone)}\nRRULE:${normalizeUntil(rrule, zone)}`, {
      forceset: true,
    });
    occurrences = set.between(floatingDate(rangeStart, zone), floatingDate(rangeEnd, zone), true);
  } catch (err) {
    // An unparseable rule blocks its first occurrence rather than nothing.
    console.warn("[booking] could not expand RRULE", rrule, err instanceof Error ? err.message : String(err));
    return [{ startUtc: start.dt.toUTC(), endUtc: end.dt.toUTC() }];
  }

  const windows: BusyWindow[] = [];
  for (const occurrence of occurrences) {
    const local = DateTime.fromObject(
      {
        year: occurrence.getUTCFullYear(),
        month: occurrence.getUTCMonth() + 1,
        day: occurrence.getUTCDate(),
        hour: occurrence.getUTCHours(),
        minute: occurrence.getUTCMinutes(),
        second: occurrence.getUTCSeconds(),
      },
      { zone },
    );
    if (!local.isValid || exclusions.has(normalizeUtcIso(local))) continue;
    windows.push({ startUtc: local.toUTC(), endUtc: local.plus({ minutes: durationMinutes }).toUTC() });
  }
  return windows;
}

export function parseBusyWindowsFromIcs(ics: string): BusyWindow[] {
  const records = parseEvents(ics);
  const now = DateTime.now();
  const rangeStart = now.minus({ days: 1 });
  const rangeEnd = now.plus({ weeks: EXPAND_WEEKS_AHEAD });

  // An overridden occurrence (RECURRENCE-ID) replaces the one the series
  // would have produced, whether it moved, was cancelled, or was marked free.
  const overrides = new Map<string, Set<string>>();
  for (const record of records) {
    if (!record.recurrenceId) continue;
    const set = overrides.get(record.uid) ?? new Set<string>();
    set.add(normalizeUtcIso(record.recurrenceId));
    overrides.set(record.uid, set);
  }

  const windows: BusyWindow[] = [];
  for (const record of records) {
    if (record.transparent || record.cancelled) continue;
    if (!record.start || !record.end || record.end.dt <= record.start.dt) continue;

    if (record.rrule && !record.recurrenceId) {
      const exclusions = new Set<string>(overrides.get(record.uid) ?? []);
      for (const exdate of record.exdates) exclusions.add(normalizeUtcIso(exdate));
      windows.push(...expandSeries(record, exclusions, rangeStart, rangeEnd));
      continue;
    }

    windows.push({ startUtc: record.start.dt.toUTC(), endUtc: record.end.dt.toUTC() });
  }

  return windows;
}

export async function fetchExternalBusyWindows(): Promise<BusyWindow[]> {
  if (!BOOKING_EXTERNAL_CALENDAR_ICS_URL) return [];

  const now = Date.now();
  if (cachedBusyWindows && cachedBusyWindows.expiresAt > now) {
    return cachedBusyWindows.windows;
  }

  const res = await fetch(BOOKING_EXTERNAL_CALENDAR_ICS_URL, {
    method: "GET",
    cache: "no-store",
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
  });
  if (!res.ok) {
    throw new Error(`external calendar responded ${res.status}`);
  }

  const windows = parseBusyWindowsFromIcs(await res.text());
  cachedBusyWindows = { windows, expiresAt: now + CACHE_MS };
  return windows;
}
