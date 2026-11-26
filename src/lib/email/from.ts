import { site } from "@/lib/site";

/**
 * Verified sending domain in Resend should match this address (or override via
 * env). `||` rather than `??` on purpose: an env var that exists but is empty
 * has to fall through as well, or Resend rejects the blank sender and every
 * submission fails.
 */
export function getNoreplyFrom(): string {
  return process.env.RESEND_NOREPLY_FROM?.trim() || site.noreplyFrom;
}
