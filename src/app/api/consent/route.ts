import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { cleanString, getClientIp } from "@/lib/api-route-helpers";

type ConsentPayload = {
  consentId?: string;
  source?: string;
  policyVersion?: string;
  region?: string;
  consent?: {
    necessary?: boolean;
    analytics?: boolean;
    marketing?: boolean;
    preferences?: boolean;
  };
  metadata?: Record<string, unknown>;
};

export async function POST(req: NextRequest) {
  const contentLength = Number(req.headers.get("content-length") ?? 0);
  if (contentLength > 8_000) {
    return NextResponse.json({ error: "Payload too large." }, { status: 413 });
  }

  let payload: ConsentPayload;

  try {
    payload = (await req.json()) as ConsentPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const consentId = cleanString(payload.consentId, 120);
  const source = cleanString(payload.source, 80) || "website";
  const policyVersion = cleanString(payload.policyVersion, 40) || "v1";
  const region = cleanString(payload.region, 32) || null;

  if (!consentId) {
    return NextResponse.json({ error: "consentId is required." }, { status: 400 });
  }

  const consent = {
    necessary: Boolean(payload.consent?.necessary ?? true),
    analytics: Boolean(payload.consent?.analytics ?? false),
    marketing: Boolean(payload.consent?.marketing ?? false),
    preferences: Boolean(payload.consent?.preferences ?? false),
  };

  try {
    const supabase = getSupabaseServerClient();
    const { error } = await supabase.from("consent_events").insert({
      consent_id: consentId,
      source,
      policy_version: policyVersion,
      region,
      consent,
      metadata: payload.metadata ?? {},
      user_agent: req.headers.get("user-agent"),
      ip_address: getClientIp(req),
    });

    if (error) {
      return NextResponse.json({ error: "Unable to store consent right now." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Server configuration issue." }, { status: 500 });
  }
}
