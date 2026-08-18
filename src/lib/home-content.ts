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
      "Your patients already trust you before they book. Your website should reflect that same level of care and professionalism the moment they land on it.",
    examples: "Independent optical and small eye-care practices",
    path: "/industries/healthcare",
    color: "from-(--brand-primary) to-(--brand-secondary)",
  },
  {
    name: "Retail & E-commerce",
    icon: ShoppingBag,
    description:
      "Every dollar you spend on ads needs a strategy behind it. I make sure your store, your story, and your spend are all working together.",
    examples: "Stores online and in person, small teams",
    path: "/industries/retail",
    color: "from-(--brand-secondary) to-(--brand-primary)",
  },
  {
    name: "Professional Services",
    icon: Scale,
    description:
      "Your reputation brings clients in. Your website should close them. I build around the work you do and the clients you want more of.",
    examples: "Consultants and partner-led firms",
    path: "/industries/professional-services",
    color: "from-(--brand-deep) to-(--brand-primary)",
  },
];

export const homeMetrics: HomeMetric[] = [
  { value: "Research First", label: "Know before you spend" },
  { value: "Custom Build", label: "Built around your business" },
  { value: "Always Informed", label: "No surprises, ever" },
  { value: "One On One", label: "Your project never gets lost in the shuffle" },
];

export const homeCapabilityBlocks: HomeCapabilityBlock[] = [
  {
    icon: Target,
    title: "I Start With Research",
    items: [
      "Market and competitor research specific to your industry",
      "A clear picture of who your customer is and how they make buying decisions",
      "Messaging built around the right audience for your business",
      "A growth roadmap with goals you can follow and own",
    ],
  },
  {
    icon: Code,
    title: "I Build Around Your Business",
    items: [
      "A custom website designed around how you operate",
      "Forms and integrations that match your day to day workflow",
      "Analytics and tracking set up in plain language you can actually read",
      "Ongoing improvements driven by real data",
    ],
  },
  {
    icon: Users,
    title: "I Get You Found",
    items: [
      "SEO and content built around how your customers actually search",
      "Your Google Business Profile fully managed and optimized",
      "Paid search and social only when the numbers make sense for your business",
      "Email and follow up built around your sales process",
    ],
  },
];
