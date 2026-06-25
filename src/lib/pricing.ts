/**
 * Hardcoded payment package catalog. Prices live here (in cents) and the
 * `/api/checkout` route builds the Stripe Checkout line item from the matching
 * entry — the client only ever sends an `id`, never an amount.
 *
 * To change prices/copy, edit this file. When ready, create the matching
 * Product/Price in Stripe for tidier QuickBooks bookkeeping (optional — the
 * inline price_data already syncs the charge to Stripe → QuickBooks).
 */

export type PaymentPackage = {
  /** Stable slug sent to the checkout API. */
  id: string;
  name: string;
  description: string;
  /** Amount in the smallest currency unit (cents for USD). */
  priceCents: number;
  /** ISO currency code, lowercase. */
  currency: string;
  features: string[];
  /** Visually emphasize this card. */
  highlighted?: boolean;
};

export const paymentPackages: PaymentPackage[] = [
  {
    id: "starter",
    name: "Starter Sprint",
    description: "A focused engagement to get your growth foundation in place.",
    priceCents: 50000, // $500.00 — the test package
    currency: "usd",
    features: [
      "Discovery and goal-setting session",
      "Baseline analytics and audit",
      "Prioritized 30-day action plan",
    ],
    highlighted: true,
  },
  // Placeholder packages — edit names, prices, and copy as needed.
  {
    id: "growth",
    name: "Growth Retainer",
    description: "Ongoing hands-on growth marketing led by the principal.",
    priceCents: 200000, // $2,000.00
    currency: "usd",
    features: [
      "Monthly strategy and execution",
      "SEO, Google Business Profile, and paid media",
      "Reporting you actually own",
    ],
  },
  {
    id: "scale",
    name: "Scale Partnership",
    description: "Deeper partnership for owners ready to push volume.",
    priceCents: 400000, // $4,000.00
    currency: "usd",
    features: [
      "Everything in Growth Retainer",
      "Expanded channels and testing",
      "Priority turnaround",
    ],
  },
];

/** Look up a package by its public id. */
export function getPaymentPackage(id: string): PaymentPackage | undefined {
  return paymentPackages.find((pkg) => pkg.id === id);
}

/** Format a cents amount as a localized currency string (e.g. "$500"). */
export function formatPrice(priceCents: number, currency: string): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.toUpperCase(),
    minimumFractionDigits: priceCents % 100 === 0 ? 0 : 2,
  }).format(priceCents / 100);
}
