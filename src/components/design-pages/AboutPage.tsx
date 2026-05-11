"use client";

import { motion } from "motion/react";
import { Button } from "../design/Button";
import { SectionHeader } from "../design/SectionHeader";
import {
  Target,
  Code,
  Users,
  TrendingUp,
  Heart,
  ShoppingBag,
  Scale,
} from "lucide-react";

export const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: "Strategy First",
      description: "We believe great execution starts with understanding the why before the how. Every tactic is connected to a strategic goal.",
    },
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Marketing requires more than creativity—it requires building systems that work. We combine strategy with engineering discipline.",
    },
    {
      icon: Users,
      title: "No Handoff Friction",
      description: "Strategy and execution shouldn't live in separate silos. We own the full stack, from research to launch.",
    },
    {
      icon: TrendingUp,
      title: "Sustainable Growth",
      description: "We're not chasing vanity metrics or quick wins. We build systems that compound over time.",
    },
  ];

  const industries = [
    {
      icon: Heart,
      name: "Healthcare",
      description: "Optical practices, dental clinics, medical offices",
    },
    {
      icon: ShoppingBag,
      name: "Retail & E-commerce",
      description: "Product brands, stores, online commerce",
    },
    {
      icon: Scale,
      name: "Professional Services",
      description: "Legal, accounting, consulting firms",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-linear-to-br from-white via-(--brand-secondary)/5 to-white pt-32 pb-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-linear-to-br from-(--brand-primary)/10 to-(--brand-secondary)/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-linear-to-r from-(--brand-primary)/10 to-(--brand-secondary)/10 border border-(--brand-primary)/20 font-ui text-sm font-semibold uppercase tracking-wider text-(--brand-primary) mb-6">
                About FrameScale Inc
              </span>
              <h1
                className="font-headline text-5xl lg:text-6xl mb-6 leading-tight"
                style={{ color: "var(--brand-deep)" }}
              >
                Marketing strategy and execution without the handoff
              </h1>
              <p
                className="font-body text-xl lg:text-2xl mb-8 leading-relaxed"
                style={{ color: "var(--brand-neutral)", maxWidth: "none" }}
              >
                We're a full-stack growth marketing firm that helps small to mid-size businesses build scalable customer acquisition systems.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="relative py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="font-headline text-3xl lg:text-4xl mb-6"
              style={{ color: "var(--brand-deep)" }}
            >
              Why FrameScale Inc exists
            </h2>
            <div className="space-y-6 font-body text-lg leading-relaxed" style={{ color: "var(--brand-neutral)" }}>
              <p>
                Most businesses face the same frustrating cycle: marketing consultants deliver brilliant strategy decks that never get executed. Agencies execute tactics without understanding the strategic context. Freelancers handle one piece of the puzzle, leaving you to connect everything.
              </p>
              <p>
                The result? Strategy that sits in slide decks. Execution that ignores positioning. Systems that break. Growth that stalls.
              </p>
              <p>
                We built FrameScale Inc to solve this problem. We combine strategic marketing thinking with full-stack technical execution—research, positioning, systems, campaigns, measurement—all under one roof.
              </p>
              <p>
                No handoffs between strategy and execution. No lost context. No wondering if the person building your website understands your customer personas. Just integrated growth marketing that actually ships.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            badge="Our Values"
            title="What Drives Our Work"
            description="These principles shape how we approach every project and client relationship."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-border"
              >
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-(--brand-primary) to-(--brand-secondary) flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3
                  className="font-headline text-xl mb-3"
                  style={{ color: "var(--brand-deep)" }}
                >
                  {value.title}
                </h3>
                <p
                  className="font-body leading-relaxed"
                  style={{ color: "var(--brand-neutral)", maxWidth: "none" }}
                >
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            badge="Industries We Serve"
            title="Multi-Industry Experience"
            description="We've worked across different sectors and understand the unique dynamics of each market."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-border hover:border-(--brand-primary) transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-(--brand-primary) to-(--brand-secondary) flex items-center justify-center mb-6">
                  <industry.icon className="w-6 h-6 text-white" />
                </div>
                <h3
                  className="font-headline text-xl mb-3"
                  style={{ color: "var(--brand-deep)" }}
                >
                  {industry.name}
                </h3>
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: "var(--brand-neutral)", maxWidth: "none" }}
                >
                  {industry.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Structure */}
      <section className="relative py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2
              className="font-headline text-3xl lg:text-4xl mb-6"
              style={{ color: "var(--brand-deep)" }}
            >
              Structured for Growth
            </h2>
            <p
              className="font-body text-lg leading-relaxed mb-8"
              style={{ color: "var(--brand-neutral)", maxWidth: "none" }}
            >
              FrameScale Inc is an S-corporation built to deliver high-quality marketing services to growing businesses. We're structured to move fast, stay focused, and scale sustainably as we help our clients do the same.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 lg:py-32 bg-linear-to-br from-(--brand-primary) to-(--brand-deep) text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-headline text-4xl lg:text-5xl mb-6">
              Let's work together
            </h2>
            <p className="font-body text-xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto">
              Ready to build a marketing system that connects strategy to execution? Let's talk.
            </p>
            <Button variant="secondary" size="lg" href="/contact">
              Schedule Discovery Call
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
