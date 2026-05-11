"use client";

import { motion } from "motion/react";
import { CheckCircle2, Users, Zap, TrendingUp } from "lucide-react";

export const TrustStrip = () => {
  const trustPoints = [
    { icon: CheckCircle2, text: "Optical industry background" },
    { icon: Users, text: "Built for small-mid size practices" },
    { icon: Zap, text: "Full-stack execution (strategy + tech)" },
    { icon: TrendingUp, text: "Clear 4-step process" },
  ];

  return (
    <div className="border-y border-border bg-linear-to-r from-(--brand-primary)/5 via-white to-(--brand-secondary)/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3"
            >
              <point.icon
                className="w-5 h-5 shrink-0"
                style={{ color: "var(--brand-primary)" }}
              />
              <span className="font-ui text-sm text-(--brand-deep)">
                {point.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
