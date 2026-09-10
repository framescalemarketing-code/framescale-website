import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import { DateTime } from "luxon";
import { bookingEmails } from "@/content/booking";
import { cleanString, getClientIp } from "@/lib/api-route-helpers";
import { collectBlockedStartsForRange, isSlotBusy, type BusyWindow } from "@/lib/booking/busy";
import { fetchExternalBusyWindows, isExternalCalendarConfigured } from "@/lib/booking/external-calendar-busy";
import {
  CalendarUnavailableError,
  createGoogleCalendarEvent,
  fetchGoogleBusyWindows,
  getGoogleCalendarConfig,
} from "@/lib/booking/google-calendar";
import { heldSlotStarts, holdSlot, isSlotHeld, releaseSlot } from "@/lib/booking/held-slots";
import {
  buildSlotsPayload,
  currentYearMonthPacific,
  formatBookingSlotPacificLabel,
  isSlotShape,
  isSlotWithinWindow,
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
import { getResendApiKey } from "@/lib/resend-client";
import { site } from "@/lib/site";

/**
 * Turnstile, the calendar read (8 s budget), the Google write, and two Resend
 * calls (12 s each) have to fit with room to spare: a request cut off between
 * the owner alert and the visitor confirmation would put the call in the
 * owner's calendar and tell the visitor it failed.
 */
export const maxDuration = 60;

const MAX_BODY_BYTES = 16_000;
const CALENDAR_DOWN = "I can't reach my calendar right now. Call or email instead.";
const SLOT_TAKEN = "That time just got taken. Pick another one.";
const SLOT_STALE = "That time is too soon now. Pick another one.";
const FAILED = "Something went wrong on my end. Call or email instead.";

/** Digits with the usual punctuation. Anything else in a phone field is text aimed at someone's inbox. */
const PHONE_SHAPE = /^\+?[\d\s().-]{10,40}$/;

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
 * Two ways of seeing the calendar. With the Google service account the site
 * reads busy time live and writes the booking itself. Without it, a private
 * iCal feed supplies the busy time and the booking travels by email as an
 * invite the owner adds. Either way, no calendar at all means no slots: a
 * grid nobody can book from is worse than the phone number. Any failure to
 * read is reported as the calendar being unavailable, in GET and POST alike.
 */
async function loadBusyWindows(rangeStartIso: string, rangeEndIso: string): Promise<BusyWindow[]> {
  const google = getGoogleCalendarConfig();
  const external = isExternalCalendarConfigured();
  if (!google && !external) {
    throw new CalendarUnavailableError("no calendar source is configured");
  }
  try {
    // Fresh array on purpose: both readers hand back their cached arrays.
    const windows: BusyWindow[] = [];
    if (google) windows.push(...(await fetchGoogleBusyWindows(google, rangeStartIso, rangeEndIso)));
    if (external) windows.push(...(await fetchExternalBusyWindows()));
    return windows;
  } catch (err) {
    if (err instanceof CalendarUnavailableError) throw err;
    throw new CalendarUnavailableError(err instanceof Error ? err.message : String(err));
  }
}

/** GET ?month=YYYY-MM: every slot in the month with its availability. */
export async function GET(req: NextRequest) {
  const ym = parseMonthParam(req.nextUrl.searchParams.get("month")) ?? currentYearMonthPacific();
  if (!isYearMonthWithinBounds(ym)) {
    return noStore({ error: "That month is outside the booking window." }, { status: 400 });
  }

  const monthStart = yearMonthStartPacific(ym);
  const rangeStart = normalizeUtcIso(monthStart);
  const rangeEnd = normalizeUtcIso(monthStart.plus({ months: 1 }));

  try {
    const windows = await loadBusyWindows(rangeStart, rangeEnd);
    const blocked = collectBlockedStartsForRange(
      windows,
      DateTime.fromISO(rangeStart, { zone: "utc" }),
      DateTime.fromISO(rangeEnd, { zone: "utc" }),
    );
    for (const held of heldSlotStarts()) blocked.add(held);

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

/** POST: book one slot. Writes the calendar if it can, sends the two emails, and only then says yes. */
export async function POST(req: NextRequest) {
  // Measured on the body itself: the Content-Length header is optional.
  const raw = await req.text();
  if (Buffer.byteLength(raw, "utf8") > MAX_BODY_BYTES) {
    return noStore({ error: "Payload too large." }, { status: 413 });
  }

  let payload: BookingPayload;
  try {
    payload = JSON.parse(raw) as BookingPayload;
  } catch {
    return noStore({ error: "Invalid JSON payload." }, { status: 400 });
  }
  if (!payload || typeof payload !== "object") {
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

  if (!startsAt || !isSlotShape(startsAt)) {
    return noStore({ error: "Pick a day and a time first." }, { status: 400 });
  }
  // A slot that was fine when the month loaded and has since crossed the
  // lead-time line: the client clears it and reloads, so a 409 like a taken slot.
  if (!isSlotWithinWindow(startsAt)) {
    return noStore({ error: SLOT_STALE }, { status: 409 });
  }
  if (!name) {
    return noStore({ error: "Name is required." }, { status: 400 });
  }
  const emailErr = validateEmailInput(email);
  if (emailErr) {
    return noStore({ error: emailErr }, { status: 400 });
  }
  if (phone.replace(/\D/g, "").length < 10 || !PHONE_SHAPE.test(phone)) {
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

  // The visitor is promised an email either way, and in email mode that
  // email is the only record, so no key means no booking.
  if (!getResendApiKey()) {
    console.error("[booking] RESEND_API_KEY is unset");
    return noStore({ error: CALENDAR_DOWN }, { status: 503 });
  }

  const startsAtIso = normalizeUtcIso(DateTime.fromISO(startsAt, { zone: "utc" }));
  const endsAtIso = slotEndIso(startsAtIso);

  if (isSlotHeld(startsAtIso)) {
    return noStore({ error: SLOT_TAKEN }, { status: 409 });
  }
  // Taken before the first await, so two requests on this instance cannot
  // both get past the check above. Released on every failure path below.
  holdSlot(startsAtIso);

  try {
    // Re-read the calendar for just this slot right before committing, so two
    // people who loaded the same month cannot both take it.
    const windows = await loadBusyWindows(startsAtIso, endsAtIso);
    if (isSlotBusy(windows, startsAtIso, endsAtIso)) {
      releaseSlot(startsAtIso);
      return noStore({ error: SLOT_TAKEN }, { status: 409 });
    }

    const google = getGoogleCalendarConfig();
    let eventId: string;
    let eventLink: string | null = null;
    if (google) {
      const event = await createGoogleCalendarEvent(google, {
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
      eventId = event.id;
      eventLink = event.htmlLink;
    } else {
      eventId = randomUUID();
    }

    const sent = await sendBookingNotifications({
      eventId,
      mode: google ? "google" : "email",
      eventLink,
      startsAtIso,
      endsAtIso,
      name,
      email,
      phone,
      note,
    });

    // In email mode the owner alert is the booking. If it did not go out,
    // nothing did, and the visitor must not be told otherwise.
    if (!google && !sent.owner) {
      releaseSlot(startsAtIso);
      console.error("[booking] owner alert failed; booking not recorded", eventId);
      return noStore({ error: FAILED }, { status: 500 });
    }

    return noStore({ ok: true, startsAt: startsAtIso, when: formatBookingSlotPacificLabel(startsAtIso) });
  } catch (err) {
    releaseSlot(startsAtIso);
    const message = err instanceof Error ? err.message : String(err);
    if (err instanceof CalendarUnavailableError) {
      console.error("[booking] calendar unavailable", message);
      return noStore({ error: CALENDAR_DOWN }, { status: 503 });
    }
    console.error("[booking] failed", message);
    return noStore({ error: FAILED }, { status: 500 });
  }
}
