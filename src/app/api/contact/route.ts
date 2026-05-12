import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  industry?: string;
  message?: string;
  sourcePage?: string;
};

function clean(value: string | undefined, maxLen: number) {
  return (value ?? "").trim().slice(0, maxLen);
}

function clientIp(req: NextRequest) {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0]?.trim() || null;
  return req.headers.get("x-real-ip") || null;
}

export async function POST(req: NextRequest) {
  let payload: ContactPayload;

  try {
    payload = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const name = clean(payload.name, 120);
  const email = clean(payload.email, 320).toLowerCase();
  const company = clean(payload.company, 160);
  const industry = clean(payload.industry, 80);
  const message = clean(payload.message, 5000);
  const sourcePage = clean(payload.sourcePage, 500) || "/contact";

  if (!name) {
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  }
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
  }
  if (!message || message.length < 10) {
    return NextResponse.json({ error: "Please include at least 10 characters in your message." }, { status: 400 });
  }

  try {
    const supabase = getSupabaseServerClient();
    const { error } = await supabase.from("contact_submissions").insert({
      name,
      email,
      company: company || null,
      industry: industry || null,
      message,
      source_page: sourcePage,
      user_agent: req.headers.get("user-agent"),
      ip_address: clientIp(req),
      metadata: {},
      status: "new",
    });

    if (error) {
      return NextResponse.json({ error: "Unable to save your message right now." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Server configuration issue." }, { status: 500 });
  }
}
