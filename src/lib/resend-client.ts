import { site } from "@/lib/site";

const RESEND_TIMEOUT_MS = 12_000;

export function getResendApiKey(): string | undefined {
  const key = process.env.RESEND_API_KEY?.trim();
  return key || undefined;
}

/** Owner inbox for contact and booking notifications (falls back to public site email). */
export function getContactNotificationEmail(): string {
  return process.env.CONTACT_NOTIFICATION_EMAIL?.trim() || site.email;
}

/** POST to Resend with a bounded wait so handlers do not hang if the API stalls. */
export function postResendEmail(apiKey: string, body: Record<string, unknown>): Promise<Response> {
  return fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(RESEND_TIMEOUT_MS),
  });
}
