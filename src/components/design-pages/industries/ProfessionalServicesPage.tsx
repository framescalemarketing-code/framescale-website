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
      title: "Client Acquisition",
      description: "Attracting qualified leads and converting them into high-value client relationships",
    },
    {
      title: "Trust & Credibility",
      description: "Establishing expertise and building confidence before the first conversation",
    },
    {
      title: "Digital Presence",
      description: "Creating professional websites and systems that reflect your firm's caliber",
    },
    {
      title: "Marketing ROI",
      description: "Measuring what actually generates qualified leads versus wasted ad spend",
    },
  ];

  const solutions = [
    {
      icon: Target,
      title: "Strategic Positioning",
      items: [
        "Market and competitive analysis",
        "Client persona development",
        "Value proposition and messaging",
        "Service offering optimization",
      ],
    },
    {
      icon: Code,
      title: "Technical Execution",
      items: [
        "Professional website development",
        "Client portal and automation",
        "CRM and email integration",
        "Analytics and lead tracking",
      ],
    },
    {
      icon: TrendingUp,
      title: "Lead Generation",
      items: [
        "SEO and content marketing",
        "Targeted advertising campaigns",
        "Email nurture sequences",
        "Thought leadership strategy",
      ],
    },
  ];

  const verticals = [
    { icon: Scale, label: "Legal Services", description: "Law firms, legal consultancies, specialty practices" },
    { icon: FileText, label: "Accounting & Finance", description: "CPA firms, financial advisors, tax services" },
    { icon: Briefcase, label: "Business Consulting", description: "Strategy, operations, management consulting" },
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
              Client acquisition marketing for professional firms
            </h1>

            <p
              className="font-body text-xl lg:text-2xl mb-8 leading-relaxed"
              style={{ color: "var(--brand-neutral)", maxWidth: "none" }}
            >
              From law firms to accounting practices to consultancies—we help professional service providers build lead generation systems that attract high-value clients.
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
            badge="Service Verticals"
            title="Experience Across Professional Services"
            description="We understand the trust-building and credibility requirements unique to professional service marketing."
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
            title="Professional Services Marketing Problems We Solve"
            description="Growing a professional firm requires more than expertise—it requires strategic marketing that builds trust and generates qualified leads."
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
            title="Full-Stack Professional Services Marketing"
            description="We combine strategic positioning with technical execution to build client acquisition systems that establish credibility and generate leads."
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
              Ready to grow your professional practice?
            </h2>
            <p className="font-body text-xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto">
              Let's discuss your client acquisition goals and build a marketing system that positions your firm as the trusted choice.
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
