import "server-only";

type TurnstileVerifyResult = {
  success: boolean;
  ["error-codes"]?: string[];
};

function getTurnstileSiteKey(): string {
  return process.env.CLOUDFLARE_SITE_KEY?.trim() || "";
}

function getTurnstileSecretKey(): string {
  return process.env.CLOUDFLARE_SECRET_KEY?.trim() || "";
}

export function getTurnstileSiteKeyForServer(): string {
  return getTurnstileSiteKey();
}

export function isTurnstileConfigured(): boolean {
  return Boolean(getTurnstileSiteKey() && getTurnstileSecretKey());
}

export async function validateTurnstileToken(input: {
  token: string;
  remoteIp?: string | null;
}): Promise<TurnstileVerifyResult> {
  const secret = getTurnstileSecretKey();
  if (!secret) {
    return { success: false, "error-codes": ["missing-input-secret"] };
  }

  const body = new URLSearchParams({
    secret,
    response: input.token,
    idempotency_key: crypto.randomUUID(),
  });
  if (input.remoteIp) {
    body.set("remoteip", input.remoteIp);
  }

  // A stalled or broken Cloudflare reply counts as a failed check. It never throws,
  // and it never lets a visitor through.
  const failed: TurnstileVerifyResult = { success: false, "error-codes": ["internal-error"] };
  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body.toString(),
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) return failed;

    return (await response.json()) as TurnstileVerifyResult;
  } catch {
    return failed;
  }
}
