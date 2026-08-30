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
      "Mostly, and that is deliberate. Being local means I can come and stand in the place while it is running, " +
      `which tells me more in half an hour than a phone call does in three. I take work elsewhere when it fits, ` +
      `but ${location.serviceArea} is where I am most useful.`,
  },
  {
    question: "What does it cost?",
    answer:
      "It depends on the business, so there is no price list. Some owners need one thing fixed. Others need the " +
      "whole picture rebuilt. We talk first, then I give you a number and what it covers. The first call is free.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Research takes a few weeks. Website work depends on the size of the job. Google takes a few months, " +
      "because that is how long it takes for anyone to notice you changed something. Anyone promising faster " +
      "is guessing.",
  },
  {
    question: "Can you promise I'll be number one on Google?",
    answer:
      "No, and nobody can. What I will promise is that you always know what I did and what it cost.",
  },
  {
    question: "What happens on the first call?",
    answer:
      "Half an hour, just the two of us. You tell me what isn't working, I ask a few questions, and you come away " +
      "knowing what I would tackle first. If I'm not the right person, I'll say so then.",
  },
];

export const servicesFaqs: FaqItem[] = [
  {
    question: "Can I hire you for just one thing?",
    answer:
      "Yes. I will push to do the research first, though. Building a website before we know who we are talking " +
      "to is how budgets disappear.",
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
      "money. I will tell you honestly which situation you are in.",
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
      "Small ones that have been open a while and want to get bigger. If you are still working out what you " +
      "sell, or you want a whole agency team on it, I am not your best bet.",
  },
  {
    question: "How do I reach you?",
    answer:
      `The form on this page, or email ${site.email}, or call ${site.phone}. I read everything myself and usually ` +
      "come back the next business day.",
  },
];
