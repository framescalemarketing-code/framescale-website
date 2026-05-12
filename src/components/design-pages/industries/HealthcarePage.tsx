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
      description: "Attracting new patients in competitive local markets while staying compliant with healthcare advertising standards.",
    },
    {
      title: "Booking & Intake",
      description: "Turning website visitors into booked appointments with modern scheduling, online intake, and reminder workflows.",
    },
    {
      title: "Reviews & Reputation",
      description: "Building a steady flow of authentic reviews on Google and specialty directories so prospective patients trust you first.",
    },
    {
      title: "Privacy-Aware Analytics",
      description: "Measuring what drives bookings without exposing PHI, using HIPAA-aware tracking and server-side conversions.",
    },
  ];

  const solutions = [
    {
      icon: Target,
      title: "Practice Positioning",
      items: [
        "Service-line and payer mix analysis",
        "Patient persona and journey mapping",
        "Local market and competitor research",
        "Messaging tuned to each specialty",
      ],
    },
    {
      icon: Code,
      title: "Booking-Ready Websites",
      items: [
        "Modern, fast, accessible practice sites",
        "Online booking and scheduler integration",
        "HIPAA-aware analytics and consent",
        "Insurance and service-line landing pages",
      ],
    },
    {
      icon: TrendingUp,
      title: "Patient Growth",
      items: [
        "Local SEO and Google Business optimization",
        "Targeted Google and Meta ad campaigns",
        "Recall, reactivation, and referral workflows",
        "Review generation and reputation management",
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
              className="font-headline text-4xl lg:text-5xl mb-6 leading-tight"
              style={{ color: "var(--brand-deep)" }}
            >
              Bookings-first growth for healthcare practices
            </h1>

            <p
              className="font-body text-xl lg:text-2xl mb-8 leading-relaxed"
              style={{ color: "var(--brand-neutral)", maxWidth: "none" }}
            >
              Independent optical and multi-location eye care are where my experience runs deepest. The same research-led positioning, booking-ready sites, and local visibility work extends to dental and specialty practices competing on reputation and schedule density.
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
            title="Where Clinical Models Diverge"
            description="Optical, dental, and specialty practices share fundamentals but live in different markets. Positioning, intake, and channel mix follow the reality of each specialty."
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
            title="Growth Blockers We See in Care Delivery"
            description="Every practice has its own payer mix and competitive set. These are the patterns that keep schedules softer than they should be."
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
            title="From Positioning to Booked Appointments"
            description="Strategy, modern web, and patient-acquisition programs stay on one thread. Privacy-aware measurement stays tied to booked appointments, not vanity traffic."
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
              Ready to Grow Your Healthcare Practice?
            </h2>
            <p className="font-body text-xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto">
              {`Your practice runs on trust, booked appointments, and a reputation patients talk about. If you want a partner who researches your local market first, builds a site that reflects the care you deliver, and measures what actually fills the schedule, let's start with a conversation.`}
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
