import {
  ShoppingBag,
  TrendingUp,
  Target,
  Code,
  Store,
  ShoppingCart,
  Package,
} from "lucide-react";

import type { IndustryPageContent } from "./types";

export const retailContent: IndustryPageContent = {
  hero: {
    icon: ShoppingBag,
    badge: "Retail & E-commerce",
    title: "Find The Leak",
    description:
      "When revenue feels busy but margin stays tight, the answer is usually in the message, the website, or the spend. We look at all three so you can see where the money is going.",
    media: {
      label: "Real packing station or storefront",
      description:
        "Brown paper, tape, partial box at a workbench, or a warm storefront window at dusk. No models, no shopping-bag-with-tablet clichés.",
      src: "/photos/retail/storefront-hero.jpg",
      alt: "Blue storefront with large glass windows and reflections from the street outside.",
    },
    heroGradient: "secondary",
    heroBlob: "top-left-secondary",
    iconMarkGradient: "secondary-primary",
  },

  highlightIconGradient: "secondary-primary",

  highlights: {
    header: {
      badge: "Where It Fits",
      title: "Who This Helps",
      description:
        "This works for stores with a website, online brands, and product businesses selling in more than one place.",
    },
    items: [
      {
        icon: Store,
        label: "Physical Retail",
        description: "Stores that need the website to support in-person sales.",
      },
      {
        icon: ShoppingCart,
        label: "E-commerce Brands",
        description: "Online brands that need cleaner numbers and a stronger site.",
      },
      {
        icon: Package,
        label: "Product Brands",
        description: "Product businesses selling across more than one channel.",
      },
    ],
  },

  challenges: {
    header: {
      badge: "Common Challenges",
      title: "Where Money Slips",
      description:
        "These are the patterns that show up when spend climbs and the numbers still do not feel right.",
    },
    items: [
      {
        title: "Message misses the buyer",
        description:
          "You are getting traffic, but the offer or story is not landing with the right person.",
      },
      {
        title: "Costs keep climbing",
        description:
          "Ad costs, marketplace fees, and discounts chip away at margin faster than you can track.",
      },
      {
        title: "The site slows sales",
        description:
          "Your in-person team can sell it. The website is not doing the same job.",
      },
      {
        title: "Reporting stays scattered",
        description:
          "Store sales, website data, and ad numbers live in different places, so no one has one clear answer.",
      },
    ],
  },

  solutions: {
    header: {
      badge: "What You Get",
      title: "What We Fix",
      description:
        "We find what is dragging profit down, then fix the message, the site, and the tracking in the right order.",
    },
    items: [
      {
        icon: Target,
        title: "Your Buyer",
        items: [
          "What your customer is really comparing",
          "Which channels deserve your budget",
          "What to change before you spend more",
        ],
      },
      {
        icon: Code,
        title: "Your Store",
        items: [
          "A website built around how people actually buy",
          "Checkout, forms, and tracking that work cleanly",
          "Faster pages and clearer product stories",
        ],
      },
      {
        icon: TrendingUp,
        title: "Your Follow-Up",
        items: [
          "SEO built around real search behavior",
          "Paid search and paid social only when the numbers work",
          "Email and follow-up that bring people back",
        ],
      },
    ],
  },

  cta: {
    title: "Talk It Through",
    body: "We can look at where the money is going, what the website is doing to sales, and whether I am the right person to help.",
    secondaryButtonLabel: "See our 5-step process",
  },
};
