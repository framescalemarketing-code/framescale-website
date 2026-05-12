"use client";

import { motion } from "motion/react";
import { Button } from "../design/Button";
import { SectionHeader } from "../design/SectionHeader";
import { PageBackLink } from "../design/PageBackLink";
import { slideByIndex, slideUp } from "@/lib/motion";
import {
  Search,
  Target,
  Rocket,
  BarChart3,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const ProcessPage = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Understand Your Business",
      description: "We start by deeply understanding your business, customers, and competitive landscape.",
      activities: [
        "Discovery call and business assessment",
        "Market and competitive research",
        "Customer persona development",
        "Current marketing audit",
        "Success metrics definition",
      ],
      deliverables: [
        "Research findings report",
        "Customer persona documentation",
        "Competitive landscape analysis",
      ],
    },
    {
      number: "02",
      icon: Target,
      title: "Build Your Strategy",
      description: "We develop a comprehensive marketing strategy tailored to your business goals and market position.",
      activities: [
        "Positioning and messaging strategy",
        "Channel strategy and prioritization",
        "Growth roadmap planning",
        "Technical architecture design",
        "Content and campaign planning",
      ],
      deliverables: [
        "Marketing strategy document",
        "Messaging framework",
        "90-day execution roadmap",
      ],
    },
    {
      number: "03",
      icon: Rocket,
      title: "Execute & Launch",
      description: "We build and launch the technical systems and campaigns needed to drive growth.",
      activities: [
        "Website development and optimization",
        "Marketing automation setup",
        "CRM and analytics implementation",
        "Campaign creation and launch",
        "Content production and distribution",
      ],
      deliverables: [
        "Live website and systems",
        "Active marketing campaigns",
        "Performance tracking dashboard",
      ],
    },
    {
      number: "04",
      icon: BarChart3,
      title: "Track & Optimize",
      description: "We continuously measure performance, learn from data, and optimize for better results.",
      activities: [
        "Performance monitoring and reporting",
        "A/B testing and experimentation",
        "Campaign optimization",
        "Conversion rate improvement",
        "Strategy refinement",
      ],
      deliverables: [
        "Monthly performance reports",
        "Optimization recommendations",
        "Updated growth roadmap",
      ],
    },
  ];

  const principles = [
    {
      title: "One Team, One Plan",
      description: "Strategy, design, and engineering sit on the same team. Shared context keeps every deliverable aligned to the same goal.",
    },
    {
      title: "Research-Driven",
      description: "Every decision starts with understanding your customers and competitive landscape.",
    },
    {
      title: "Technical Excellence",
      description: "We build modern, scalable systems engineered to perform under load and adapt as your business grows.",
    },
    {
      title: "Continuous Improvement",
      description: "Launch starts the work. We measure, learn, and optimize on a steady cadence so performance compounds month over month.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-linear-to-br from-white via-(--brand-secondary)/5 to-white pt-32 pb-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-96 h-96 bg-linear-to-br from-(--brand-primary)/10 to-(--brand-secondary)/10 rounded-full blur-3xl" />
        </div>

        <PageBackLink className="absolute top-24 left-6 z-20 lg:top-28 lg:left-8" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              variants={slideUp}
              initial="hidden"
              animate="show"
            >
              <span className="inline-block px-3 py-1.5 rounded-full bg-linear-to-r from-(--brand-primary)/10 to-(--brand-secondary)/10 border border-(--brand-primary)/20 font-ui text-xs font-semibold uppercase tracking-wide text-(--brand-primary) mb-6">
                Our Process
              </span>
              <h1
                className="font-headline text-5xl lg:text-6xl mb-6 leading-tight"
                style={{ color: "var(--brand-deep)" }}
              >
                A clear framework for sustainable growth
              </h1>
              <p
                className="font-body text-xl lg:text-2xl mb-8 leading-relaxed"
                style={{ color: "var(--brand-neutral)", maxWidth: "none" }}
              >
                Four phases that take you from strategy to shipped results. Every step is transparent, research-driven, and grounded in measurable outcomes.
              </p>
            </motion.div>
          </div>

          {/* Visual timeline overview */}
          <motion.div
            variants={slideUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-20 max-w-5xl mx-auto"
          >
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-3">
              <div className="hidden md:block absolute left-[12.5%] right-[12.5%] top-7 h-0.5 bg-linear-to-r from-(--brand-secondary) via-(--brand-primary) to-(--brand-deep) opacity-40" />
              {steps.map((step, i) => (
                <div key={i} className="relative flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-white border border-(--brand-primary)/30 shadow-[0_8px_24px_-12px_rgba(23,120,142,0.35)] flex items-center justify-center mb-4 relative z-10">
                    <step.icon className="w-6 h-6 text-(--brand-primary)" />
                  </div>
                  <div className="font-ui text-[10px] font-semibold tracking-[0.18em] uppercase text-(--brand-secondary) mb-1">
                    Phase {step.number}
                  </div>
                  <div className="font-headline text-sm md:text-base text-(--brand-deep) leading-tight">
                    {step.title}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={slideByIndex(index)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <div className="lg:sticky lg:top-32">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="font-headline text-6xl lg:text-7xl text-(--brand-primary)/20">
                        {step.number}
                      </span>
                      <div className="w-16 h-16 rounded-xl bg-linear-to-br from-(--brand-primary) to-(--brand-secondary) flex items-center justify-center">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h2
                      className="font-headline text-3xl lg:text-4xl mb-4"
                      style={{ color: "var(--brand-deep)" }}
                    >
                      {step.title}
                    </h2>
                    <p
                      className="font-body text-lg leading-relaxed"
                      style={{ color: "var(--brand-neutral)", maxWidth: "none" }}
                    >
                      {step.description}
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div className="bg-white rounded-2xl p-8 border border-border">
                      <h3
                        className="font-headline text-xl mb-4"
                        style={{ color: "var(--brand-deep)" }}
                      >
                        Key Activities
                      </h3>
                      <ul className="space-y-3">
                        {step.activities.map((activity, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-(--brand-primary) shrink-0 mt-0.5" />
                            <span
                              className="font-body text-sm"
                              style={{ color: "var(--brand-neutral)" }}
                            >
                              {activity}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-linear-to-br from-(--brand-primary)/5 to-(--brand-secondary)/5 rounded-2xl p-8 border border-(--brand-primary)/20">
                      <h3
                        className="font-headline text-xl mb-4"
                        style={{ color: "var(--brand-deep)" }}
                      >
                        Deliverables
                      </h3>
                      <ul className="space-y-2">
                        {step.deliverables.map((deliverable, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <ArrowRight className="w-4 h-4 text-(--brand-primary)" />
                            <span className="font-body text-sm font-medium" style={{ color: "var(--brand-deep)" }}>
                              {deliverable}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="flex justify-center my-16">
                    <div className="w-px h-16 bg-linear-to-b from-(--brand-primary) to-transparent" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="relative py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            badge="How We Work"
            title="Principles That Guide Our Process"
            description="These foundational beliefs shape how we approach every project and client relationship."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                variants={slideByIndex(index)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-border"
              >
                <h3
                  className="font-headline text-xl mb-3"
                  style={{ color: "var(--brand-deep)" }}
                >
                  {principle.title}
                </h3>
                <p
                  className="font-body leading-relaxed"
                  style={{ color: "var(--brand-neutral)", maxWidth: "none" }}
                >
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 lg:py-32 bg-linear-to-br from-(--brand-primary) to-(--brand-deep) text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="font-headline text-4xl lg:text-5xl mb-6">
              Ready to start your growth journey?
            </h2>
            <p className="font-body text-xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto">
              Let's talk about your business goals and how our process can help you achieve them.
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
