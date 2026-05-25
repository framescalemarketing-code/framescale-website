import { NextRequest, NextResponse } from "next/server";
import { isTurnstileConfigured, validateTurnstileToken } from "@/lib/cloudflare-turnstile";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import {
  BOOKING_ZONE,
  buildSlotsPayload,
  formatBookingSlotPacificLabel,
  isAlgebraicallyValidSlot,
  normalizeStoredStartsAt,
  parseMonthParam,
} from "@/lib/booking-schedule";
import { DateTime } from "luxon";
import { validateEmailConfirm } from "@/lib/email-validation";
import { cleanString, getClientIp } from "@/lib/api-route-helpers";
import { sendBookingNotifications } from "@/lib/booking/send-booking-notifications";
import { loadExternalBusySlotStarts } from "@/lib/booking/external-calendar-busy";

function supabaseBookingsSetupHint(err: { message?: string } | null): string | null {
  const msg = err?.message ?? "";
  if (msg.includes("discovery_call_bookings") || msg.includes("schema cache")) {
    return "Run supabase/sql/003_discovery_call_bookings.sql in the Supabase SQL editor, then reload.";
  }
  return null;
}

type BookingPostBody = {
  startsAt?: string;
  name?: string;
  email?: string;
  confirmEmail?: string;
  company?: string;
  notes?: string;
  turnstileToken?: string;
};

export async function GET(req: NextRequest) {
  const month = req.nextUrl.searchParams.get("month");
  const parsed = parseMonthParam(month);
  if (!parsed) {
    return NextResponse.json({ error: "Use ?month=YYYY-MM (Pacific calendar month)." }, { status: 400 });
  }

  const { year, month: monthNum } = parsed;
  const monthStartUtc = DateTime.fromObject(
    { year, month: monthNum, day: 1, hour: 0, minute: 0, second: 0 },
    { zone: BOOKING_ZONE },
  )
    .toUTC()
    .toISO();
  const nextMonthUtc = DateTime.fromObject(
    { year, month: monthNum, day: 1, hour: 0, minute: 0, second: 0 },
    { zone: BOOKING_ZONE },
  )
    .plus({ months: 1 })
    .toUTC()
    .toISO();

  if (!monthStartUtc || !nextMonthUtc) {
    return NextResponse.json({ error: "Invalid month." }, { status: 400 });
  }

  try {
    const supabase = getSupabaseServerClient();
    const { data, error } = await supabase
      .from("discovery_call_bookings")
      .select("starts_at")
      .eq("status", "booked")
      .gte("starts_at", monthStartUtc)
      .lt("starts_at", nextMonthUtc);

    if (error) {
      const hint = supabaseBookingsSetupHint(error);
      return NextResponse.json(
        { error: hint ?? "Unable to load availability." },
        { status: hint ? 503 : 500 },
      );
    }

    const booked = new Set<string>();
    for (const row of data ?? []) {
      const raw = (row as { starts_at: string }).starts_at;
      const n = normalizeStoredStartsAt(raw);
      if (n) booked.add(n);
    }
    const externallyBlocked = await loadExternalBusySlotStarts(monthStartUtc, nextMonthUtc);

    const payload = buildSlotsPayload(year, monthNum, booked, externallyBlocked);
    if (!payload) {
      return NextResponse.json({ error: "Invalid month." }, { status: 400 });
    }

    return NextResponse.json(payload, {
      headers: {
        "Cache-Control": "private, max-age=45, stale-while-revalidate=120",
      },
    });
  } catch {
    return NextResponse.json({ error: "Server configuration issue." }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const contentLength = Number(req.headers.get("content-length") ?? 0);
  if (contentLength > 6000) {
    return NextResponse.json({ error: "Payload too large." }, { status: 413 });
  }

  let body: BookingPostBody;
  try {
    body = (await req.json()) as BookingPostBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const startsAtRaw = cleanString(body.startsAt, 80);
  const name = cleanString(body.name, 120);
  const email = cleanString(body.email, 320).toLowerCase();
  const confirmEmail = cleanString(body.confirmEmail, 320).toLowerCase();
  const company = cleanString(body.company, 160);
  const notes = cleanString(body.notes, 2000);
  const turnstileToken = cleanString(body.turnstileToken, 2048);
  const clientIp = getClientIp(req);

  if (!startsAtRaw) {
    return NextResponse.json({ error: "A start time is required." }, { status: 400 });
  }
  if (!name) {
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  }
  const emailErr = validateEmailConfirm(email, confirmEmail);
  if (emailErr) {
    return NextResponse.json({ error: emailErr }, { status: 400 });
  }

  const startsNorm = normalizeStoredStartsAt(startsAtRaw);
  if (!startsNorm || !isAlgebraicallyValidSlot(startsNorm)) {
    return NextResponse.json({ error: "That time is not available." }, { status: 400 });
  }
  if (isTurnstileConfigured()) {
    if (!turnstileToken) {
      return NextResponse.json({ error: "Please complete the security check." }, { status: 400 });
    }

    const verification = await validateTurnstileToken({
      token: turnstileToken,
      remoteIp: clientIp,
    });

    if (!verification.success) {
      return NextResponse.json({ error: "Security check failed. Please try again." }, { status: 400 });
    }
  }

  try {
    const slotUtc = DateTime.fromISO(startsNorm, { zone: "utc" });
    const slotMonthStartUtc = slotUtc.setZone(BOOKING_ZONE).startOf("month").toUTC().toISO();
    const slotNextMonthUtc = slotUtc
      .setZone(BOOKING_ZONE)
      .startOf("month")
      .plus({ months: 1 })
      .toUTC()
      .toISO();

    if (slotMonthStartUtc && slotNextMonthUtc) {
      const externallyBlocked = await loadExternalBusySlotStarts(slotMonthStartUtc, slotNextMonthUtc);
      if (externallyBlocked.has(startsNorm)) {
        return NextResponse.json({ error: "That time is unavailable. Pick another time." }, { status: 409 });
      }
    }

    const supabase = getSupabaseServerClient();

    const { data: existing, error: existingError } = await supabase
      .from("discovery_call_bookings")
      .select("id")
      .eq("starts_at", startsNorm)
      .eq("status", "booked")
      .maybeSingle();

    if (existingError) {
      const hint = supabaseBookingsSetupHint(existingError);
      return NextResponse.json(
        { error: hint ?? "Unable to complete booking right now." },
        { status: hint ? 503 : 500 },
      );
    }
    if (existing) {
      return NextResponse.json(
        { error: "That slot is already booked. Refresh the page and pick another time." },
        { status: 409 },
      );
    }

    const { error } = await supabase.from("discovery_call_bookings").insert({
      starts_at: startsNorm,
      name,
      email,
      company: company || null,
      notes: notes || null,
      user_agent: req.headers.get("user-agent"),
      ip_address: clientIp,
      metadata: {},
      status: "booked",
    });

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json({ error: "That slot was just taken. Pick another time." }, { status: 409 });
      }
      const hint = supabaseBookingsSetupHint(error);
      return NextResponse.json(
        { error: hint ?? "Unable to complete booking right now." },
        { status: hint ? 503 : 500 },
      );
    }

    const whenLabel = formatBookingSlotPacificLabel(startsNorm);
    await sendBookingNotifications({ startsAt: startsNorm, name, email, company, notes });

    return NextResponse.json({ ok: true, startsAt: startsNorm, whenLabel });
  } catch {
    return NextResponse.json({ error: "Server configuration issue." }, { status: 500 });
  }
}
