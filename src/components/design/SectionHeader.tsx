"use client";

import { motion } from "motion/react";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export const SectionHeader = ({
  badge,
  title,
  description,
  align = "center",
}: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mb-16 ${align === "center" ? "text-center max-w-3xl mx-auto" : "text-left"}`}
    >
      {badge && (
        <div className={`mb-4 ${align === "center" ? "flex justify-center" : ""}`}>
          <span className="inline-block px-4 py-2 rounded-full bg-linear-to-r from-(--brand-primary)/10 to-(--brand-secondary)/10 border border-(--brand-primary)/20 font-ui text-sm font-semibold uppercase tracking-wider text-(--brand-primary)">
            {badge}
          </span>
        </div>
      )}
      <h2
        className="font-headline text-4xl lg:text-5xl mb-6"
        style={{ color: "var(--brand-deep)" }}
      >
        {title}
      </h2>
      {description && (
        <p
          className="font-body text-lg lg:text-xl leading-relaxed"
          style={{ color: "var(--brand-neutral)", maxWidth: align === "center" ? "none" : "65ch" }}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
};
