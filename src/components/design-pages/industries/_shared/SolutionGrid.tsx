"use client";

import { motion } from "motion/react";
import { SectionHeader } from "@/components/design/SectionHeader";
import { iconTileGradient } from "@/lib/industry-content/gradients";
import type { IndustryIconGradient, IndustrySectionHeader, IndustrySolution } from "@/lib/industry-content/types";
import { PAGE_SHELL_INDUSTRY } from "@/lib/page-layout";
import { slideByIndex } from "@/lib/motion";

type SolutionGridProps = {
  header: IndustrySectionHeader;
  items: IndustrySolution[];
  iconGradient: IndustryIconGradient;
};

export const SolutionGrid = ({ header, items, iconGradient }: SolutionGridProps) => {
  const tileGradient = iconTileGradient(iconGradient);

  return (
    <section className="relative py-20 bg-white">
      <div className={PAGE_SHELL_INDUSTRY}>
        <SectionHeader badge={header.badge} title={header.title} description={header.description} />

        <div className="grid lg:grid-cols-3 gap-8">
          {items.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={solution.title}
                variants={slideByIndex(index)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-border hover:border-(--brand-primary) transition-all duration-300 hover:shadow-lg"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-linear-to-br ${tileGradient} flex items-center justify-center mb-6`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-headline text-xl mb-6" style={{ color: "var(--brand-deep)" }}>
                  {solution.title}
                </h3>
                <ul className="space-y-3">
                  {solution.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                        style={{ backgroundColor: "var(--brand-primary)" }}
                      />
                      <span className="font-body text-base" style={{ color: "var(--brand-neutral)" }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
