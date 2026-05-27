"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { PageBackLink } from "../design/PageBackLink";
import { slideByIndex, slideInFromLeft, slideUp } from "@/lib/motion";
import {
  Factory,
  TrendingUp,
  GraduationCap,
  BarChart3,
  Handshake,
} from "lucide-react";

export const AboutPage = () => {
  const founderJourney = [
    {
      chapter: "Where I Started",
      icon: Factory,
      title: "Firsthand Experience",
      description:
        "My first job was with a corporate optical company, where I started in the manufacturing side of glasses before moving onto the retail floor. Over time, I worked my way into retail management, where I learned how to understand the customer experience, train associates, work with a team, and stay accountable to performance goals like KPIs and production requirements.",
    },
    {
      chapter: "What Happened",
      icon: TrendingUp,
      title: "Hitting a Ceiling",
      description:
        "Working across corporate, franchise, and small business environments helped me understand the limits of the path I was on. I could see the work ahead clearly, and I also knew the ceiling would come faster than the growth I wanted for myself. That realization pushed me to think bigger than a single store, region, or role.",
    },
    {
      chapter: "Where I Went",
      icon: GraduationCap,
      title: "Building the Foundation",
      description:
        "I chose to go back to school and build a stronger business foundation. I earned my bachelor's degree from the University of California, Riverside and later completed a master's degree in business administration with a concentration in marketing. For me, education was the path to a broader framework for strategy, data, analytics, and how businesses grow with more structure.",
    },
    {
      chapter: "Where I Am Now",
      icon: BarChart3,
      title: "Utilizing My Experience and Education",
      description:
        "After building my education and applying the personal, technical, and transferable skills I gained in the industry, I started to see the difference between running a business and scaling one. Many businesses already have strong pieces in place. The opportunity is often in organizing the message, systems, data, and customer experience into a clearer growth framework.",
    },
  ];

  const personalApproach = [
    "You get someone who understands both customer-facing work and back-end operations.",
    "You get business, marketing, and analytics thinking in the same conversation.",
    "You work directly with me, so context and accountability stay close.",
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
                My name is Jonathan, and I am a master's graduate in business administration with a concentration in marketing. I created FrameScale Inc to help small and mid-size businesses build stronger growth systems through research, strategy, customized systems, and better visibility for the next stage.
              </p>
            </div>

            <div className="lg:pl-4">
              <div
                className="relative mx-auto w-full max-w-md overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.14)]"
                style={{ aspectRatio: "4 / 5" }}
              >
                <Image
                  src="/photos/founder/jonathan-about.jpg"
                  alt="Jonathan, founder of FrameScale"
                  fill
                  priority
                  sizes="(min-width: 1024px) 32rem, 100vw"
                  className="object-cover object-[center_18%]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start">
            <motion.div
              variants={slideInFromLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="lg:sticky lg:top-28"
            >
              <span className="inline-block px-3 py-1.5 rounded-full bg-linear-to-r from-(--brand-primary)/10 to-(--brand-secondary)/10 border border-(--brand-primary)/20 font-ui text-xs font-semibold uppercase tracking-wide text-(--brand-primary) mb-6">
                How I Got Here
              </span>
              <h2
                className="font-headline text-3xl lg:text-4xl mb-6"
                style={{ color: "var(--brand-deep)" }}
              >
                The Path I Chose
              </h2>
              <p
                className="font-body text-lg leading-relaxed mb-6"
                style={{ color: "var(--brand-neutral)" }}
              >
                I chose business because I wanted to use my experience, education, and personal strengths to help people build with more structure. Many owners start with skill, ambition, and a strong idea. The right foundation helps turn that effort into a business that can grow with more clarity.
              </p>
              <p
                className="font-body text-lg leading-relaxed"
                style={{ color: "var(--brand-neutral)" }}
              >
                Working inside a corporate company and across franchise environments showed me how quickly growth can create complexity. Strong businesses need a clear framework: a way to understand the market, organize the systems, measure progress, and make better decisions as they scale.
              </p>

              <div className="mt-8 rounded-3xl border border-border bg-linear-to-br from-(--brand-primary)/6 via-white to-(--brand-secondary)/8 p-8">
                <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-(--brand-primary) to-(--brand-secondary) flex items-center justify-center mb-5">
                  <Handshake className="w-6 h-6 text-white" />
                </div>
                <h3
                  className="font-headline text-2xl mb-4"
                  style={{ color: "var(--brand-deep)" }}
                >
                  Working With Me
                </h3>
                <div className="space-y-4">
                  {personalApproach.map((point, index) => (
                    <div key={index} className="flex gap-3 items-start">
                      <div className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-(--brand-primary)" />
                      <p
                        className="font-body leading-relaxed"
                        style={{ color: "var(--brand-neutral)", maxWidth: "none" }}
                      >
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="relative space-y-6">
              <div className="absolute left-6 top-10 bottom-10 hidden w-px bg-linear-to-b from-(--brand-primary)/30 via-(--brand-secondary)/25 to-transparent lg:block" />
              {founderJourney.map((item, index) => (
                <motion.div
                  key={item.chapter}
                  variants={slideByIndex(index)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="relative lg:pl-20"
                >
                  <div className="hidden lg:flex absolute left-0 top-8 w-12 h-12 rounded-2xl bg-linear-to-br from-(--brand-primary) to-(--brand-secondary) items-center justify-center shadow-md">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
                    <div className="flex items-center gap-4 mb-5">
                      <span className="font-ui text-xs font-semibold uppercase tracking-[0.24em] text-(--brand-primary)">
                        {item.chapter}
                      </span>
                      <div className="h-px flex-1 bg-(--brand-primary)/10" />
                    </div>
                    <div className="flex items-start gap-4 lg:hidden mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-(--brand-primary) to-(--brand-secondary) flex items-center justify-center shrink-0">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="pt-2 h-px flex-1 bg-(--brand-primary)/10" />
                    </div>
                    <h3
                      className="font-headline text-2xl mb-4"
                      style={{ color: "var(--brand-deep)" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="font-body text-lg leading-relaxed"
                      style={{ color: "var(--brand-neutral)", maxWidth: "none" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}

              <motion.div
                variants={slideUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="rounded-3xl bg-linear-to-br from-(--brand-deep) to-(--brand-primary) p-8 lg:p-10 text-white shadow-lg"
              >
                <span className="font-ui text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
                  What's Really Important
                </span>
                <h3 className="font-headline text-3xl mt-4 mb-4">
                  Growth Starts With Personal Growth
                </h3>
                <p className="font-body text-lg leading-relaxed text-white/90 max-w-none">
                  Understanding how you work, how your team operates, how your customers decide, and how your industry and competitors move is essential to understanding what the business needs next. I help bridge that gap by going through the process with you, turning scattered context into a clearer framework for growth, better decisions, and a stronger path to the next stage.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
