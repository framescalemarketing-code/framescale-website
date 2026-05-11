"use client";

import { motion } from "motion/react";
import { LucideIcon, ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  outcomes: string[];
  icon: LucideIcon;
  index: number;
}

export const ServiceCard = ({
  title,
  description,
  outcomes,
  icon: Icon,
  index,
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl p-8 border border-border hover:border-(--brand-primary) transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer group h-full flex flex-col"
    >
      <div className="flex-1">
        <div className="w-14 h-14 rounded-xl bg-linear-to-br from-(--brand-primary) to-(--brand-secondary) flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-7 h-7 text-white" />
        </div>
        <h3
          className="font-headline text-2xl mb-4"
          style={{ color: "var(--brand-deep)" }}
        >
          {title}
        </h3>
        <p
          className="font-body mb-6 leading-relaxed"
          style={{ color: "var(--brand-neutral)", maxWidth: "none" }}
        >
          {description}
        </p>
        <div className="space-y-2">
          {outcomes.map((outcome, i) => (
            <div key={i} className="flex items-start gap-2">
              <ArrowRight
                className="w-4 h-4 mt-1 shrink-0"
                style={{ color: "var(--brand-primary)" }}
              />
              <span
                className="font-body text-sm"
                style={{ color: "var(--brand-deep)" }}
              >
                {outcome}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 pt-6 border-t border-border">
        <span
          className="font-ui text-sm font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all"
          style={{ color: "var(--brand-primary)" }}
        >
          Learn More
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </motion.div>
  );
};
