"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface MetricCardProps {
  value: string;
  label: string;
  suffix?: string;
  index: number;
}

export const MetricCard = ({ value, label, suffix = "", index }: MetricCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  // If value is non-numeric (contains letters / dashes), use a tighter sizing
  const isTextual = /[A-Za-z]/.test(value);
  const valueSize = isTextual
    ? "text-[clamp(1.5rem,2.4vw,2.25rem)]"
    : "text-5xl lg:text-6xl";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="bg-white rounded-2xl p-7 border border-border hover:border-(--brand-primary)/60 transition-all duration-300 text-center group hover:shadow-[0_24px_48px_-24px_rgba(38,70,83,0.18)]"
    >
      <motion.div
        className={`font-headline ${valueSize} mb-3 leading-[1.05] bg-linear-to-r from-(--brand-primary) to-(--brand-secondary) bg-clip-text text-transparent wrap-break-word tracking-tight`}
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: index * 0.08 + 0.15, duration: 0.55 }}
      >
        {value}
        {suffix && <span className="text-3xl">{suffix}</span>}
      </motion.div>
      <div
        className="font-ui text-[11px] font-semibold uppercase tracking-[0.18em]"
        style={{ color: "var(--brand-neutral)" }}
      >
        {label}
      </div>
    </motion.div>
  );
};
