"use client";

import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export const ProcessStep = ({
  number,
  title,
  description,
  icon: Icon,
  index,
}: ProcessStepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative group"
    >
      <div className="bg-white rounded-2xl p-8 border border-border hover:border-(--brand-primary) transition-all duration-300 hover:shadow-lg h-full">
        <div className="flex items-start gap-6">
          <div className="shrink-0">
            <div className="w-16 h-16 rounded-xl bg-linear-to-br from-(--brand-primary) to-(--brand-secondary) flex items-center justify-center shadow-md">
              <Icon className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-baseline gap-3 mb-3">
              <span
                className="font-ui text-sm font-semibold tracking-wider"
                style={{ color: "var(--brand-primary)" }}
              >
                {number}
              </span>
              <h3
                className="font-headline text-2xl"
                style={{ color: "var(--brand-deep)" }}
              >
                {title}
              </h3>
            </div>
            <p
              className="font-body leading-relaxed"
              style={{ color: "var(--brand-neutral)", maxWidth: "none" }}
            >
              {description}
            </p>
          </div>
        </div>
        <motion.div
          className="absolute inset-0 bg-linear-to-br from-(--brand-primary)/5 to-(--brand-secondary)/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        />
      </div>
    </motion.div>
  );
};
