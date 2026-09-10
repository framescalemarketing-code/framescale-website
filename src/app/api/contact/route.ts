import { NextRequest, NextResponse } from "next/server";
import { isTurnstileConfigured, validateTurnstileToken } from "@/lib/cloudflare-turnstile";
import { validateEmailInput } from "@/lib/email-validation";
import { contactInquiryOwnerHtml, contactReceiptHtml, contactReceiptText } from "@/lib/email/templates";
import { getNoreplyFrom } from "@/lib/email/from";
import { cleanString, getClientIp } from "@/lib/api-route-helpers";
import { checkRateLimit } from "@/lib/rate-limit";
import {
  getContactNotificationEmail,
  getResendApiKey,
  postResendEmail,
} from "@/lib/resend-client";
import { contactReceipt } from "@/content/contact";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  sourcePage?: string;
  turnstileToken?: string;
  /**
   * Honeypot. Real visitors never see the field, so any value means a bot. The
   * name is deliberately meaningless: the old `website` field was exactly what
   * browser autofill likes to populate, and a filled honeypot is dropped.
   */
  fs_contact_extra?: string;
};

const SEND_FAILED = "Unable to send your message right now. Please email or call instead.";

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

  const clientIp = getClientIp(req);

  // Still a 200, so a bot learns nothing. The log line is what makes a false
  // positive visible: if a real person's autofill ever trips this, it shows in
  // the Vercel runtime logs instead of vanishing.
  if (cleanString(payload.fs_contact_extra, 100)) {
    console.warn("[contact] honeypot tripped", {
      ip: clientIp,
      ua: req.headers.get("user-agent")?.slice(0, 120) ?? null,
    });
    return NextResponse.json({ ok: true });
  }

  const limit = checkRateLimit(clientIp);
  if (!limit.ok) {
    return NextResponse.json(
      { error: "Too many messages in a row. Wait a few minutes, or call instead." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfterSeconds) } },
    );
  }

  const name = cleanString(payload.name, 120);
  const email = cleanString(payload.email, 320).toLowerCase();
  const message = cleanString(payload.message, 5000);
  const sourcePage = cleanString(payload.sourcePage, 500) || "/";
  const turnstileToken = cleanString(payload.turnstileToken, 2048);

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

  // The form must never run unprotected on the live site. `VERCEL_ENV` is set
  // by Vercel itself; previews and local runs may go without Turnstile.
  if (process.env.VERCEL_ENV === "production" && !isTurnstileConfigured()) {
    console.error("[contact] Turnstile is not configured in production");
    return NextResponse.json(
      { error: "The contact form is not configured yet. Please email or call instead." },
      { status: 500 },
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
      html: contactInquiryOwnerHtml({ name, email, message, sourcePage }),
    });

    if (!response.ok) {
      return NextResponse.json({ error: SEND_FAILED }, { status: 502 });
    }
  } catch {
    return NextResponse.json({ error: SEND_FAILED }, { status: 502 });
  }

  // The receipt. The owner email is the record and has already gone out, so a
  // failure here is logged and the visitor still sees success.
  try {
    const receipt = await postResendEmail(apiKey, {
      from: getNoreplyFrom(),
      to: [email],
      reply_to: getContactNotificationEmail(),
      subject: contactReceipt.subject,
      text: contactReceiptText({ name }),
      html: contactReceiptHtml({ name }),
    });
    if (!receipt.ok) {
      console.warn("[contact] receipt failed", receipt.status);
    }
  } catch (err) {
    console.warn("[contact] receipt threw", err instanceof Error ? err.message : String(err));
  }

  return NextResponse.json({ ok: true });
}
