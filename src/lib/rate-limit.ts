import "server-only";

type Bucket = {
  count: number;
  resetAt: number;
};

const buckets = new Map<string, Bucket>();

const DEFAULT_LIMIT = 5;
const DEFAULT_WINDOW_MS = 10 * 60_000;
const PRUNE_ABOVE = 1_000;

type RateLimitResult = { ok: true } | { ok: false; retryAfterSeconds: number };

/**
 * Per-key burst limiter held in memory. Vercel runs the route handlers on
 * several instances and each keeps its own map, so this is a cost control
 * against a runaway client hitting one warm instance, not a security
 * boundary. Turnstile is the real gate on both forms; this just stops a
 * misbehaving script from running up the Resend bill in the meantime.
 */
export function checkRateLimit(
  key: string | null,
  limit = DEFAULT_LIMIT,
  windowMs = DEFAULT_WINDOW_MS,
): RateLimitResult {
  if (!key) return { ok: true };

  const now = Date.now();

  if (buckets.size > PRUNE_ABOVE) {
    for (const [bucketKey, bucket] of buckets) {
      if (bucket.resetAt <= now) buckets.delete(bucketKey);
    }
  }

  const bucket = buckets.get(key);
  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true };
  }

  if (bucket.count >= limit) {
    return { ok: false, retryAfterSeconds: Math.max(1, Math.ceil((bucket.resetAt - now) / 1000)) };
  }

  bucket.count += 1;
  return { ok: true };
}
