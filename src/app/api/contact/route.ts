import { NextRequest, NextResponse } from "next/server";
import { isTurnstileConfigured, validateTurnstileToken } from "@/lib/cloudflare-turnstile";
import { validateEmailInput } from "@/lib/email-validation";
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
  company?: string;
  industry?: string;
  message?: string;
  sourcePage?: string;
  turnstileToken?: string;
  /** Honeypot. Real users never see this field, so any value means a bot. */
  website?: string;
};

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

  // Silently accept honeypot hits so bots do not learn they were caught.
  if (cleanString(payload.website, 100)) {
    return NextResponse.json({ ok: true });
  }

  const name = cleanString(payload.name, 120);
  const email = cleanString(payload.email, 320).toLowerCase();
  const company = cleanString(payload.company, 160);
  const industry = cleanString(payload.industry, 80);
  const message = cleanString(payload.message, 5000);
  const sourcePage = cleanString(payload.sourcePage, 500) || "/";
  const turnstileToken = cleanString(payload.turnstileToken, 2048);
  const clientIp = getClientIp(req);

  if (!name) {
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  }

  const emailErr = validateEmailInput(email);
  if (emailErr) {
    return NextResponse.json({ error: emailErr }, { status: 400 });
  }

  if (!message || message.length < 10) {
    return NextResponse.json(
      { error: "Please include at least 10 characters in your message." },
      { status: 400 },
    );
  }

  if (isTurnstileConfigured()) {
    if (!turnstileToken) {
      return NextResponse.json({ error: "Please complete the security check." }, { status: 400 });
    }

    const verification = await validateTurnstileToken({ token: turnstileToken, remoteIp: clientIp });

    if (!verification.success) {
      return NextResponse.json({ error: "Security check failed. Please try again." }, { status: 400 });
    }
  }

  // Email is the system of record now that the database is gone, so a delivery
  // failure has to surface as an error rather than being swallowed.
  const apiKey = getResendApiKey();
  if (!apiKey) {
    return NextResponse.json(
      { error: "The contact form is not configured yet. Please email or call instead." },
      { status: 500 },
    );
  }

  const text = [
    "New contact form submission",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "N/A"}`,
    `Industry: ${industry || "N/A"}`,
    `Source Page: ${sourcePage}`,
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    const response = await postResendEmail(apiKey, {
      from: getNoreplyFrom(),
      to: [getContactNotificationEmail()],
      reply_to: email,
      subject: `New website inquiry from ${name}`,
      text,
      html: contactInquiryOwnerHtml({ name, email, company, industry, message, sourcePage }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Unable to send your message right now. Please email or call instead." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to send your message right now. Please email or call instead." },
      { status: 502 },
    );
  }
}
