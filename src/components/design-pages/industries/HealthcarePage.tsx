"use client";

import { motion } from "motion/react";
import { Button } from "../../design/Button";
import { PageBackLink } from "../../design/PageBackLink";
import { SectionHeader } from "../../design/SectionHeader";
import { slideByIndex, slideUp } from "@/lib/motion";
import {
  Heart,
  TrendingUp,
  Target,
  Code,
  CheckCircle2,
  Stethoscope,
  Eye,
  Smile,
} from "lucide-react";

export const HealthcarePage = () => {
  const challenges = [
    {
      title: "Patient Acquisition",
      description: "Attracting new patients in competitive markets while maintaining a premium brand position",
    },
    {
      title: "Digital Presence",
      description: "Building modern websites and systems that convert visitors into booked appointments",
    },
    {
      title: "Marketing ROI",
      description: "Measuring what actually drives patient growth versus vanity metrics",
    },
    {
      title: "Operational Efficiency",
      description: "Automating patient communication and reducing manual marketing tasks",
    },
  ];

  const solutions = [
    {
      icon: Target,
      title: "Strategic Positioning",
      items: [
        "Competitive research and market analysis",
        "Patient persona development",
        "Messaging and brand positioning",
        "Service line optimization",
      ],
    },
    {
      icon: Code,
      title: "Technical Execution",
      items: [
        "Modern, conversion-optimized websites",
        "Online booking integration",
        "Patient CRM and automation",
        "Analytics and tracking setup",
      ],
    },
    {
      icon: TrendingUp,
      title: "Patient Growth",
      items: [
        "Local SEO and Google Business optimization",
        "Targeted advertising (Google, social)",
        "Email marketing campaigns",
        "Review and reputation management",
      ],
    },
  ];

  const specialties = [
    { icon: Eye, label: "Optical & Optometry", description: "Premium eyewear retail, independent practices" },
    { icon: Smile, label: "Dental Practices", description: "General dentistry, specialty clinics" },
    { icon: Stethoscope, label: "Medical Offices", description: "Specialty practices, multi-provider groups" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-linear-to-br from-white via-(--brand-secondary)/5 to-white pt-32 pb-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-96 h-96 bg-linear-to-br from-(--brand-primary)/10 to-(--brand-secondary)/10 rounded-full blur-3xl" />
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
              <div className="w-14 h-14 rounded-xl bg-linear-to-br from-(--brand-primary) to-(--brand-secondary) flex items-center justify-center">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <span className="font-ui text-sm font-semibold uppercase tracking-wider text-(--brand-primary)">
                Healthcare Marketing
              </span>
            </div>

            <h1
              className="font-headline text-5xl lg:text-6xl mb-6 leading-tight"
              style={{ color: "var(--brand-deep)" }}
            >
              Patient growth marketing for healthcare practices
            </h1>

            <p
              className="font-body text-xl lg:text-2xl mb-8 leading-relaxed"
              style={{ color: "var(--brand-neutral)", maxWidth: "none" }}
            >
              From optical retail to dental clinics to specialty medical practices—we help healthcare businesses attract patients, build systems, and scale sustainably.
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

      {/* Specialties */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            badge="Healthcare Specialties"
            title="Tailored Experience Across Healthcare Sectors"
            description="We understand the unique challenges of different healthcare verticals and build marketing systems accordingly."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <motion.div
                key={index}
                variants={slideByIndex(index)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-border hover:border-(--brand-primary) transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-(--brand-primary) to-(--brand-secondary) flex items-center justify-center mb-6">
                  <specialty.icon className="w-6 h-6 text-white" />
                </div>
                <h3
                  className="font-headline text-xl mb-3"
                  style={{ color: "var(--brand-deep)" }}
                >
                  {specialty.label}
                </h3>
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: "var(--brand-neutral)", maxWidth: "none" }}
                >
                  {specialty.description}
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
            title="Healthcare Marketing Problems We Solve"
            description="Every healthcare practice faces unique growth challenges. Here's what we help you overcome."
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
            title="Full-Stack Healthcare Marketing"
            description="We combine strategic thinking with technical execution to build patient acquisition systems that actually work."
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
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-(--brand-primary) to-(--brand-secondary) flex items-center justify-center mb-6">
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
              Ready to grow your healthcare practice?
            </h2>
            <p className="font-body text-xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto">
              Let's discuss your patient acquisition goals and how we can help you build a sustainable growth system.
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
