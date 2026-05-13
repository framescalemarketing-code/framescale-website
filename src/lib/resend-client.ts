const RESEND_TIMEOUT_MS = 12_000;

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
