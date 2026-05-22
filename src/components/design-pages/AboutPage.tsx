"use client";

import { motion } from "motion/react";
import { Button } from "../design/Button";
import { SectionHeader } from "../design/SectionHeader";
import { PageBackLink } from "../design/PageBackLink";
import { ImagePlaceholder } from "./industries/_shared/ImagePlaceholder";
import { slideByIndex, slideInFromLeft, slideUp } from "@/lib/motion";
import { site } from "@/lib/site";
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
        "We learn your market, your customers, and your numbers before we ask you to spend more.",
    },
    {
      icon: Code,
      title: "Built Around You",
      description:
        "Your website and marketing should fit the way you sell, book, and follow up.",
    },
    {
      icon: Users,
      title: "Always Informed",
      description:
        "You see what changed, what it cost, and what the results mean in plain language.",
    },
    {
      icon: TrendingUp,
      title: "One Point Person",
      description:
        "You work with Jonathan from the first call through the day to day work.",
    },
  ];

  const industries = [
    {
      icon: Heart,
      name: "Healthcare",
      description: "Practices that already earn trust in person and need the website to keep up.",
    },
    {
      icon: ShoppingBag,
      name: "Retail & E-commerce",
      description: "Stores and product brands that need clearer numbers before they spend more.",
    },
    {
      icon: Scale,
      name: "Professional Services",
      description: "Firms that need a website and proof that match the quality of the work.",
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

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            variants={slideUp}
            initial="hidden"
            animate="show"
            className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center"
          >
            <div className="text-left">
              <span className="inline-block px-3 py-1.5 rounded-full bg-linear-to-r from-(--brand-primary)/10 to-(--brand-secondary)/10 border border-(--brand-primary)/20 font-ui text-xs font-semibold uppercase tracking-wide text-(--brand-primary) mb-6">
                About FrameScale
              </span>
              <h1
                className="font-headline text-5xl lg:text-6xl mb-6 leading-tight"
                style={{ color: "var(--brand-deep)" }}
              >
                Meet Jonathan
              </h1>
              <p
                className="font-body text-lg lg:text-xl leading-relaxed max-w-xl"
                style={{ color: "var(--brand-neutral)" }}
              >
                FrameScale is how I work with a small number of business owners at a time. You get research before spend, a website built around your business, clear reporting, and one person who stays with the work.
              </p>
            </div>

            <div className="lg:pl-4">
              <ImagePlaceholder
                aspect="3/4"
                label="Founder portrait"
                description="Natural daylight, three-quarter angle, looking at camera, in what you actually wear on calls."
                variant="primary"
              />
            </div>
          </motion.div>
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
              Why I Work This Way
            </h2>
            <div className="space-y-6 font-body text-lg leading-relaxed" style={{ color: "var(--brand-neutral)" }}>
              <p>
                I built FrameScale for owners who are tired of paying for activity they cannot explain. You should know where the money goes, what is working, and who is making the calls.
              </p>
              <p>
                I spent six years in optical retail and the lab. That experience taught me how the day to day work inside a business shapes trust, revenue, and repeat business.
              </p>
              <p>
                I keep my client list small on purpose. Your work does not get handed to a junior account manager. It stays with me.
              </p>
              <p>
                I do the research before I ask you to spend more. Then I build around how your business actually sells, books, and follows up.
              </p>
              <p>
                If we work together, you should end up clearer on your market, your numbers, and your next move.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            badge="What Matters"
            title="How I Work"
            description="The rules stay simple: learn first, build around your business, explain the numbers, and keep one person on the work."
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
            badge="Who I Help"
            title="Best Fit"
            description="FrameScale is built for owners who need clear thinking, clear reporting, and work that fits the way they actually operate."
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
              Built For Accountability
            </h2>
            <p
              className="font-body text-lg leading-relaxed mb-8"
              style={{ color: "var(--brand-neutral)", maxWidth: "none" }}
            >
              FrameScale Inc is the company behind the work. Contracts, billing, and delivery stay straightforward so you always know who you hired and who is responsible.
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
              Talk It Through
            </h2>
            <p className="font-body text-xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto">
              Bring the questions you already have. I will tell you plainly whether I am the right fit and what the next step should be.
            </p>
            <Button variant="secondary" size="lg" href={site.bookingPath}>
              Schedule Intro Call
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
