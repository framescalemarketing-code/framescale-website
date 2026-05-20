import { Heart, ShoppingBag, Scale, Target, Code, Users, type LucideIcon } from "lucide-react";

export type HomeIndustryCard = {
  name: string;
  icon: LucideIcon;
  description: string;
  examples: string;
  path: string;
  color: string;
};

export type HomeMetric = {
  value: string;
  label: string;
};

export type HomeCapabilityBlock = {
  icon: LucideIcon;
  title: string;
  items: string[];
};

export const homeIndustries: HomeIndustryCard[] = [
  {
    name: "Healthcare",
    icon: Heart,
    description:
      "Most of these practices already run on referrals. The website should look like the place patients walk into.",
    examples: "Independent optical and small eye-care practices",
    path: "/industries/healthcare",
    color: "from-(--brand-primary) to-(--brand-secondary)",
  },
  {
    name: "Retail & E-commerce",
    icon: ShoppingBag,
    description:
      "Online stores with small teams where ad costs keep climbing because of the story or where the ads run.",
    examples: "Stores online and in person, small teams",
    path: "/industries/retail",
    color: "from-(--brand-secondary) to-(--brand-primary)",
  },
  {
    name: "Professional Services",
    icon: Scale,
    description:
      "Selective firms with steady referrals that want a real website and a few proper cases.",
    examples: "Consultants and partner-led firms",
    path: "/industries/professional-services",
    color: "from-(--brand-deep) to-(--brand-primary)",
  },
];

export const homeMetrics: HomeMetric[] = [
  { value: "Research First", label: "Homework before ad spend" },
  { value: "Custom Build", label: "Your business, not a template rental" },
  { value: "Direct Access", label: "Same principal from spark to launch" },
  { value: "Selective Roster", label: "Few seats so the work stays deep" },
];

export const homeCapabilityBlocks: HomeCapabilityBlock[] = [
  {
    icon: Target,
    title: "Strategic Foundation",
    items: [
      "Market, competitor, and customer research",
      "Customer and journey clarity you can act on",
      "Positioning and messaging you can defend",
      "Growth roadmap with metrics you own",
    ],
  },
  {
    icon: Code,
    title: "Custom Technical Execution",
    items: [
      "Custom marketing websites instead of WordPress or Wix templates",
      "Funnels, forms, and integrations that match your ops",
      "Analytics and conversion tracking you can read",
      "CRO grounded in data instead of guesswork",
    ],
  },
  {
    icon: Users,
    title: "Demand & Visibility",
    items: [
      "SEO and content aligned to how buyers search",
      "Google Business Profile and local presence",
      "Paid search and paid social when the math works",
      "Email and nurture only when they fit the business",
    ],
  },
];
