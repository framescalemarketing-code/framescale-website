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
    title: "Make Your Store And Spend Work Together",
    description:
      "When sales activity is up and margin still feels tight, the answer is usually in the message, the website, or the spend. We look at all three so you can see where the money is going.",
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
      title: "Built For Growing Stores",
      description:
        "This works for stores with a website, online brands, and product businesses selling in more than one place.",
    },
    items: [
      {
        icon: Store,
        label: "Physical Retail",
        description: "Stores where the website should help people understand the products before they walk in.",
      },
      {
        icon: ShoppingCart,
        label: "E-commerce Brands",
        description: "Online brands that need the site, the offer, and the numbers to tell the same story.",
      },
      {
        icon: Package,
        label: "Product Brands",
        description: "Product businesses selling in more than one place and trying to see what is actually working.",
      },
    ],
  },

  challenges: {
    header: {
      badge: "Common Challenges",
      title: "Why Sales Feel Hard To Read",
      description:
        "These are the patterns that show up when spend climbs and the numbers still do not feel right.",
    },
    items: [
      {
        title: "Message Misses The Buyer",
        description:
          "Traffic is not the same as intent. The page needs to make the right buyer feel like the product fits them.",
      },
      {
        title: "Costs Keep Climbing",
        description:
          "Ads, fees, discounts, and shipping can eat margin quietly. You need to see the full picture before spending more.",
      },
      {
        title: "The Site Slows Sales",
        description:
          "Your team may know exactly how to sell the product in person. The website should be pulling its weight too.",
      },
      {
        title: "Reporting Stays Scattered",
        description:
          "Store sales, web data, and ad reports all say something different. That makes it hard to know what deserves your attention.",
      },
    ],
  },

  solutions: {
    header: {
      badge: "What You Get",
      title: "What We Tighten First",
      description:
        "We find what is dragging profit down, then fix the message, the site, and the tracking in the right order.",
    },
    items: [
      {
        icon: Target,
        title: "Your Buyer",
        items: [
          "What customers compare before they decide to buy",
          "Which channels are worth your attention right now",
          "What should change before more budget goes into ads",
        ],
      },
      {
        icon: Code,
        title: "Your Store",
        items: [
          "A website built around the way people actually shop",
          "Checkout, forms, and tracking that do not create friction",
          "Faster pages and product stories that make the choice easier",
        ],
      },
      {
        icon: TrendingUp,
        title: "Your Follow-Up",
        items: [
          "SEO built around what buyers search before they are ready",
          "Paid search and paid social used only when the math supports it",
          "Email and follow-up that give people a real reason to come back",
        ],
      },
    ],
  },

  cta: {
    title: "Review The Buying Path",
    body: "We can look at the spend, the site, and the buying path together. Then I will show you where I think money is leaking first.",
    secondaryButtonLabel: "See Our 5-Step Process",
  },
};
