import { DateTime } from "luxon";
import { BOOKING_ZONE, normalizeUtcIso } from "@/lib/booking/schedule";

/** A stretch of time the calendar says is taken. */
export type BusyWindow = {
  startUtc: DateTime;
  endUtc: DateTime;
};

function floorToHalfHour(dt: DateTime): DateTime {
  const flooredMinute = dt.minute < 30 ? 0 : 30;
  return dt.set({ minute: flooredMinute, second: 0, millisecond: 0 });
}

/**
 * Every half-hour slot start (UTC ISO) that overlaps a busy window inside the
 * range. A window that covers any part of a slot blocks the whole slot.
 */
export function collectBlockedStartsForRange(
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

/** True when any window overlaps the slot `[startIso, endIso)`. */
export function isSlotBusy(windows: BusyWindow[], startIso: string, endIso: string): boolean {
  const start = DateTime.fromISO(startIso, { zone: "utc" });
  const end = DateTime.fromISO(endIso, { zone: "utc" });
  return windows.some((window) => window.startUtc < end && window.endUtc > start);
}
