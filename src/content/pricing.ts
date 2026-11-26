/**
 * No published prices. Every engagement is scoped with the owner, so this
 * section explains how a number gets arrived at rather than listing packages.
 * Keeping the section is deliberate: "what does it cost" is the question the
 * page has to answer, and dodging it entirely reads as evasive.
 */
export const pricingSection = {
  title: "What It Costs",
  lead: "There is no price list. It depends on the practice.",
  intro:
    "Everyone needs something a bit different. One owner needs a single page fixed and nothing else. " +
    "Another needs the whole thing pulled apart and rebuilt. If I put a package price on that I would only be " +
    "guessing, and you would end up paying for work you did not need.",
  cta: "Ask What It Would Cost",
} as const;

export type PricingPoint = {
  title: string;
  body: string;
};

export const pricingPoints: PricingPoint[] = [
  {
    title: "We Talk First",
    body: "Half an hour on the phone so I understand what I'm looking at. Costs you nothing.",
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
      "The number we agreed is the number you pay. If the job changes halfway through, we have that conversation " +
      "before the work happens, not after.",
  },
];
