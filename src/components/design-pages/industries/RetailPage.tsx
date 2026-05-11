"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "../../design/Button";
import { SectionHeader } from "../../design/SectionHeader";
import {
  ShoppingBag,
  TrendingUp,
  Target,
  Code,
  ArrowRight,
  CheckCircle2,
  Store,
  ShoppingCart,
  Package,
} from "lucide-react";

export const RetailPage = () => {
  const challenges = [
    {
      title: "Customer Acquisition",
      description: "Standing out in crowded markets and attracting customers beyond price competition",
    },
    {
      title: "E-commerce Systems",
      description: "Building modern online stores that convert browsers into buyers",
    },
    {
      title: "Multi-Channel Growth",
      description: "Coordinating in-store, online, and marketplace strategies effectively",
    },
    {
      title: "Brand Differentiation",
      description: "Creating clear positioning that resonates with your target customers",
    },
  ];

  const solutions = [
    {
      icon: Target,
      title: "Strategic Positioning",
      items: [
        "Market research and competitive analysis",
        "Customer persona development",
        "Brand positioning and messaging",
        "Product-market fit validation",
      ],
    },
    {
      icon: Code,
      title: "E-commerce Execution",
      items: [
        "Modern e-commerce website development",
        "Shopping cart and payment integration",
        "Inventory and order management",
        "Analytics and conversion tracking",
      ],
    },
    {
      icon: TrendingUp,
      title: "Customer Growth",
      items: [
        "SEO and content marketing",
        "Paid advertising (Google, social, marketplaces)",
        "Email marketing and automation",
        "Social media strategy",
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <Link href="/"
              className="inline-flex items-center gap-2 text-(--brand-primary) font-ui text-sm mb-6 hover:gap-3 transition-all"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Industries
            </Link>

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
              From physical stores to e-commerce brands to product companies—we help retail businesses build customer acquisition systems that scale.
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
            description="Whether you're brick-and-mortar, online, or both—we understand the unique dynamics of each retail model."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {verticals.map((vertical, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
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
            description="Growing a retail business requires more than just good products—it requires strategic marketing and execution."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
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
            description="We combine strategic positioning with technical execution to build customer acquisition systems that drive sustainable growth."
          />

          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
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
      <section className="relative py-20 lg:py-32 bg-linear-to-br from-(--brand-secondary) to-(--brand-primary) text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
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
