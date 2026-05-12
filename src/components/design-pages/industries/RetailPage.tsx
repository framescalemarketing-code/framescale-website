"use client";

import { motion } from "motion/react";
import { Button } from "../../design/Button";
import { PageBackLink } from "../../design/PageBackLink";
import { SectionHeader } from "../../design/SectionHeader";
import { slideByIndex, slideUp } from "@/lib/motion";
import {
  ShoppingBag,
  TrendingUp,
  Target,
  Code,
  CheckCircle2,
  Store,
  ShoppingCart,
  Package,
} from "lucide-react";

export const RetailPage = () => {
  const challenges = [
    {
      title: "Customer Acquisition Cost",
      description: "Lowering blended CAC across paid, organic, and marketplace channels while protecting margin on every order.",
    },
    {
      title: "Storefronts That Convert",
      description: "Building fast, mobile-first e-commerce and in-store digital experiences that turn product interest into checkout.",
    },
    {
      title: "Repeat Purchase & LTV",
      description: "Designing lifecycle email, SMS, and loyalty programs that lift AOV and bring customers back without paid spend.",
    },
    {
      title: "Omnichannel Attribution",
      description: "Connecting in-store, online, and marketplace data so you can see which campaigns actually drive revenue.",
    },
  ];

  const solutions = [
    {
      icon: Target,
      title: "Brand & Positioning",
      items: [
        "Category and competitor research",
        "Customer persona and segmentation",
        "Brand messaging and product storytelling",
        "Pricing and merchandising strategy",
      ],
    },
    {
      icon: Code,
      title: "Commerce Engineering",
      items: [
        "Shopify, headless, and custom storefronts",
        "Checkout, payments, and subscription flows",
        "CRO, A/B testing, and Core Web Vitals tuning",
        "Server-side tracking and unified analytics",
      ],
    },
    {
      icon: TrendingUp,
      title: "Acquisition & Retention",
      items: [
        "Paid social, search, and marketplace ads",
        "SEO and product content at scale",
        "Klaviyo and SMS lifecycle automation",
        "Loyalty, reviews, and post-purchase flows",
      ],
    },
  ];

  const verticals = [
    { icon: Store, label: "Physical Retail", description: "Brick-and-mortar stores, showrooms, boutiques" },
    { icon: ShoppingCart, label: "E-commerce Brands", description: "Direct-to-consumer online stores" },
    { icon: Package, label: "Product Brands", description: "Consumer packaged goods, specialty products" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-linear-to-br from-white via-(--brand-secondary)/5 to-white pt-32 pb-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-linear-to-br from-(--brand-secondary)/10 to-(--brand-primary)/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            variants={slideUp}
            initial="hidden"
            animate="show"
            className="max-w-4xl"
          >
            <PageBackLink href="/#industries" label="Back to Industries" className="mb-6" />

            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-xl bg-linear-to-br from-(--brand-secondary) to-(--brand-primary) flex items-center justify-center">
                <ShoppingBag className="w-7 h-7 text-white" />
              </div>
              <span className="font-ui text-sm font-semibold uppercase tracking-wider text-(--brand-primary)">
                Retail & E-commerce Marketing
              </span>
            </div>

            <h1
              className="font-headline text-5xl lg:text-6xl mb-6 leading-tight"
              style={{ color: "var(--brand-deep)" }}
            >
              Growth marketing for retail and consumer brands
            </h1>

            <p
              className="font-body text-xl lg:text-2xl mb-8 leading-relaxed"
              style={{ color: "var(--brand-neutral)", maxWidth: "none" }}
            >
              Customer-acquisition systems for physical retail, e-commerce, and consumer product brands. One team owns the strategy, storefront, paid media, and lifecycle workflows that grow revenue.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" href="/contact">
                Schedule Discovery Call
              </Button>
              <Button size="lg" variant="ghost" href="/process">
                Our Process
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Verticals */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            badge="Retail Verticals"
            title="Experience Across Retail Formats"
            description="Brick-and-mortar, online, and hybrid retailers operate on different unit economics. We tune positioning, channels, and tech stack to each model."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {verticals.map((vertical, index) => (
              <motion.div
                key={index}
                variants={slideByIndex(index)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-border hover:border-(--brand-primary) transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-(--brand-secondary) to-(--brand-primary) flex items-center justify-center mb-6">
                  <vertical.icon className="w-6 h-6 text-white" />
                </div>
                <h3
                  className="font-headline text-xl mb-3"
                  style={{ color: "var(--brand-deep)" }}
                >
                  {vertical.label}
                </h3>
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: "var(--brand-neutral)", maxWidth: "none" }}
                >
                  {vertical.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="relative py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            badge="Common Challenges"
            title="Retail Marketing Problems We Solve"
            description="Growing a retail brand means defending margin while scaling demand. These are the levers that move the business."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                variants={slideByIndex(index)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-border"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-(--brand-primary) shrink-0 mt-1" />
                  <div>
                    <h3
                      className="font-headline text-xl mb-3"
                      style={{ color: "var(--brand-deep)" }}
                    >
                      {challenge.title}
                    </h3>
                    <p
                      className="font-body leading-relaxed"
                      style={{ color: "var(--brand-neutral)", maxWidth: "none" }}
                    >
                      {challenge.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            badge="Our Approach"
            title="Full-Stack Retail Marketing"
            description="Brand, storefront, and growth channels operated by one integrated team. Senior strategists own the plan, engineers ship the stack, and every campaign is measured against revenue."
          />

          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                variants={slideByIndex(index)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-border hover:border-(--brand-primary) transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-(--brand-secondary) to-(--brand-primary) flex items-center justify-center mb-6">
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
                <h3
                  className="font-headline text-xl mb-6"
                  style={{ color: "var(--brand-deep)" }}
                >
                  {solution.title}
                </h3>
                <ul className="space-y-3">
                  {solution.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                        style={{ backgroundColor: "var(--brand-primary)" }}
                      ></div>
                      <span
                        className="font-body text-sm"
                        style={{ color: "var(--brand-neutral)" }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 lg:py-32 bg-linear-to-br from-[#2E8A8C] via-(--brand-primary) to-(--brand-deep) text-white overflow-hidden">
        <div className="grain-overlay" aria-hidden />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="font-headline text-4xl lg:text-5xl mb-6">
              Ready to scale your retail business?
            </h2>
            <p className="font-body text-xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto">
              Let's discuss your customer acquisition goals and build a marketing system that drives sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" href="/contact">
                Schedule Discovery Call
              </Button>
              <Button
                variant="ghost"
                size="lg"
                href="/process"
                className="text-white bg-white/10 hover:bg-white/20 border-white/20"
              >
                See Our 4-Step Process
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
