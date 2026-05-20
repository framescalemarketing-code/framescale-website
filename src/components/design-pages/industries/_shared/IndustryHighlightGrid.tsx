"use client";

import { motion } from "motion/react";
import { SectionHeader } from "@/components/design/SectionHeader";
import { iconTileGradient } from "@/lib/industry-content/gradients";
import type { IndustryHighlight, IndustryIconGradient, IndustrySectionHeader } from "@/lib/industry-content/types";
import { PAGE_SHELL_INDUSTRY } from "@/lib/page-layout";
import { slideByIndex } from "@/lib/motion";

type IndustryHighlightGridProps = {
  header: IndustrySectionHeader;
  items: IndustryHighlight[];
  iconGradient: IndustryIconGradient;
};

export const IndustryHighlightGrid = ({ header, items, iconGradient }: IndustryHighlightGridProps) => {
  const tileGradient = iconTileGradient(iconGradient);

  return (
    <section className="relative py-20 bg-white">
      <div className={PAGE_SHELL_INDUSTRY}>
        <SectionHeader badge={header.badge} title={header.title} description={header.description} />

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
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
                <h3 className="font-headline text-xl mb-3" style={{ color: "var(--brand-deep)" }}>
                  {item.label}
                </h3>
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: "var(--brand-neutral)", maxWidth: "none" }}
                >
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
