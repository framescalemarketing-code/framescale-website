"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { slideUp } from "@/lib/motion";

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
    ? "text-[clamp(1.35rem,1.9vw,2rem)]"
    : "text-5xl lg:text-6xl";

  return (
    <motion.div
      ref={ref}
      variants={slideUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="bg-white rounded-2xl border border-border hover:border-(--brand-primary)/60 transition-all duration-300 text-center group depth-card-soft h-full min-h-[11rem] px-6 py-5 flex flex-col justify-center"
    >
      <motion.div
        className={`font-headline ${valueSize} min-h-[2.6rem] mb-4 leading-none bg-linear-to-r from-(--brand-primary) to-(--brand-secondary) bg-clip-text text-transparent tracking-tight flex items-center justify-center whitespace-nowrap px-1`}
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: index * 0.08 + 0.15, duration: 0.55 }}
      >
        {value}
        {suffix && <span className="text-3xl">{suffix}</span>}
      </motion.div>
      <div
        className="font-ui text-[11px] font-semibold uppercase tracking-[0.18em] min-h-[2.2rem] max-w-[16rem] mx-auto flex items-start justify-center"
        style={{ color: "var(--brand-neutral)" }}
      >
        {label}
      </div>
    </motion.div>
  );
};
