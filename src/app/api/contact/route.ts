import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { site } from "@/lib/site";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RESEND_API_KEY = process.env.RESEND_API_KEY?.trim();
const CONTACT_NOTIFICATION_EMAIL =
  process.env.CONTACT_NOTIFICATION_EMAIL?.trim() || site.email;
const CONTACT_FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL?.trim() || site.email;

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

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function sendNotificationEmail(input: {
  name: string;
  email: string;
  company: string;
  industry: string;
  message: string;
  sourcePage: string;
}) {
  if (!RESEND_API_KEY) return;

  const text = [
    "New contact form submission",
    "",
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    `Company: ${input.company || "N/A"}`,
    `Industry: ${input.industry || "N/A"}`,
    `Source Page: ${input.sourcePage}`,
    "",
    "Message:",
    input.message,
  ].join("\n");

  const html = `
    <h2>New contact form submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(input.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(input.email)}</p>
    <p><strong>Company:</strong> ${escapeHtml(input.company || "N/A")}</p>
    <p><strong>Industry:</strong> ${escapeHtml(input.industry || "N/A")}</p>
    <p><strong>Source Page:</strong> ${escapeHtml(input.sourcePage)}</p>
    <hr />
    <p><strong>Message</strong></p>
    <p>${escapeHtml(input.message).replace(/\n/g, "<br />")}</p>
  `;

  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: [CONTACT_NOTIFICATION_EMAIL],
        reply_to: input.email,
        subject: `New website inquiry from ${input.name}`,
        text,
        html,
      }),
    });
  } catch {
    // Keep form submission successful even if email provider is temporarily unavailable.
  }
}

export async function POST(req: NextRequest) {
  const contentLength = Number(req.headers.get("content-length") ?? 0);
  if (contentLength > 16_000) {
    return NextResponse.json({ error: "Payload too large." }, { status: 413 });
  }

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

    await sendNotificationEmail({
      name,
      email,
      company,
      industry,
      message,
      sourcePage,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Server configuration issue." }, { status: 500 });
  }
}
