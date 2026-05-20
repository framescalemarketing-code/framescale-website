import { Search, Users, Target, Rocket, BarChart3, type LucideIcon } from "lucide-react";

export type ProcessStep = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  activities: string[];
  deliverables: string[];
};

export type ProcessPrinciple = {
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    icon: Search,
    title: "Understand Industry & Market",
    description:
      "Research comes first. I study your industry, the market you compete in, and competitors so every later decision sits on real context, not assumptions.",
    activities: [
      "Industry structure, demand drivers, and seasonality or regulation where it matters",
      "Market segments and where margin and growth actually concentrate",
      "Competitor offers, pricing, messaging, channels, and visible gaps",
      "Trends and benchmarks that shape how buyers choose in your space",
    ],
    deliverables: [
      "Industry & market snapshot",
      "Competitive landscape summary",
      "Implications brief for positioning and spend",
    ],
  },
  {
    number: "02",
    icon: Users,
    title: "Understand Your Business & Customer",
    description:
      "Next I go deep on your business: differentiators, points of parity and points of difference, who you serve best, and how your operations back the promise.",
    activities: [
      "Discovery conversations and business model review",
      "POPs & PODs: points of parity and points of difference you can own",
      "Ideal customer profiles: needs, triggers, objections, and journey",
      "Fit check on how you deliver today for those best-fit buyers",
    ],
    deliverables: [
      "Customer profile documentation",
      "Differentiation summary with POP & POD clarity",
      "Notes on offer, delivery, and message risk before strategy work",
    ],
  },
  {
    number: "03",
    icon: Target,
    title: "Build & Tailor Your Strategy",
    description:
      "I translate insight into a tailored strategy: what to say, why it is credible, where each message belongs, and an integrated marketing communications plan that matches your brand.",
    activities: [
      "Positioning, promise, and proof so messaging stands up to scrutiny",
      "Message hierarchy and channel fit: where each message belongs for your buyers",
      "Integrated marketing communications plan aligned to brand standards",
      "Goals, budgets, and milestones by channel and initiative",
    ],
    deliverables: [
      "Brand-aligned messaging & IMC plan",
      "Channel & campaign blueprint",
      "Execution roadmap with owners and timing",
    ],
  },
  {
    number: "04",
    icon: Rocket,
    title: "Execute & Launch",
    description:
      "I ship against the plan: sites, creative, tracking, and campaigns go live with QA, sequencing, and clear internal handoffs so nothing gets lost.",
    activities: [
      "Website and landing experiences built to the strategy",
      "CRM, analytics, and conversion tracking configured for decisions you will use",
      "Campaign build, review, and launch across agreed channels",
      "Launch sequencing, checklists, and stakeholder alignment",
    ],
    deliverables: [
      "Live site, assets, and campaigns",
      "Tracking & reporting views you can read week to week",
      "Launch completion record and first-read performance baseline",
    ],
  },
  {
    number: "05",
    icon: BarChart3,
    title: "Track & Optimize",
    description:
      "Growth is a loop. I monitor performance, test improvements, move budget toward what earns out, and refresh strategy when the market or offer shifts.",
    activities: [
      "Reporting cadence tied to the metrics we defined up front",
      "Structured tests and conversion improvements grounded in data",
      "Channel and budget adjustments based on results, not habit",
      "Strategy and message refinements when conditions change",
    ],
    deliverables: [
      "Performance reports with clear takeaways you can use",
      "Prioritized optimization backlog",
      "Updated growth roadmap as we learn",
    ],
  },
];

export const processPrinciples: ProcessPrinciple[] = [
  {
    title: "Industry & Market Before Tactics",
    description:
      "I start outside your four walls so channel picks, spend levels, and creative direction match how the category really behaves.",
  },
  {
    title: "Business Fit & Customer Truth",
    description:
      "Parity, difference, and customer profiles stay tied to who you can serve profitably and how you already deliver when the lights are on.",
  },
  {
    title: "Tailored IMC, One Thread",
    description:
      "Strategy, creative, web, and media follow one integrated communications plan so the brand sounds like one voice wherever buyers meet you.",
  },
  {
    title: "Measure, Learn, Re-Aim",
    description:
      "Launch is the beginning of learning. Tracking and optimization stay on a steady cadence so results compound instead of drifting.",
  },
];
