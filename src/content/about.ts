import { location, principal } from "@/lib/site";

export const aboutHero = {
  eyebrow: "About",
  headline: principal.displayName,
  lead:
    `${principal.jobTitle} in ${location.city}. I help owners understand their market, fix what is leaking, and ` +
    "build the systems that let the business reach its next stage.",
} as const;

export type Chapter = {
  marker: string;
  kicker: string;
  title: string;
  body: string;
};

/**
 * Carried over from the previous site almost intact. It is specific, it is
 * true, and specificity is what makes a founder story worth reading.
 */
export const chapters: Chapter[] = [
  {
    marker: "01",
    kicker: "Where I Started",
    title: "Firsthand Experience",
    body:
      "My first job was with a corporate optical company, where I started in the manufacturing side of glasses before " +
      "moving onto the retail floor. Over time, I worked my way into retail management, where I learned how to " +
      "understand the customer experience, train associates, work with a team, and stay accountable to performance " +
      "goals like KPIs and production requirements.",
  },
  {
    marker: "02",
    kicker: "What Happened",
    title: "Hitting A Ceiling",
    body:
      "Working across corporate, franchise, and small business environments helped me understand the limits of the " +
      "path I was on. I could see the work ahead clearly, and I also knew the ceiling would come faster than the " +
      "growth I wanted for myself. That realization pushed me to think bigger than a single store, region, or role.",
  },
  {
    marker: "03",
    kicker: "Where I Went",
    title: "Building The Foundation",
    body:
      "I chose to go back to school and build a stronger business foundation. I earned my bachelor's degree from the " +
      "University of California, Riverside and later completed a master's degree in business administration with a " +
      "concentration in marketing. For me, education was the path to a broader framework for strategy, data, " +
      "analytics, and how businesses grow with more structure.",
  },
  {
    marker: "04",
    kicker: "Where I Am Now",
    title: "Putting Both Sides To Work",
    body:
      "After building my education and applying the personal, technical, and transferable skills I gained in the " +
      "industry, I started to see the difference between running a business and scaling one. Many businesses already " +
      "have strong pieces in place. The opportunity is often in organizing the message, systems, data, and customer " +
      "experience into a clearer growth framework.",
  },
];

export type CredentialDetail = {
  label: string;
  value: string;
  note: string;
};

export const credentialDetails: CredentialDetail[] = [
  {
    label: "Graduate Education",
    value: "MBA, Marketing Concentration",
    note: "Strategy, economics of growth, and how marketing connects to operations.",
  },
  {
    label: "Undergraduate Education",
    value: "University of California, Riverside",
    note: "Bachelor's degree in business.",
  },
  {
    label: "Industry Background",
    value: "Optical Manufacturing And Retail Management",
    note: "Manufacturing floor, retail floor, then management across corporate, franchise, and small business.",
  },
  {
    label: "Accountability",
    value: "KPIs, Training, And Production Targets",
    note: "Years of carrying real numbers, not just reporting on someone else's.",
  },
];

export const workingWithMe = {
  eyebrow: "Working With Me",
  title: "What you actually get",
  points: [
    "Someone who understands both customer-facing work and back-end operations.",
    "Business, marketing, and analytics thinking in the same conversation.",
    "Direct access, so context and accountability stay close.",
    "Honest answers about fit, including when the answer is no.",
  ],
} as const;

/**
 * TODO(owner): this is the single highest-value section to personalize. Local
 * search and AI answer engines both reward genuine first-hand local detail, and
 * generic city copy is what gets flagged as doorway content. Add the
 * neighborhoods you know, the local business communities you are part of, and
 * why you chose to work here.
 */
export const sanDiegoSection = {
  eyebrow: `Based In ${location.city}`,
  title: `Why I work with ${location.city} owners`,
  paragraphs: [
    `${location.city} runs on independent businesses. Optical and dental practices competing with corporate chains, ` +
      "retail and product brands working on thin margins, consultants and small firms living off referrals until the " +
      "referrals slow down. Those are the businesses where a clearer strategy changes the trajectory, and they are " +
      "the ones I know how to help.",
    "Working locally means I can sit down with you, walk your floor, and see how the business actually runs. That " +
      "matters more than it sounds. A lot of what goes wrong in marketing comes from advice given by someone who " +
      "never saw the operation they were advising on.",
    `I work with owners across ${location.serviceArea}, and I keep the roster short on purpose. Depth beats volume, ` +
      "and you cannot give a business real attention if you are carrying twenty of them.",
  ],
} as const;

export const philosophy = {
  eyebrow: "What Matters Most",
  title: "Growth starts with understanding",
  body:
    "Understanding how you work, how your team operates, how your customers decide, and how your industry and " +
    "competitors move is essential to understanding what the business needs next. I help bridge that gap by going " +
    "through the process with you, turning scattered context into a clearer framework for growth, better decisions, " +
    "and a stronger path to the next stage.",
} as const;
