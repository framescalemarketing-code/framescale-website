import { location, site } from "@/lib/site";

export type FaqItem = {
  question: string;
  /** Plain text. Rendered on the page and emitted verbatim into FAQPage JSON-LD. */
  answer: string;
};

/**
 * Short, plain answers. This is also the surface AI assistants quote from, so
 * each answer has to make sense on its own.
 */
export const homeFaqs: FaqItem[] = [
  {
    question: "What does a small business consultant actually do?",
    answer:
      "I find out why your business isn't growing the way it should, then I fix it. That usually means a better " +
      "website, showing up on Google, and reports you can actually read.",
  },
  {
    question: `Do you only work with ${location.city} small businesses?`,
    answer:
      `Mostly, yes. Being local means I can come see how your business really runs. I do take work outside ` +
      `${location.serviceArea} when it's a good fit.`,
  },
  {
    question: "What does it cost?",
    answer:
      "It depends on your business, so I don't have a set price list. Some owners need one thing fixed, others " +
      "need the whole picture rebuilt. We talk first, then I give you a number and what it covers. That first " +
      "call is free.",
  },
  {
    question: "How long until I see results?",
    answer:
      "The research takes a few weeks. Website work depends on the size of the job. Showing up on Google usually " +
      "takes a few months. Anyone promising faster is guessing.",
  },
  {
    question: "Can you promise I'll be number one on Google?",
    answer:
      "No, and I'd be careful with anyone who does. Nobody controls Google. What I can promise is that you'll " +
      "always know what I did and what it cost.",
  },
  {
    question: "What happens on the first call?",
    answer:
      "Thirty minutes, just you and me. You tell me what's not working, I ask some questions, and you leave " +
      "knowing what I'd do first. If I'm not the right fit, I'll tell you.",
  },
];

export const servicesFaqs: FaqItem[] = [
  {
    question: "Can I hire you for just one thing?",
    answer:
      "Yes, though I'll usually want to do the research first. Building a website before we know who we're talking " +
      "to is how money gets wasted.",
  },
  {
    question: "Do I own the website when we're done?",
    answer:
      "Yes. The website, the Google listing, and the reports are all yours, in your accounts. You can run them " +
      "without me.",
  },
  {
    question: "I already have a website. Is that a problem?",
    answer:
      "Not at all. Sometimes it just needs fixing rather than replacing. I'll tell you honestly which one you're " +
      "looking at.",
  },
  {
    question: "Am I locked into a contract?",
    answer:
      "No. Ongoing work is month to month, and you can stop whenever it stops being worth it. We agree the scope " +
      "and the price before anything starts.",
  },
  {
    question: "What kind of businesses do you work with?",
    answer:
      "Small businesses that have been open a while. Eye doctors and medical offices, shops and online stores, and " +
      "small firms. If you're just starting out or you want a big agency team, I'm probably not your best option.",
  },
  {
    question: "How do I reach you?",
    answer:
      `Use the form on this page, email ${site.email}, or call ${site.phone}. I read every message myself and ` +
      "usually reply the next business day.",
  },
];
