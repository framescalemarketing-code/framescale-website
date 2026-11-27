import { onSightApproved, proofLinks } from "@/content/onsight";
import { site } from "@/lib/site";

export type FaqItem = {
  question: string;
  /** Plain text. Rendered on the page and emitted verbatim into FAQPage JSON-LD. */
  answer: string;
};

/**
 * Short answers, written the way they would be said out loud. This is also the
 * surface AI assistants quote from, so each one opens with the direct answer,
 * stays at 60 words or fewer, and stands on its own.
 */
export const homeFaqs: FaqItem[] = [
  {
    question: "What does an optical marketing consultant do?",
    answer:
      "An optical marketing consultant works out what is holding an independent practice back and fixes it. At " +
      "FrameScale I study the market first, then work on the website, visibility in search and in AI answers, " +
      "and a report that shows which marketing brought in appointments.",
  },
  {
    question: "Who do you work with?",
    answer:
      "Independent optical practices anywhere in the United States. I worked in a full service optical lab, on " +
      "the sales floor and in store management before I moved into marketing.",
  },
  // Only while the case study is on, so the answer never points at a page that 404s.
  ...(onSightApproved ? [{ question: proofLinks.faqQuestion, answer: proofLinks.faqAnswer }] : []),
  {
    question: "How much does optical marketing cost?",
    answer:
      "It depends on the practice, so there is no price list. We talk first, then I give you a number and a " +
      "list of what it covers. The first call is free.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Research takes a few weeks, website work depends on the size of the job, and search work takes a few " +
      "months because search engines are slow to notice a change. You get a report every month.",
  },
  {
    question: "Can you guarantee a number one ranking on Google?",
    answer:
      "No. Google controls its rankings, so I do not guarantee one. Each monthly report shows what was spent " +
      "and what changed.",
  },
  {
    question: "What happens on the first call?",
    answer:
      "It is half an hour, just the two of us. You tell me what is not working, I ask a few questions, and we " +
      "talk through where to start. If I am not the right person, I will say so then.",
  },
];

export const servicesFaqs: FaqItem[] = [
  {
    question: "Can I hire you for just one thing?",
    answer:
      "Yes. I usually suggest starting with the research, so we know who the website is for before I build it.",
  },
  {
    question: "Do I own the website when we're done?",
    answer:
      "That depends on what you want. Before any work starts, we decide who holds the website, the analytics and " +
      "the reporting accounts, and it goes in the written proposal.",
  },
  {
    question: "Do I need a new website?",
    answer:
      "Not always. If your site books appointments and loads quickly on a phone, it may only need fixes. " +
      "I will tell you which situation you are in.",
  },
  {
    question: "How will I know the marketing is working?",
    answer:
      "You get a report every month. It shows what was spent, what " +
      "changed and which appointments came from which work. Every 90 days we review the results together. If a " +
      "number is missing, I will tell you why.",
  },
  {
    question: "Am I locked into a contract?",
    answer:
      "No. Ongoing work is month to month, and you can stop when it stops being worth it. We agree the scope and " +
      "the price before anything starts.",
  },
  {
    question: "How do I reach you?",
    answer:
      `Use the form on the contact page, email ${site.email}, or call ${site.phone}. I read everything myself ` +
      "and reply as soon as I can.",
  },
];
