"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface Metric {
  value: string;
  label: string;
}

interface CaseStudyCardProps {
  client: string;
  industry: string;
  challenge: string;
  metrics: Metric[];
  index: number;
}

export const CaseStudyCard = ({
  client,
  industry,
  challenge,
  metrics,
  index,
}: CaseStudyCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-linear-to-br from-(--brand-deep) to-[#1A3A44] rounded-2xl p-8 lg:p-10 text-white border border-white/10 hover:border-(--brand-secondary)/50 depth-card-dark transition-all duration-300 group cursor-pointer"
    >
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm mb-4">
            <span className="font-ui text-xs uppercase tracking-wider text-(--brand-secondary)">
              {industry}
            </span>
          </div>
          <h3 className="font-headline text-3xl mb-2">{client}</h3>
        </div>
        <ArrowUpRight className="w-6 h-6 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
      </div>

      <p className="font-body text-white/80 mb-8 leading-relaxed" style={{ maxWidth: "none" }}>
        {challenge}
      </p>

      <div className="grid grid-cols-2 gap-6">
        {metrics.map((metric, i) => (
          <div key={i}>
            <div className="font-headline text-4xl mb-1 bg-linear-to-r from-white to-(--brand-secondary) bg-clip-text text-transparent">
              {metric.value}
            </div>
            <div className="font-ui text-sm text-white/70">{metric.label}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
