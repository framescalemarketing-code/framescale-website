import { location, principal, site } from "@/lib/site";

export type FaqItem = {
  question: string;
  /** Plain text. Rendered on the page and emitted verbatim into FAQPage JSON-LD. */
  answer: string;
};

/**
 * FAQ content does double duty: it handles objections before the form, and it
 * is the most quotable surface on the site for AI answer engines. Answers are
 * written to stand alone if a machine lifts one out of context.
 */
export const homeFaqs: FaqItem[] = [
  {
    question: "What does a business growth consultant actually do?",
    answer:
      "I work out where your growth is stalling and then fix it. That usually means researching your market and " +
      "buyers, sharpening your positioning, rebuilding the website and tracking around how you actually sell, and " +
      "making you easier to find in local and AI search. Some of it is strategy and some of it is hands-on build work.",
  },
  {
    question: `Do you only work with businesses in ${location.city}?`,
    answer:
      `Most of my work is with owners across ${location.serviceArea}, because being local means I can sit down with ` +
      "you and see how the business actually runs. I do take work outside the area when the fit is right, but local " +
      "clients get the most out of how I work.",
  },
  {
    question: "How much does it cost to work with you?",
    answer:
      "There are two options. A fixed-price Growth Audit that delivers the research and a prioritized roadmap, and a " +
      "monthly Growth Partner engagement that covers ongoing strategy, build, and reporting. Both prices are listed " +
      "on the services page so you can tell whether it is realistic before booking a call.",
  },
  {
    question: "How long before I see results?",
    answer:
      "Research and strategy take a few weeks. Website and tracking work depends on scope. Local search and content " +
      "generally take a few months to move, because search engines need time to reflect changes. Anyone who promises " +
      "you faster than that is guessing.",
  },
  {
    question: "Do you guarantee rankings or a specific return on ad spend?",
    answer:
      "No, and you should be wary of anyone who does. Nobody controls Google's results or your market's demand. What " +
      "I do commit to is that you will always know what work was done, what it cost, and what the numbers did in " +
      "response.",
  },
  {
    question: "What happens on the first call?",
    answer:
      "Thirty minutes, directly with me. You describe what is not working and what you have already tried, I ask " +
      "direct questions, and you leave with a clear view of what should happen first. If I am not the right person " +
      "for the job, I will tell you on that call rather than sell you something.",
  },
];

export const servicesFaqs: FaqItem[] = [
  {
    question: "Can I hire you for just one of these services?",
    answer:
      "Yes, though I will usually want to do the research first. Building a website or running ads before " +
      "understanding the market is how budget gets wasted, so if you come to me for one piece I may recommend " +
      "starting with the audit instead.",
  },
  {
    question: "Do I own the website and the systems you build?",
    answer:
      "Yes. The website, the analytics setup, the dashboards, and the Google Business Profile are all yours, in your " +
      "accounts. Part of the point of how I work is that you keep the systems and can run them without me.",
  },
  {
    question: "What if I already have a website?",
    answer:
      "Then we start by finding out whether it is worth improving or worth replacing. Plenty of sites just need the " +
      "message, the conversion path, and the tracking fixed. I will tell you honestly which situation you are in.",
  },
  {
    question: "Do you require a long-term contract?",
    answer:
      "No. The Growth Partner engagement is month to month. I would rather keep clients because the work is worth it " +
      "than because they are locked in.",
  },
  {
    question: "What size business do you work with?",
    answer:
      "Small and mid-size businesses, usually established and past the startup stage, most often in healthcare and " +
      "optical, retail and e-commerce, or professional services. If you are pre-revenue or looking for a full agency " +
      "team, I am probably not the right fit.",
  },
  {
    question: `How do I get in touch with ${principal.firstName}?`,
    answer:
      `Use the form on any page of this site, email ${site.email}, or call ${site.phone}. Most messages get a reply ` +
      "within one business day.",
  },
];
