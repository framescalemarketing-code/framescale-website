import { location, site } from "@/lib/site";

export type FaqItem = {
  question: string;
  /** Plain text. Rendered on the page and emitted verbatim into FAQPage JSON-LD. */
  answer: string;
};

/**
 * Short answers, written the way they would be said out loud. This is also the
 * surface AI assistants quote from, so each one has to stand on its own.
 *
 * Answer the question in the first sentence. Earlier passes opened on a hedge
 * ("Mostly.", "Sure, though...", "Not really.") and made the reader wait for
 * the actual answer, which is the opposite of what someone scanning an FAQ is
 * there for. Where a qualifier is genuinely needed it follows the answer.
 */
export const homeFaqs: FaqItem[] = [
  {
    question: "What does a small business consultant actually do?",
    answer:
      "I find out why the business isn't growing, then I fix it. Usually that means a better website, showing up " +
      "on Google when people search, and reports you can read on your own.",
  },
  {
    question: `Do you only work with ${location.city} small businesses?`,
    answer:
      "Mostly, and that's on purpose. Being local means I can come and see how the place runs, which tells me " +
      `more than a phone call does. I take work elsewhere when it fits, but ${location.serviceArea} is where ` +
      "I'm most useful.",
  },
  {
    question: "What does it cost?",
    answer:
      "It depends on the business, so there's no price list. Some owners need one thing fixed. Others need the " +
      "whole picture rebuilt. We talk first, then I give you a number and what it covers. The first call is free.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Research takes a few weeks. Website work depends on the size of the job. Google takes a few months, " +
      "because that's how long it takes for anyone to notice you changed something. Anyone promising faster " +
      "is guessing.",
  },
  {
    question: "Can you promise I'll be number one on Google?",
    answer:
      "No, and nobody can. What I will promise is that you always know what I did and what it cost.",
  },
  {
    question: "Do I have to sign up for something ongoing?",
    answer:
      "No. Some owners bring me in for one job and that's the end of it. Others keep me on month to month once " +
      "things are running. Both are normal, and you decide which one you want after the work is done.",
  },
  {
    question: "What happens on the first call?",
    answer:
      "Half an hour, just the two of us. You tell me what isn't working, I ask a few questions, and you come away " +
      "knowing what I would tackle first. If I'm not the right person, I'll say so then.",
  },
];

/**
 * Optical-specific. These are the questions a practice owner asks that a
 * general small business owner would not, so none of them repeat the home or
 * services sets. The page also emits these as FAQPage JSON-LD.
 */
export const opticalFaqs: FaqItem[] = [
  {
    question: "Do you work with optometrists, or just optical retail?",
    answer:
      "Both. The exam side and the frame side pull on each other, so I look at the whole practice. If you only " +
      "want help with one of them, that works too.",
  },
  {
    question: "You were in optical years ago. Does that still apply?",
    answer:
      "The marketing has changed a lot since then and I keep up with that side for a living. What the years in " +
      "optical gave me is knowing how the business runs day to day, which is the part most marketing people " +
      "have to guess at.",
  },
  {
    question: "Can you help if I'm part of a franchise?",
    answer:
      "Yes. I worked in corporate stores and franchises as well as independents. There's usually less you're " +
      "allowed to change in a franchise, so we start by working out what's actually yours to decide.",
  },
  {
    question: "What would you look at first?",
    answer:
      "Your Google listing, and what somebody sees when they search for an eye exam near you. It takes about ten " +
      "minutes to check and it's where the quickest gains usually are.",
  },
];

export const servicesFaqs: FaqItem[] = [
  {
    question: "Can I hire you for just one thing?",
    answer:
      "Yes. I'll push to do the research first, though. Building a website before we know who we're talking to " +
      "is how budgets disappear.",
  },
  {
    question: "Do I own the website when we're done?",
    answer:
      "Yes, all of it. The website, the Google listing, the reporting, all in your own accounts. You can keep " +
      "running it without me, and some owners do exactly that.",
  },
  {
    question: "I already have a website. Is that a problem?",
    answer:
      "No. Plenty of sites need fixing rather than replacing, and replacing one that works is a waste of your " +
      "money. I'll tell you honestly which one you're in.",
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
    question: "Who actually does the work?",
    answer:
      "I do, all of it. When you email or call, you're getting the person who built the thing, and that's the " +
      "same person who'll explain the numbers to you afterwards.",
  },
  {
    question: "How do I reach you?",
    answer:
      `The form on this page, or email ${site.email}, or call ${site.phone}. I read everything myself and usually ` +
      "come back the next business day.",
  },
];
