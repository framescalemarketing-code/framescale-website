import Stripe from "stripe";

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY?.trim();

let cached: Stripe | null = null;

/**
 * Server-only Stripe client. Lazily instantiated so a missing key only fails
 * the payment route, not the whole app. Mirrors the guarded pattern in
 * `src/lib/supabase/server.ts`.
 */
export function getStripeClient(): Stripe {
  if (!STRIPE_SECRET_KEY) {
    throw new Error("Missing STRIPE_SECRET_KEY environment variable.");
  }
  if (!cached) {
    cached = new Stripe(STRIPE_SECRET_KEY);
  }
  return cached;
}
