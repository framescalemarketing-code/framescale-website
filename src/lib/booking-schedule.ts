import { DateTime } from "luxon";

/** All slots are interpreted and displayed in this zone (matches 916 service area). */
export const BOOKING_ZONE = "America/Los_Angeles";

const SLOT_MINUTES = 30;
/** First bookable start (Pacific). */
const OPEN_MINUTES = 9 * 60; // 09:00
/**
 * Last start (Pacific): 4:30 PM so a 30-minute intro call ends at 5:00 PM.
 * Monday–Friday only; weekends are excluded in the slot builder.
 */
const LAST_START_MINUTES = 16 * 60 + 30; // 16:30
const MIN_LEAD_MINUTES = 120;
const MAX_WEEKS_AHEAD = 8;

export type BookingSlotStatus = "available" | "booked" | "unavailable";

export type BookingSlotDto = {
  start: string;
  label: string;
  calendarDay: string;
  status: BookingSlotStatus;
};

export type BookingSlotsPayload = {
  timeZone: typeof BOOKING_ZONE;
  year: number;
  month: number;
  firstWeekdayPad: number;
  daysInMonth: number;
  slots: BookingSlotDto[];
};

export function parseMonthParam(param: string | null): { year: number; month: number } | null {
  if (!param || !/^\d{4}-\d{2}$/.test(param)) return null;
  const [ys, ms] = param.split("-");
  const year = Number(ys);
  const month = Number(ms);
  if (!Number.isFinite(year) || !Number.isFinite(month) || month < 1 || month > 12) return null;
  return { year, month };
}

function slotLabel(zoned: DateTime): string {
  return `${zoned.toFormat("h:mm a")} PT`;
}

export function normalizeUtcIso(dt: DateTime): string {
  const utc = dt.toUTC();
  const iso = utc.toISO({ suppressMilliseconds: true });
  return iso ?? utc.toISO() ?? "";
}

/** Normalize any ISO timestamp from the DB to the same string form used in `BookingSlotDto.start`. */
export function normalizeStoredStartsAt(iso: string): string | null {
  const dt = DateTime.fromISO(iso, { zone: "utc" });
  if (!dt.isValid) return null;
  return normalizeUtcIso(dt);
}

/** Sunday-first grid: number of empty cells before day 1 (Luxon: Mon=1 … Sun=7). */
export function firstWeekdayPadSunFirst(monthStart: DateTime): number {
  return monthStart.weekday % 7;
}

export function buildSlotsPayload(
  year: number,
  month: number,
  bookedStartsUtc: Set<string>,
): BookingSlotsPayload | null {
  const monthStart = DateTime.fromObject({ year, month, day: 1 }, { zone: BOOKING_ZONE });
  if (!monthStart.isValid) return null;

  const monthEnd = monthStart.endOf("month");
  const daysInMonth = monthEnd.day;
  const nowZoned = DateTime.now().setZone(BOOKING_ZONE);
  const earliestBookable = nowZoned.plus({ minutes: MIN_LEAD_MINUTES });
  const lastBookableDay = nowZoned.plus({ weeks: MAX_WEEKS_AHEAD }).endOf("day");

  const slots: BookingSlotDto[] = [];

  for (let d = 1; d <= daysInMonth; d++) {
    const dayStart = DateTime.fromObject({ year, month, day: d }, { zone: BOOKING_ZONE });
    if (!dayStart.isValid) continue;
    if (dayStart.weekday >= 6) continue; // Saturday / Sunday

    for (let mins = OPEN_MINUTES; mins <= LAST_START_MINUTES; mins += SLOT_MINUTES) {
      const h = Math.floor(mins / 60);
      const m = mins % 60;
      const slotZoned = DateTime.fromObject(
        { year, month, day: d, hour: h, minute: m, second: 0, millisecond: 0 },
        { zone: BOOKING_ZONE },
      );
      if (!slotZoned.isValid) continue;

      const startIso = normalizeUtcIso(slotZoned);
      let status: BookingSlotStatus;
      if (bookedStartsUtc.has(startIso)) {
        status = "booked";
      } else if (slotZoned < earliestBookable || slotZoned > lastBookableDay) {
        status = "unavailable";
      } else {
        status = "available";
      }

      slots.push({
        start: startIso,
        label: slotLabel(slotZoned),
        calendarDay: dayStart.toFormat("yyyy-MM-dd"),
        status,
      });
    }
  }

  return {
    timeZone: BOOKING_ZONE,
    year,
    month,
    firstWeekdayPad: firstWeekdayPadSunFirst(monthStart),
    daysInMonth,
    slots,
  };
}

export function isAlgebraicallyValidSlot(startsAtIso: string): boolean {
  const slotUtc = DateTime.fromISO(startsAtIso, { zone: "utc" });
  if (!slotUtc.isValid) return false;
  const slot = slotUtc.setZone(BOOKING_ZONE);
  if (slot.weekday >= 6) return false;
  if (slot.second !== 0 || slot.millisecond !== 0) return false;
  if (slot.minute !== 0 && slot.minute !== 30) return false;

  const minutesFromMidnight = slot.hour * 60 + slot.minute;
  if (minutesFromMidnight < OPEN_MINUTES || minutesFromMidnight > LAST_START_MINUTES) return false;

  const nowZoned = DateTime.now().setZone(BOOKING_ZONE);
  if (slot < nowZoned.plus({ minutes: MIN_LEAD_MINUTES })) return false;
  if (slot > nowZoned.plus({ weeks: MAX_WEEKS_AHEAD }).endOf("day")) return false;

  return true;
}
