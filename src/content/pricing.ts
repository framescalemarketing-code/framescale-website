/**
 * No published prices. Every engagement is scoped with the owner, so this
 * section explains how a number gets arrived at rather than listing packages.
 * Keeping the section is deliberate: "what does it cost" is the question the
 * page has to answer, and dodging it entirely reads as evasive.
 */
export const pricingSection = {
  title: "What it costs",
  lead: "There's no price list. It depends on the business.",
  intro:
    "Everyone needs something different. One owner needs their Google listing fixed and nothing else. Another " +
    "needs the whole thing pulled apart and rebuilt. If I put a package price on that I'd be guessing, and " +
    "you'd end up paying for work you didn't need.",
  cta: "Ask What It Would Cost",
} as const;

export type PricingPoint = {
  title: string;
  body: string;
};

export const pricingPoints: PricingPoint[] = [
  {
    title: "We Talk First",
    body: "Half an hour on the phone so I understand what I'm looking at. It costs you nothing.",
  },
  {
    title: "Then I Quote",
    body: "Once I know what the job actually is, you get a number and a list of what it covers.",
  },
  {
    title: "You Approve It",
    body: "Nothing starts until you've seen that and said yes to it.",
  },
  {
    title: "No Surprise Invoices",
    body:
      "The number we agreed is the number you pay. If the job changes halfway through, we talk about it before " +
      "any of that work happens.",
  },
];
