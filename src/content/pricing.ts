
/** Set here and nowhere else. These render on /services. */
const AUDIT_PRICE = 200;
const PARTNER_PRICE = 1500;

export type PricingTier = {
  id: string;
  name: string;
  /** Whole dollars. Formatted for display at render time. */
  price: number;
  /** Billing cadence shown next to the price. */
  cadence: string;
  tagline: string;
  description: string;
  includes: string[];
  cta: string;
  /** Renders the emphasized tier. Exactly one should be true. */
  featured?: boolean;
};

export const pricingTiers: PricingTier[] = [
  {
    id: "audit",
    name: "The Once-Over",
    price: AUDIT_PRICE,
    cadence: "one time",
    tagline: "Find the problem",
    description:
      "A one-time review of your business, your customers, and your competition. You get a plan for what to fix " +
      "first, and it's yours to keep either way.",
    includes: [
      "A look at your customers and your competition",
      "A review of your website and your Google listing",
      "A plan for what to fix, in order",
      "A call to walk through all of it together",
    ],
    cta: "Start Here",
  },
  {
    id: "partner",
    name: "Ongoing Help",
    price: PARTNER_PRICE,
    cadence: "per month",
    tagline: "I handle it",
    description:
      "I handle the website, the Google listing, the ads, and the reporting. Month to month, so you can stop " +
      "whenever it stops being worth it.",
    includes: [
      "Everything in The Once-Over",
      "Your website, built and looked after",
      "Your Google listing and reviews",
      "Ads, when the numbers make sense",
      "Reports you can actually read",
      "My direct phone number",
    ],
    cta: "Let's Talk",
    featured: true,
  },
];

export const pricingSection = {
  title: "Two ways to work together",
  footnote: "If neither one fits, tell me on the call and I'll point you somewhere that does.",
} as const;

/** Consistent currency formatting for display. */
export function formatPrice(dollars: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(dollars);
}
