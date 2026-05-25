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
      "When sales are up but profit feels low, the answer is usually in the message, the website, or the spend. We look at all three so you can see where the money is going.",
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
      title: "Marketing And Sales Go Hand In Hand",
      description:
        "When marketing and sales stay connected, you can see what is driving revenue and what is pulling profit down.",
    },
    items: [
      {
        title: "Message Misses The Buyer",
        description:
          "Traffic is not the same as conversion. The page needs to speak to the buyer so they can take action.",
      },
      {
        title: "Costs Keep Climbing",
        description:
          "Ads in multiple channels, fees, discounts on sales, and shipping can eat up your margins. You need to see the full picture before spending more.",
      },
      {
        title: "Your Site And Store Aren't Cohesive",
        description:
          "Your website is an extension of your store and a common first place people engage with your brand. It must work together with your store to bring more sales.",
      },
      {
        title: "Reporting Is Hard To Track",
        description:
          "With new AI and data tools, reporting is easier to get and harder to keep organized. You need a strong central system that gives you a proper source of truth for your data.",
      },
    ],
  },

  solutions: {
    header: {
      badge: "What You Get",
      title: "What We Do First",
      description:
        "We start with research so we understand who your buyer really is. A mixed customer base can lead to a mixed message, a disconnected website, and reporting that is hard to trust.",
    },
    items: [
      {
        icon: Target,
        title: "Who Is Your Primary Buyer",
        items: [
          "What are their standard demographics",
          "What are they thinking when they decide to buy a product like yours",
          "What are they looking to hear",
          "Where are they looking for a product like yours",
        ],
      },
      {
        icon: Code,
        title: "Is Your Store Working For You",
        items: [
          "Does a physical location enhance the customer experience or make it more difficult",
          "Does the experience stay consistent for someone who visits in store",
          "Where are people falling off in the funnel in store and online",
        ],
      },
      {
        icon: TrendingUp,
        title: "What Is Your Follow-Up",
        items: [
          "Are you re-engaging potential buyers",
          "Are you providing value for people who have purchased",
          "Is there a loop for your customers that keeps them buying your product",
          "Are you gaining feedback to strengthen your product",
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
