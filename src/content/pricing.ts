import { location, principal } from "@/lib/site";

/**
 * TODO(owner): both amounts are placeholders. Set the real numbers here and
 * nowhere else. They render on /services and feed the pricing JSON-LD.
 */
const PLACEHOLDER_AUDIT_PRICE = 750;
const PLACEHOLDER_PARTNER_PRICE = 2500;

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
    name: "The Growth Audit",
    price: PLACEHOLDER_AUDIT_PRICE,
    cadence: "one time",
    tagline: "Find out what is actually wrong",
    description:
      "A fixed-scope engagement that covers the first two phases of the SCALE Method. You get the research and the " +
      "roadmap, and you keep both whether we work together after that or not.",
    includes: [
      "Market and competitor research for your industry",
      "Customer profile built on how your buyers decide",
      "Review of your website, local search presence, and tracking",
      "A prioritized roadmap of what to fix, in order",
      "A working session to walk through all of it together",
    ],
    cta: "Start With The Audit",
  },
  {
    id: "partner",
    name: "Growth Partner",
    price: PLACEHOLDER_PARTNER_PRICE,
    cadence: "per month",
    tagline: "Build it, run it, and improve it",
    description:
      "Ongoing work across all five phases. Strategy, the website and systems behind it, local search, and the " +
      "reporting that tells you what to do next. Month to month, no long-term contract.",
    includes: [
      "Everything in The Growth Audit",
      "Website and conversion work, built and maintained",
      "Google Business Profile and local SEO management",
      "Analytics, dashboards, and reporting you can read yourself",
      "Paid search and paid social when the numbers support it",
      "Direct access to me, not an account manager",
    ],
    cta: "Talk About A Partnership",
    featured: true,
  },
];

export const pricingSection = {
  eyebrow: "Pricing",
  title: "Two ways to work together",
  lead:
    "Prices are listed because you should be able to tell whether this is realistic before you spend time on a call. " +
    "Larger builds get quoted separately after the audit.",
  footnote:
    `Both options are available to businesses across ${location.serviceArea}. If neither fits what you need, say so ` +
    `on the call and ${principal.firstName} will point you somewhere that does.`,
} as const;

/** Consistent currency formatting for display. */
export function formatPrice(dollars: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(dollars);
}
