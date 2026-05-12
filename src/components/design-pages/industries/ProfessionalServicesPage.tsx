"use client";

import { motion } from "motion/react";
import { Button } from "../../design/Button";
import { PageBackLink } from "../../design/PageBackLink";
import { SectionHeader } from "../../design/SectionHeader";
import { slideByIndex, slideUp } from "@/lib/motion";
import {
  Scale,
  TrendingUp,
  Target,
  Code,
  CheckCircle2,
  Briefcase,
  FileText,
} from "lucide-react";

export const ProfessionalServicesPage = () => {
  const challenges = [
    {
      title: "Qualified Pipeline",
      description: "Generating consultations that fit your engagement size, not low-intent leads that waste partner time.",
    },
    {
      title: "Authority & Trust",
      description: "Producing the case studies, thought leadership, and on-page proof that prospects review before they ever call.",
    },
    {
      title: "Firm-Grade Presence",
      description: "Building a website and digital footprint that reflects partner-level expertise and reassures sophisticated buyers.",
    },
    {
      title: "Pipeline Attribution",
      description: "Tying first-touch and assisted channels to closed engagement value so marketing spend ties back to revenue.",
    },
  ];

  const solutions = [
    {
      icon: Target,
      title: "Positioning & Authority",
      items: [
        "Ideal-client and engagement-model clarity",
        "Competitive and referral landscape research",
        "Authority-led messaging framework",
        "Proof, case structure, and content for sophisticated buyers",
      ],
    },
    {
      icon: Code,
      title: "Firm-Grade Web Systems",
      items: [
        "Modern, accessible, partner-caliber websites",
        "Intake forms, CRM, and consultation routing",
        "Secure document and client-portal patterns",
        "Server-side analytics and lead attribution",
      ],
    },
    {
      icon: TrendingUp,
      title: "Pipeline Generation",
      items: [
        "SEO and thought-leadership content",
        "LinkedIn and Google paid campaigns",
        "Email nurture for long sales cycles",
        "Referral and review programs",
      ],
    },
  ];

  const verticals = [
    { icon: Briefcase, label: "Consulting & Advisory", description: "Strategy, operations, and management consulting" },
    { icon: Scale, label: "Legal Services", description: "Law firms, legal consultancies, specialty practices" },
    { icon: FileText, label: "Accounting & Finance", description: "CPA firms, financial advisors, tax services" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-linear-to-br from-white via-(--brand-deep)/5 to-white pt-32 pb-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-linear-to-br from-(--brand-deep)/10 to-(--brand-primary)/10 rounded-full blur-3xl" />
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
              <div className="w-14 h-14 rounded-xl bg-linear-to-br from-(--brand-deep) to-(--brand-primary) flex items-center justify-center">
                <Scale className="w-7 h-7 text-white" />
              </div>
              <span className="font-ui text-sm font-semibold uppercase tracking-wider text-(--brand-primary)">
                Professional Services Marketing
              </span>
            </div>

            <h1
              className="font-headline text-5xl lg:text-6xl mb-6 leading-tight"
              style={{ color: "var(--brand-deep)" }}
            >
              Pipeline you can defend, for consultants and partner-led firms
            </h1>

            <p
              className="font-body text-xl lg:text-2xl mb-8 leading-relaxed"
              style={{ color: "var(--brand-neutral)", maxWidth: "none" }}
            >
              Consultants and advisory firms sit at the center of how I work, alongside law, CPA, and finance practices that need authority before the first call. Positioning, firm-grade web, and attribution that respects long sales cycles.
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
            badge="Markets We Help Grow"
            title="Where Trust Is the Product"
            description="Consultants, legal, and finance buyers all run on credibility before they ever see a proposal. The work still maps cleanly to pipeline, just on different clocks."
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
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-(--brand-deep) to-(--brand-primary) flex items-center justify-center mb-6">
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
            title="Professional Services Growth Frictions"
            description="Trust and authority decide who gets the meeting. These are the gaps that quietly cap pipeline."
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
            title="Positioning, Web Systems, and Demand in One Arc"
            description="Authority-led positioning, partner-caliber sites, and demand programs that respect how long your buyers actually take to say yes."
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
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-(--brand-deep) to-(--brand-primary) flex items-center justify-center mb-6">
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
              Ready to Grow Your Professional Practice?
            </h2>
            <p className="font-body text-xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto">
              {`Qualified consultations come from credibility, not volume. If you want a partner who sharpens the expertise you already have, builds web systems that earn trust before the first call, and tracks pipeline back to the channels that produced it, let's have the conversation.`}
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
                See our 5-step process
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
