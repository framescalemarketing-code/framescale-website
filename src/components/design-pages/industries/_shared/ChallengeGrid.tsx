"use client";

import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/design/SectionHeader";
import type { IndustryChallenge, IndustrySectionHeader } from "@/lib/industry-content/types";
import { PAGE_SHELL_INDUSTRY } from "@/lib/page-layout";
import { slideByIndex } from "@/lib/motion";

type ChallengeGridProps = {
  header: IndustrySectionHeader;
  items: IndustryChallenge[];
};

export const ChallengeGrid = ({ header, items }: ChallengeGridProps) => (
  <section className="relative py-20 bg-muted">
    <div className={PAGE_SHELL_INDUSTRY}>
      <SectionHeader badge={header.badge} title={header.title} description={header.description} />

      <div className="grid md:grid-cols-2 gap-6">
        {items.map((challenge, index) => (
          <motion.div
            key={challenge.title}
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
                <h3 className="font-headline text-xl mb-3" style={{ color: "var(--brand-deep)" }}>
                  {challenge.title}
                </h3>
                <p
                  className="font-body text-sm lg:text-base leading-relaxed max-w-prose"
                  style={{ color: "var(--brand-neutral)" }}
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
);
