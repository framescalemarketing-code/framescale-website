"use client";

import { motion } from "motion/react";
import { LucideIcon, ArrowRight } from "lucide-react";
import { slideByIndex } from "@/lib/motion";

interface ApproachCardProps {
  title: string;
  challenge: string;
  approach: string;
  outcomes: string[];
  icon: LucideIcon;
  index: number;
}

export const ApproachCard = ({
  title,
  challenge,
  approach,
  outcomes,
  icon: Icon,
  index,
}: ApproachCardProps) => {
  return (
    <motion.div
      variants={slideByIndex(index)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-linear-to-br from-(--brand-deep) to-[#1A3A44] rounded-2xl p-8 lg:p-10 text-white border border-white/10 hover:border-(--brand-secondary)/50 depth-card-dark transition-all duration-300 group cursor-pointer"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <Icon className="w-6 h-6 text-(--brand-secondary)" />
          </div>
          <h3 className="font-headline text-2xl">{title}</h3>
        </div>
        <ArrowRight className="w-6 h-6 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
      </div>

      <div className="mb-6">
        <div className="font-ui text-xs uppercase tracking-wider text-(--brand-secondary) mb-2">
          Challenge
        </div>
        <p className="font-body text-white/80 leading-relaxed" style={{ maxWidth: "none" }}>
          {challenge}
        </p>
      </div>

      <div className="mb-6">
        <div className="font-ui text-xs uppercase tracking-wider text-(--brand-secondary) mb-2">
          Our Approach
        </div>
        <p className="font-body text-white/80 leading-relaxed" style={{ maxWidth: "none" }}>
          {approach}
        </p>
      </div>

      <div>
        <div className="font-ui text-xs uppercase tracking-wider text-(--brand-secondary) mb-3">
          Expected Outcomes
        </div>
        <div className="space-y-2">
          {outcomes.map((outcome, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-(--brand-secondary)"></div>
              <span className="font-body text-sm text-white/90">{outcome}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
