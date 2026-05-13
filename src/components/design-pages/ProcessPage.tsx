"use client";

import { motion } from "motion/react";
import { Button } from "../design/Button";
import { SectionHeader } from "../design/SectionHeader";
import { PageBackLink } from "../design/PageBackLink";
import { slideByIndex, slideUp } from "@/lib/motion";
import { site } from "@/lib/site";
import {
  Search,
  Users,
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

  const principles = [
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
                Market First, Then Strategy You Can Execute
              </h1>
              <p
                className="font-body text-xl lg:text-2xl mb-8 leading-relaxed"
                style={{ color: "var(--brand-neutral)", maxWidth: "none" }}
              >
                Engagements open with industry and competitor research, not ad spend. Five phases move from market context through your business, tailored strategy, launch, and optimization so nothing ships without homework behind it.
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
            <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-2">
              <div className="hidden md:block absolute left-[6%] right-[6%] top-7 h-0.5 bg-linear-to-r from-(--brand-secondary) via-(--brand-primary) to-(--brand-deep) opacity-40" />
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
            title="Principles Behind the Five Phases"
            description="Research-led growth, brand-aligned plans, and measurement you can act on. One principal keeps the thread from scan through optimization."
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
              Curious How This Maps to You?
            </h2>
            <p className="font-body text-xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto">
              Share your industry, goals, and where growth feels stuck. I will walk you through how the five phases would look on your timeline.
            </p>
            <Button variant="secondary" size="lg" href={site.bookingPath}>
              Schedule intro call
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
