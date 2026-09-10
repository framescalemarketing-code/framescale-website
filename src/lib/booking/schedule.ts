import { DateTime } from "luxon";

/** All slots are interpreted and displayed in Pacific time, where Jonathan is. */
export const BOOKING_ZONE = "America/Los_Angeles";

/** Half-hour calls on a half-hour grid. */
export const CALL_LENGTH_MINUTES = 30;
const BOOKABLE_INTERVAL_MINUTES = 30;
/** First bookable start (Pacific). */
const OPEN_MINUTES = 9 * 60;
/** Last bookable start (Pacific): 4:30 PM, so the call ends at 5:00 PM. Weekends are excluded in the slot builder. */
const LAST_START_MINUTES = 16 * 60 + 30;
/** Nothing sooner than this, so a booking is never sitting on a call that starts in ten minutes. */
const MIN_LEAD_MINUTES = 120;
const MAX_WEEKS_AHEAD = 8;
/** How many months forward the picker can page. Slots past MAX_WEEKS_AHEAD show as unavailable. */
const MAX_MONTHS_AHEAD = 2;

export type BookingSlotStatus = "available" | "unavailable";

export type BookingSlotDto = {
  /** UTC ISO start, the value the client sends back when booking. */
  start: string;
  /** "9:00 AM PT". Rendered as-is so the client needs no timezone library. */
  label: string;
  /** Pacific calendar day, `YYYY-MM-DD`. */
  calendarDay: string;
  status: BookingSlotStatus;
};

export type BookingSlotsPayload = {
  timeZone: typeof BOOKING_ZONE;
  year: number;
  month: number;
  /** "September 2026". */
  monthLabel: string;
  /** Today's Pacific date, `YYYY-MM-DD`. */
  today: string;
  /** Sunday-first grid: number of empty cells before day 1. */
  firstWeekdayPad: number;
  daysInMonth: number;
  /** Adjacent months the picker may page to, or null at the bounds. */
  prevMonth: string | null;
  nextMonth: string | null;
  slots: BookingSlotDto[];
};

function nowPacific(): DateTime {
  return DateTime.now().setZone(BOOKING_ZONE);
}

/** Current Pacific calendar month as `YYYY-MM`. */
export function currentYearMonthPacific(): string {
  return nowPacific().toFormat("yyyy-MM");
}

export function yearMonthStartPacific(ym: string): DateTime {
  const [y, m] = ym.split("-").map(Number);
  return DateTime.fromObject({ year: y, month: m, day: 1 }, { zone: BOOKING_ZONE });
}

/** Bookable month picker bounds: the current month through MAX_MONTHS_AHEAD. */
export function bookingMonthBoundsPacific(): { minYm: string; maxYm: string } {
  const now = nowPacific();
  return {
    minYm: now.startOf("month").toFormat("yyyy-MM"),
    maxYm: now.plus({ months: MAX_MONTHS_AHEAD }).startOf("month").toFormat("yyyy-MM"),
  };
}

export function isYearMonthWithinBounds(ym: string): boolean {
  const { minYm, maxYm } = bookingMonthBoundsPacific();
  return ym >= minYm && ym <= maxYm;
}

/** Human-readable slot label for emails and the confirmation screen. */
export function formatBookingSlotPacificLabel(startsAtIso: string): string {
  const dt = DateTime.fromISO(startsAtIso, { zone: "utc" }).setZone(BOOKING_ZONE);
  if (!dt.isValid) return startsAtIso;
  return `${dt.toFormat("cccc, MMMM d")} at ${dt.toFormat("h:mm a")} Pacific`;
}

export function parseMonthParam(param: string | null): string | null {
  if (!param || !/^\d{4}-\d{2}$/.test(param)) return null;
  const month = Number(param.slice(5));
  if (month < 1 || month > 12) return null;
  return param;
}

function slotLabel(zoned: DateTime): string {
  return `${zoned.toFormat("h:mm a")} PT`;
}

export function normalizeUtcIso(dt: DateTime): string {
  const utc = dt.toUTC();
  const iso = utc.toISO({ suppressMilliseconds: true });
  return iso ?? utc.toISO() ?? "";
}

