import { location, principal } from "@/lib/site";

export const hero = {
  eyebrow: `${principal.jobTitle} · ${location.city}`,
  /** Benefit-led, with the city in it. Both the buyer and local search need it there. */
  headline: `Growth marketing for ${location.city} owners who are done guessing`,
  lead:
    `I am ${principal.displayName}. I research your market before you spend a dollar, build the website and tracking ` +
    "around how your business actually runs, and explain every decision in plain language. You work with me " +
    "directly, from the first call through to launch.",
  primaryCta: "Book A Free Call",
  secondaryCta: "See What I Do",
  /** Sits directly under the buttons. One risk-reducing line, per the hero rules. */
  reassurance: "Thirty minutes, no sales team, no obligation.",
} as const;

export type Credential = {
  value: string;
  label: string;
};

/**
 * Proof-by-credential. There are no testimonials yet, so the trust bar leans on
 * what is verifiable. Replace or supplement once client quotes exist.
 */
export const credentials: Credential[] = [
  { value: "MBA", label: "Marketing concentration" },
  { value: "UC Riverside", label: "Bachelor's degree" },
  { value: "Retail And Optical", label: "Management background" },
  { value: location.city, label: "Direct access, short roster" },
];

export type Problem = {
  title: string;
  body: string;
};

export const problems: Problem[] = [
  {
    title: "You Cannot Tell What Your Marketing Did",
    body:
      "Most owners have worked with an agency and walked away still not knowing where the money went or what actually " +
      "moved the needle. The reporting arrived, but it never answered the question.",
  },
  {
    title: "The Website Brings Traffic That Never Converts",
    body:
      "People land, look, and leave. Usually the message is aimed at the wrong buyer, or the path from interest to " +
      "inquiry has friction nobody has looked at in years.",
  },
  {
    title: "Nearby Customers Cannot Find You",
    body:
      `Your ${location.city} competitors show up in Maps, in local results, and now in AI answers. You are somewhere ` +
      "further down, and it is not obvious why.",
  },
  {
    title: "You Are Busy, But Not Growing",
    body:
      "Revenue is steady and the work is constant, but the business is not moving to its next stage. Running it and " +
      "scaling it are two different problems.",
  },
];

export const problemSection = {
  eyebrow: "The Usual Starting Point",
  title: "Where growth actually stalls",
  lead:
    "Almost every business I talk to is stuck on one of these four. None of them are fixed by posting more often.",
} as const;

export type Differentiator = {
  title: string;
  body: string;
};

export const differentiators: Differentiator[] = [
  {
    title: "You Work With Me Directly",
    body:
      "No account manager, no handoff to a junior team. The person doing the research and the strategy is the person " +
      "you talk to. I keep a short roster so that stays true.",
  },
  {
    title: "You See The Research Before Any Spend",
    body:
      "The market work happens first and you get to read it. If the research says a channel is wrong for you, I will " +
      "tell you that instead of selling it to you.",
  },
  {
    title: "Everything Is Built Around Your Business",
    body:
      "Your website, your tracking, and your follow-up get built around how you actually operate and close work, not " +
      "adapted from a template someone else was using.",
  },
  {
    title: "Nothing Is A Black Box",
    body:
      "You get reporting you can open and read yourself, in language that does not need a translator. If you cannot " +
      "explain what your marketing is doing, I have not finished the job.",
  },
];

export const differentiatorSection = {
  eyebrow: "What Makes This Different",
  title: "Complex problems, clear answers",
  lead:
    "You should always know what is happening with your marketing, what it cost, and what it returned. That is the " +
    "whole standard.",
} as const;

export const aboutStrip = {
  eyebrow: "Who You Would Be Working With",
  title: `${principal.firstName} started on the floor, not in an agency`,
  body:
    "My first job was in a corporate optical company, starting on the manufacturing side of glasses before moving to " +
    "the retail floor and then into management. I learned the customer experience, the training, the KPIs, and the " +
    "production targets firsthand. Then I went back to school, earned a bachelor's degree at UC Riverside and an MBA " +
    "with a marketing concentration, and started applying both sides to how businesses grow.",
  cta: "Read The Full Story",
} as const;

export const closingCta = {
  eyebrow: "Next Step",
  title: "Let's find out if this is a fit",
  lead:
    "Bring your goals, your questions, and the parts that are not working. In thirty minutes we can figure out what " +
    "should happen first. If I am not the right person for it, I will tell you that on the call.",
} as const;
