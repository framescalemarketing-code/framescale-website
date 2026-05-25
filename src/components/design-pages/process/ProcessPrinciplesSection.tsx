"use client";

import { motion } from "motion/react";
import { SectionHeader } from "@/components/design/SectionHeader";
import { processPrinciples } from "@/lib/process-content";
import { PAGE_SHELL_INDUSTRY } from "@/lib/page-layout";
import { slideByIndex } from "@/lib/motion";

export const ProcessPrinciplesSection = () => (
  <section className="relative py-20 bg-muted">
    <div className={PAGE_SHELL_INDUSTRY}>
      <SectionHeader
        badge="Working Standards"
        title="Our Decisions Come With Reason"
        description="Each recommendation ties back to the market, the buyer, the business goal, and the systems needed to execute and measure the work properly."
      />

      <div className="grid md:grid-cols-2 gap-8">
        {processPrinciples.map((principle, index) => (
          <motion.div
            key={principle.title}
            variants={slideByIndex(index)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl p-8 border border-border"
          >
            <h3 className="font-headline text-xl mb-3" style={{ color: "var(--brand-deep)" }}>
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
);
