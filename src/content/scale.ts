import { BarChart3, Rocket, Search, Target, Users, type LucideIcon } from "lucide-react";

export type ScalePhase = {
  /** The letter this phase contributes to the acronym. */
  letter: string;
  number: string;
  icon: LucideIcon;
  title: string;
  /** One line for the condensed home page treatment. */
  summary: string;
  description: string;
  activities: string[];
  deliverables: string[];
};

export const scaleIntro = {
  name: "The SCALE Method",
  headline: "Five phases, in order, every time",
  lead:
    "Growth work goes wrong when it starts with tactics. This is the sequence I follow instead, and you see the " +
    "output of each phase before we move to the next one.",
} as const;

/**
 * Note: the previous site used these five titles but never spelled the acronym
 * out anywhere, so a reader had to reverse-engineer it. The letters are now
 * explicit, which also makes the method quotable by answer engines.
 */
export const scalePhases: ScalePhase[] = [
  {
    letter: "S",
    number: "01",
    icon: Search,
    title: "Study The Market",
    summary: "Understand the market, the buyers in it, and what they compare you against.",
    description:
      "I look at the bigger picture first: your market, how many buyers are in it, which buyers are the best fit for " +
      "you, what other options they have, and what may be helping or stopping a purchase with you or the next best " +
      "alternative.",
    activities: [
      "Research the market at a broad level so I understand the space you are selling into",
      "Study the buyers most relevant to your business, including what they care about and how they decide",
      "Compare competitors, alternatives, positioning, pricing cues, and proof across the market",
      "Identify what may be shaping demand, hesitation, and purchase behavior in your category",
    ],
    deliverables: [
      "A clearer understanding of the market you are in and where you should be playing",
      "A better view of the gaps and reasons that affect your business and your competitors",
      "Recommendations on the best options within your budget",
    ],
  },
  {
    letter: "C",
    number: "02",
    icon: Users,
    title: "Clarify The Client View",
    summary: "See the business the way your customers see it, not the way you do.",
    description:
      "You already know your business well. I help you see it through your clients' eyes so the message, offer, and " +
      "experience reflect what matters most to the people you want to reach.",
    activities: [
      "Talk with the owner, managers, and customer-facing team to understand the business from the inside",
      "Review testimonials, reviews, and customer feedback to see how people describe the experience now",
      "Study competitor messaging to compare differences, similarities, and category expectations",
      "Define customer profiles and the real differentiators that should shape the message",
    ],
    deliverables: [
      "A customer profile that helps explain how your buyers make decisions",
      "A clearer view of what truly differentiates your business",
      "Priority areas to improve, from messaging to the product or experience itself",
    ],
  },
  {
    letter: "A",
    number: "03",
    icon: Target,
    title: "Align The Strategy",
    summary: "Turn the research into decisions about what to say and where to show up.",
    description:
      "Once the market and customer picture are clear, I turn that research into a strategy built for your business. " +
      "This is where we decide together what to say, where to show up, and what needs to happen first.",
    activities: [
      "Shape the message around what the right buyer needs to hear",
      "Decide which pages, channels, and follow-up your buyer actually uses",
      "Align the work with the business goals and budget",
      "Set up clear KPIs so you can measure how well the strategy is working",
    ],
    deliverables: [
      "A strategy built around your buyer, business goals, and budget",
      "A clearer plan for the pages, channels, and follow-up to focus on",
      "KPIs that show how the strategy should be measured",
    ],
  },
  {
    letter: "L",
    number: "04",
    icon: Rocket,
    title: "Launch The System",
    summary: "Build the website, tracking, and tools the strategy needs in order to run.",
    description:
      "Once the plan is clear, I build the systems needed to support it. If the right website, dashboard, tracking " +
      "setup, or internal sales system does not exist yet, I create it so the strategy can run and be measured in one " +
      "connected setup.",
    activities: [
      "Build or improve the website, pages, and conversion paths the strategy depends on",
      "Set up tracking, dashboards, and reporting so performance is visible in one place",
      "Create internal tools or sales systems that help the team follow the new plan consistently",
      "Review the full experience before launch so the system works together cleanly",
    ],
    deliverables: [
      "A custom-built system that supports the strategy and tracks it in one place",
      "The website, dashboard, tracking, and internal tools needed for execution",
      "A launch-ready setup that runs and measures the plan without extra systems",
    ],
  },
  {
    letter: "E",
    number: "05",
    icon: BarChart3,
    title: "Evaluate And Improve",
    summary: "Watch how people move through it, then fix what the numbers point at.",
    description:
      "Once the system is live, I track how people move through it and how the business responds. Because the " +
      "tracking is built into the system, we can measure the signals that matter without relying on scattered tools " +
      "or guesswork.",
    activities: [
      "Track traffic, leads, inquiries, bookings, and conversion points across the system",
      "Review how people move through the website, forms, follow-up, and sales process",
      "Measure results against the KPIs set at the strategy stage",
      "Adjust the message, pages, and budget based on what the numbers show",
    ],
    deliverables: [
      "A clearer view of what is working across the system",
      "Performance updates tied to the KPIs that matter most",
      "A sharper plan for what to improve next",
    ],
  },
];

export type WorkingStandard = {
  title: string;
  description: string;
};

export const workingStandards: WorkingStandard[] = [
  {
    title: "Research Comes First",
    description:
      "I start with the market, the buyer, and the alternatives before recommending anything. That keeps the strategy " +
      "grounded before more time or budget is spent.",
  },
  {
    title: "Built Around Your Business",
    description:
      "The strategy has to fit how your business actually works, including the team, the sales process, and the " +
      "budget. That keeps the plan realistic and easier to run.",
  },
  {
    title: "Systems Need To Be Connected",
    description:
      "If the website, tracking, dashboard, or internal tools do not exist yet, I build them into one connected " +
      "system. That makes the strategy easier to execute and easier to track.",
  },
  {
    title: "Tracking Should Lead To Action",
    description:
      "KPIs, traffic, leads, inquiries, bookings, and conversion points should show what is happening clearly. " +
      "Reporting only matters when it tells you what to improve next.",
  },
];
