"use client";

import { motion } from "motion/react";
import { SectionHeader } from "@/components/design/SectionHeader";
import { MetricCard } from "@/components/design/MetricCard";
import { homeCapabilityBlocks, homeMetrics } from "@/lib/home-content";
import type { HomeCapabilityBlock } from "@/lib/home-content";
import { PAGE_SHELL_INDUSTRY } from "@/lib/page-layout";
import { slideUp } from "@/lib/motion";

export const CapabilitiesSection = () => (
  <section className="relative py-20 lg:py-32 bg-white">
    <div className={PAGE_SHELL_INDUSTRY}>
      <SectionHeader
        badge="What I Deliver"
        title="Everything Your Business Needs to Grow"
        description="From your website to your ad spend, every service I offer is connected to a clear strategy and a result you can actually see."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {homeMetrics.map((capability, index) => (
          <MetricCard key={capability.value} {...capability} index={index} />
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {homeCapabilityBlocks.map((block) => (
          <CapabilityBlock key={block.title} {...block} />
        ))}
      </div>
    </div>
  </section>
);

const CapabilityBlock = ({ icon: Icon, title, items }: HomeCapabilityBlock) => (
  <motion.div
    variants={slideUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="bg-white rounded-2xl p-8 border border-border hover:border-(--brand-primary) transition-all duration-300 hover:shadow-lg"
  >
    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-(--brand-primary) to-(--brand-secondary) flex items-center justify-center mb-6">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <h3 className="font-headline text-xl mb-6" style={{ color: "var(--brand-deep)" }}>
      {title}
    </h3>
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: "var(--brand-primary)" }} />
          <span className="font-body text-sm" style={{ color: "var(--brand-neutral)" }}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  </motion.div>
);
