import "server-only";

/**
 * Slots booked through this server instance, held for a while so the same
 * time cannot be offered again before the calendar reflects it. In Google
 * mode the event lands in the calendar instantly and this is a belt to that
 * pair of braces. In email mode it is what stands between two visitors and
 * the same half hour until the owner adds the invite. It is per instance
 * and gone on a cold start, so it narrows that window rather than closing
 * it; the owner alert says to add the invite promptly for that reason.
 *
 * The route takes the hold before any network call and releases it on every
 * failure path, so two requests on one instance cannot both pass the check.
 */
const HOLD_MS = 12 * 60 * 60_000;

const held = new Map<string, number>();

function prune(now: number): void {
  for (const [start, expiresAt] of held) {
    if (expiresAt <= now) held.delete(start);
  }
}

export function holdSlot(startIso: string): void {
  held.set(startIso, Date.now() + HOLD_MS);
}

export function releaseSlot(startIso: string): void {
  held.delete(startIso);
}

export function isSlotHeld(startIso: string): boolean {
  const now = Date.now();
  prune(now);
  return held.has(startIso);
}

/** Every start currently held, for blocking them in the month payload. */
export function heldSlotStarts(): Set<string> {
  prune(Date.now());
  return new Set(held.keys());
}
