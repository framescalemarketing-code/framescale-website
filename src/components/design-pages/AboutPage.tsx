"use client";

import { motion } from "motion/react";
import { Button } from "../design/Button";
import { SectionHeader } from "../design/SectionHeader";
import { PageBackLink } from "../design/PageBackLink";
import { slideByIndex, slideInFromLeft, slideUp } from "@/lib/motion";
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
      title: "Research Before Spend",
      description:
        "I do not touch campaigns until the market, offer, and customer story are clear. That discipline protects your budget and your reputation.",
    },
    {
      icon: Code,
      title: "Custom Sites, Not Rentals",
      description:
        "Your marketing site should feel like your business, not a WordPress or Wix skin. I build custom web so performance, trust, and conversion stay in one system.",
    },
    {
      icon: Users,
      title: "Personal Depth, Selective Roster",
      description:
        "You work with me directly on a selective roster so you get teaching, access, and follow-through instead of a junior relay race.",
    },
    {
      icon: TrendingUp,
      title: "Teach You to Scale",
      description:
        "The goal is growth you understand through systems, metrics, and decisions you can carry forward. Over time you should need me less, not more.",
    },
  ];

  const industries = [
    {
      icon: Heart,
      name: "Healthcare",
      description: "Optical leads. Dental and medical where local trust and bookings matter.",
    },
    {
      icon: ShoppingBag,
      name: "Retail & E-commerce",
      description: "Stores, brands, and online commerce balancing margin and demand.",
    },
    {
      icon: Scale,
      name: "Professional Services",
      description: "Consultants and advisory firms lead. Legal and accounting where pipeline is everything.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-linear-to-br from-white via-(--brand-secondary)/5 to-white pt-32 pb-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-linear-to-br from-(--brand-primary)/10 to-(--brand-secondary)/10 rounded-full blur-3xl" />
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
                About FrameScale Inc
              </span>
              <h1
                className="font-headline text-5xl lg:text-6xl mb-6 leading-tight"
                style={{ color: "var(--brand-deep)" }}
              >
                A marketer with business degrees and the patience to teach what matters
              </h1>
              <p
                className="font-body text-xl lg:text-2xl mb-8 leading-relaxed"
                style={{ color: "var(--brand-neutral)", maxWidth: "none" }}
              >
                FrameScale is how I work with a limited number of owners at a time. You get research-led growth, custom-built web, and fundamentals that stick through SEO, Google Business Profile, analytics, and paid media you can actually use. I am a marketing specialist and business-minded partner, not a social posting service.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="relative py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={slideInFromLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2
              className="font-headline text-3xl lg:text-4xl mb-6"
              style={{ color: "var(--brand-deep)" }}
            >
              Why I built FrameScale this way
            </h2>
            <div className="space-y-6 font-body text-lg leading-relaxed" style={{ color: "var(--brand-neutral)" }}>
              <p>
                {`I have walked the same maze many owners describe: smart strategy that never ships, or busy tactics that never tie back to margin. With both a bachelor's and a master's in business, I care as much about how growth shows up on a P&L as how it looks in an ad account.`}
              </p>
              <p>
                I also believe respect is shown through bandwidth. I only take work I want to carry personally, and I keep concurrent clients intentionally low, usually no more than three, so you get depth, teaching, and follow-through instead of a handoff queue.
              </p>
              <p>
                Before I spend a dollar of your media budget, I want the research, positioning, and offer clarity to be defensible. Then I build custom marketing sites and systems that match how you actually win customers. That is not a WordPress or Wix template dressed up as strategy.
              </p>
              <p>
                If we work together, you should leave smarter: clearer on what to measure, why the plan looks the way it does, and how to keep scaling even when our project phases wind down. That is the point.
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
            title="How I Work With Clients"
            description="Principles you should feel on every call. Clarity first, ego last."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={slideByIndex(index)}
                initial="hidden"
                whileInView="show"
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
            badge="Industries I Serve"
            title="Where This Approach Fits Best"
            description="Optical-led healthcare, margin-aware retail, and consultant-led professional services are where this model tends to fit best."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                variants={slideByIndex(index)}
                initial="hidden"
                whileInView="show"
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
            variants={slideUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center"
          >
            <h2
              className="font-headline text-3xl lg:text-4xl mb-6"
              style={{ color: "var(--brand-deep)" }}
            >
              Built to Stay Personal as You Grow
            </h2>
            <p
              className="font-body text-lg leading-relaxed mb-8"
              style={{ color: "var(--brand-neutral)", maxWidth: "none" }}
            >
              FrameScale Inc is the S-corp vehicle behind the work. It is structured for serious engagements, clear contracts, and the accountability you expect when growth is on the line.
            </p>
          </motion.div>
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
              If the fit is right, we will both know it
            </h2>
            <p className="font-body text-xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto">
              Bring your goals, your constraints, and your questions. I will be direct about whether I am the right partner and what honest next steps look like either way.
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
