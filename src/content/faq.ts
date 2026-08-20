import { location, site } from "@/lib/site";

export type FaqItem = {
  question: string;
  /** Plain text. Rendered on the page and emitted verbatim into FAQPage JSON-LD. */
  answer: string;
};

/**
 * Short answers, written the way they would be said out loud. This is also the
 * surface AI assistants quote from, so each one has to stand on its own.
 */
export const homeFaqs: FaqItem[] = [
  {
    question: "What does a small business consultant actually do?",
    answer:
      "In my case, I find out why the business isn't growing and then I go fix it. Usually that means a better " +
      "website, turning up on Google when people search, and reports you can read without me sitting next to you.",
  },
  {
    question: `Do you only work with ${location.city} small businesses?`,
    answer:
      "Mostly. Being local means I can come and see how the place runs, which tells me more than a phone call " +
      `ever does. I do take work elsewhere when it's a good fit, but ${location.serviceArea} is where I'm most useful.`,
  },
  {
    question: "What does it cost?",
    answer:
      "Depends on the business, so I don't have a price list. Some owners need one thing fixed, others need " +
      "the whole picture rebuilt. We talk first, then I give you a number and tell you exactly what it covers. " +
      "That first call is free.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Research takes a few weeks. Website work depends on how big the job is. Google takes a few months, because " +
      "that's how long it takes for anyone to notice you changed something. If someone promises you faster, they " +
      "are guessing.",
  },
  {
    question: "Can you promise I'll be number one on Google?",
    answer:
      "No. Nobody can, and I'd be careful with anyone who says otherwise. What I will promise is that you'll " +
      "always know what I did and what it cost.",
  },
  {
    question: "What happens on the first call?",
    answer:
      "Half an hour, just the two of us. You tell me what's not working, I ask a few questions, and you come away " +
      "knowing what I'd tackle first. If I'm not the right person, I'll say so then rather than string it out.",
  },
];

export const servicesFaqs: FaqItem[] = [
  {
    question: "Can I hire you for just one thing?",
    answer:
      "Sure, though I'll usually push to do the research first. Building a website before we know who we're " +
      "talking to is how budgets disappear.",
  },
  {
    question: "Do I own the website when we're done?",
    answer:
      "Yes, all of it. The website, the Google listing, the reporting, all in your own accounts. You can keep " +
      "running it without me, and some people do.",
  },
  {
    question: "I already have a website. Is that a problem?",
    answer:
      "Not really. Plenty of sites just need fixing rather than replacing, and replacing one that works is a waste " +
      "of your money. I'll tell you honestly which situation you're in.",
  },
  {
    question: "Am I locked into a contract?",
    answer:
      "No. Ongoing work is month to month and you can stop when it stops being worth it. We agree the scope and " +
      "the price before anything starts.",
  },
  {
    question: "What kind of businesses do you work with?",
    answer:
      "Small ones that have been open a while and want to get bigger. If you're still working out what you sell, " +
      "or you want a whole agency team on it, I'm not your best bet.",
  },
  {
    question: "How do I reach you?",
    answer:
      `The form on this page, or email ${site.email}, or call ${site.phone}. I read everything myself and usually ` +
      "come back the next business day.",
  },
];
