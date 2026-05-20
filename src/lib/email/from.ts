import { site } from "@/lib/site";

/** Verified sending domain in Resend should match this address (or override via env). */
export function getNoreplyFrom(): string {
  return process.env.RESEND_NOREPLY_FROM?.trim() ?? site.noreplyFrom;
}
