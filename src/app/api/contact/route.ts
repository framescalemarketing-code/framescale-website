import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { validateEmailConfirm } from "@/lib/email-validation";
import { contactInquiryOwnerHtml } from "@/lib/email/templates";
import { getNoreplyFrom } from "@/lib/email/from";
import { cleanString, getClientIp } from "@/lib/api-route-helpers";
import {
  getContactNotificationEmail,
  getResendApiKey,
  postResendEmail,
} from "@/lib/resend-client";

type ContactPayload = {
  name?: string;
  email?: string;
  confirmEmail?: string;
  company?: string;
  industry?: string;
  message?: string;
  sourcePage?: string;
};

async function sendNotificationEmail(input: {
  name: string;
  email: string;
  company: string;
  industry: string;
  message: string;
  sourcePage: string;
}) {
  const apiKey = getResendApiKey();
  if (!apiKey) return;

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

  const html = contactInquiryOwnerHtml({
    name: input.name,
    email: input.email,
    company: input.company,
    industry: input.industry,
    message: input.message,
    sourcePage: input.sourcePage,
  });

  try {
    await postResendEmail(apiKey, {
      from: getNoreplyFrom(),
      to: [getContactNotificationEmail()],
      reply_to: input.email,
      subject: `New website inquiry from ${input.name}`,
      text,
      html,
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

  const name = cleanString(payload.name, 120);
  const email = cleanString(payload.email, 320).toLowerCase();
  const confirmEmail = cleanString(payload.confirmEmail, 320).toLowerCase();
  const company = cleanString(payload.company, 160);
  const industry = cleanString(payload.industry, 80);
  const message = cleanString(payload.message, 5000);
  const sourcePage = cleanString(payload.sourcePage, 500) || "/contact";

  if (!name) {
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  }
  const emailErr = validateEmailConfirm(email, confirmEmail);
  if (emailErr) {
    return NextResponse.json({ error: emailErr }, { status: 400 });
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
      ip_address: getClientIp(req),
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