/** The UTC ISO end of a call that starts at `startsAtIso`. */
export function slotEndIso(startsAtIso: string): string {
  return normalizeUtcIso(DateTime.fromISO(startsAtIso, { zone: "utc" }).plus({ minutes: CALL_LENGTH_MINUTES }));
}

/** Sunday-first grid: number of empty cells before day 1 (Luxon: Mon=1 … Sun=7). */
function firstWeekdayPadSunFirst(monthStart: DateTime): number {
  return monthStart.weekday % 7;
}

/**
 * Every candidate slot in a Pacific month, marked available unless it is on
 * a weekend, too soon, too far out, or in `unavailableStartsUtc` (the busy
 * times read from the calendar).
 */
export function buildSlotsPayload(ym: string, unavailableStartsUtc: Set<string>): BookingSlotsPayload | null {
  const monthStart = yearMonthStartPacific(ym);
  if (!monthStart.isValid) return null;

  const { year, month } = monthStart;
  const monthEnd = monthStart.endOf("month");
  const daysInMonth = monthEnd.day;
  const nowZoned = nowPacific();
  const earliestBookable = nowZoned.plus({ minutes: MIN_LEAD_MINUTES });
  const lastBookableDay = nowZoned.plus({ weeks: MAX_WEEKS_AHEAD }).endOf("day");
  const { minYm, maxYm } = bookingMonthBoundsPacific();

  const slots: BookingSlotDto[] = [];

  for (let d = 1; d <= daysInMonth; d++) {
    const dayStart = DateTime.fromObject({ year, month, day: d }, { zone: BOOKING_ZONE });
    if (!dayStart.isValid) continue;
    if (dayStart.weekday >= 6) continue; // Saturday / Sunday

    for (let mins = OPEN_MINUTES; mins <= LAST_START_MINUTES; mins += BOOKABLE_INTERVAL_MINUTES) {
      const slotZoned = DateTime.fromObject(
        { year, month, day: d, hour: Math.floor(mins / 60), minute: mins % 60, second: 0, millisecond: 0 },
        { zone: BOOKING_ZONE },
      );
      if (!slotZoned.isValid) continue;

      const startIso = normalizeUtcIso(slotZoned);
      const available =
        !unavailableStartsUtc.has(startIso) && slotZoned >= earliestBookable && slotZoned <= lastBookableDay;

      slots.push({
        start: startIso,
        label: slotLabel(slotZoned),
        calendarDay: dayStart.toFormat("yyyy-MM-dd"),
        status: available ? "available" : "unavailable",
      });
    }
  }

  const prev = monthStart.minus({ months: 1 }).toFormat("yyyy-MM");
  const next = monthStart.plus({ months: 1 }).toFormat("yyyy-MM");

  return {
    timeZone: BOOKING_ZONE,
    year,
    month,
    monthLabel: monthStart.toFormat("MMMM yyyy"),
    today: nowZoned.toFormat("yyyy-MM-dd"),
    firstWeekdayPad: firstWeekdayPadSunFirst(monthStart),
    daysInMonth,
    prevMonth: prev >= minYm ? prev : null,
    nextMonth: next <= maxYm ? next : null,
    slots,
  };
}

/**
 * Whether a start the client sent back is one the builder above could have
 * produced right now: on the grid, in hours, on a weekday, and inside the
 * lead and horizon windows. The busy check against the calendar is separate.
 */
export function isValidSlotStart(startsAtIso: string): boolean {
  const slotUtc = DateTime.fromISO(startsAtIso, { zone: "utc" });
  if (!slotUtc.isValid) return false;
  const slot = slotUtc.setZone(BOOKING_ZONE);
  if (slot.weekday >= 6) return false;
  if (slot.second !== 0 || slot.millisecond !== 0) return false;
  if (slot.minute % BOOKABLE_INTERVAL_MINUTES !== 0) return false;

  const minutesFromMidnight = slot.hour * 60 + slot.minute;
  if (minutesFromMidnight < OPEN_MINUTES || minutesFromMidnight > LAST_START_MINUTES) return false;

  const nowZoned = nowPacific();
  if (slot < nowZoned.plus({ minutes: MIN_LEAD_MINUTES })) return false;
  if (slot > nowZoned.plus({ weeks: MAX_WEEKS_AHEAD }).endOf("day")) return false;

  return true;
}
