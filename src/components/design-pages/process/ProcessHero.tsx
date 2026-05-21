"use client";

import { motion } from "motion/react";
import { PageBackLink } from "@/components/design/PageBackLink";
import { processSteps } from "@/lib/process-content";
import { PAGE_SHELL_INDUSTRY } from "@/lib/page-layout";
import { slideUp } from "@/lib/motion";

export const ProcessHero = () => (
  <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-linear-to-br from-white via-(--brand-secondary)/5 to-white pt-32 pb-20">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-20 right-10 w-96 h-96 bg-linear-to-br from-(--brand-primary)/10 to-(--brand-secondary)/10 rounded-full blur-3xl" />
    </div>

    <PageBackLink className="absolute top-24 left-6 z-20 lg:top-28 lg:left-8" />

    <div className={`${PAGE_SHELL_INDUSTRY} relative z-10`}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.div variants={slideUp} initial="hidden" animate="show">
          <span className="inline-block px-3 py-1.5 rounded-full bg-linear-to-r from-(--brand-primary)/10 to-(--brand-secondary)/10 border border-(--brand-primary)/20 font-ui text-xs font-semibold uppercase tracking-wide text-(--brand-primary) mb-6">
            Our Process
          </span>
          <h1
            className="font-headline text-5xl lg:text-6xl mb-6 leading-tight"
            style={{ color: "var(--brand-deep)" }}
          >
            How We Work
          </h1>
          <p
            className="font-body text-xl lg:text-2xl mb-8 leading-relaxed"
            style={{ color: "var(--brand-neutral)", maxWidth: "none" }}
          >
            We start with research, build around your business, and keep you informed as the work moves. You always know what we are doing and why.
          </p>
        </motion.div>
      </div>

      <motion.div
        variants={slideUp}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-20 max-w-5xl mx-auto"
      >
        <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-2">
          <div className="hidden md:block absolute left-[6%] right-[6%] top-7 h-0.5 bg-linear-to-r from-(--brand-secondary) via-(--brand-primary) to-(--brand-deep) opacity-40" />
          {processSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-white border border-(--brand-primary)/30 shadow-[0_8px_24px_-12px_rgba(23,120,142,0.35)] flex items-center justify-center mb-4 relative z-10">
                  <Icon className="w-6 h-6 text-(--brand-primary)" />
                </div>
                <div className="font-ui text-[10px] font-semibold tracking-[0.18em] uppercase text-(--brand-secondary) mb-1">
                  Phase {step.number}
                </div>
                <div className="font-headline text-sm md:text-base text-(--brand-deep) leading-tight">{step.title}</div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  </section>
);
