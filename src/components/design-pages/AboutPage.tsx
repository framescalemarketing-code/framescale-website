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
      title: "Research Comes First",
      description:
        "We start with the market, the buyer, and the alternatives so every recommendation has a reason behind it.",
    },
    {
      icon: Code,
      title: "Built For Scale",
      description:
        "The website, message, and plan should fit how your business actually sells, books, follows up, and grows.",
    },
    {
      icon: Users,
      title: "Connected Systems",
      description:
        "If the right website, tracking, dashboard, or workflow is missing, we build what is needed to support growth and measure it clearly.",
    },
    {
      icon: TrendingUp,
      title: "Clear Next Steps",
      description:
        "You should be able to see what is working, what needs to change, and what the next move should be without digging through scattered reports.",
    },
  ];

  const industries = [
    {
      icon: Heart,
      name: "Healthcare",
      description: "Practices that need stronger trust signals, clearer local visibility, and an easier path for patients to book.",
    },
    {
      icon: ShoppingBag,
      name: "Retail & E-commerce",
      description: "Stores and product brands that need better numbers, stronger systems, and a clearer path from traffic to profit.",
    },
    {
      icon: Scale,
      name: "Professional Services",
      description: "Firms that need clearer positioning, visible proof, and a better inbound system for the right clients.",
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
                FrameScale is built for owners who know how to run the business, but need a clearer way to scale it. I help turn strong businesses into stronger growth systems through research, strategy, websites, and tracking that support the next stage.
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
              Why I Built FrameScale
            </h2>
            <div className="space-y-6 font-body text-lg leading-relaxed" style={{ color: "var(--brand-neutral)" }}>
              <p>
                Many owners know their business well. Scaling it is a different challenge. Growth creates pressure around the message, the website, the systems, and the numbers behind the decisions.
              </p>
              <p>
                A lot of good businesses are already doing strong work, but the market does not always see that clearly. The website may be thin, the follow-up may be inconsistent, the reporting may feel scattered, or the strategy may not match how customers actually buy.
              </p>
              <p>
                That is where I come in. I help owners understand the market, clarify what makes them different, build the systems that support the plan, and track what is actually helping the business grow.
              </p>
              <p>
                I spent six years in optical retail and the lab. That experience taught me how the day to day reality inside a business shapes trust, revenue, repeat business, and the customer experience that growth depends on.
              </p>
              <p>
                I keep the client list small on purpose so the work stays close. You are not passed from strategy to design to reporting with pieces getting lost between people.
              </p>
              <p>
                If we work together, the goal is not just more marketing activity. The goal is a business that is easier to understand, easier to choose, and easier to scale with confidence.
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
            title="How I Help You Scale"
            description="The work stays grounded in research, shaped around your business, supported by connected systems, and measured in a way that helps you decide what comes next."
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
            title="Where It Fits Best"
            description="FrameScale works best for owners who already run a solid business and need a clearer path to growth, better systems, and more confidence in what to do next."
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
              FrameScale Inc is the company behind the work. Contracts, billing, delivery, and reporting stay straightforward so you know who is responsible, what is being built, and how decisions are being made.
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
              If the business runs well but growth still feels harder than it should, we can look at what is getting in the way and what the next step should be.
            </p>
            <Button variant="secondary" size="lg" href={site.bookingPath}>
              Schedule A Call
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
