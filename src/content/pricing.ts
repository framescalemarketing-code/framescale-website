/**
 * No published prices. Every engagement is scoped with the owner, so this
 * section explains how a number gets arrived at rather than listing packages.
 * Keeping the section is deliberate: "what does it cost" is the question the
 * page has to answer, and refusing to address it at all reads as evasive.
 */
export const pricingSection = {
  title: "What it costs",
  lead: "There is no set price list. It depends on your business.",
  intro:
    "Every business I work with needs something a little different. Some need one thing fixed. Some need the whole " +
    "picture rebuilt. Putting a package price on that would mean guessing, and you would end up paying for work " +
    "you do not need.",
  cta: "Ask What It Would Cost",
} as const;

export type PricingPoint = {
  title: string;
  body: string;
};

export const pricingPoints: PricingPoint[] = [
  {
    title: "We Talk First",
    body: "Thirty minutes on the phone so I understand the business. That call is free.",
  },
  {
    title: "Then I Quote",
    body: "Once I know what you actually need, I give you a number and what it covers.",
  },
  {
    title: "You Approve It",
    body: "Nothing starts until you have seen the scope and the price and said yes.",
  },
  {
    title: "No Surprise Invoices",
    body: "The number we agree on is the number you pay. If the work changes, we talk before it does.",
  },
];
