"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/design/SectionHeader";
import { homeIndustries } from "@/lib/home-content";
import type { HomeIndustryCard } from "@/lib/home-content";
import { PAGE_SHELL_INDUSTRY } from "@/lib/page-layout";
import { slideByIndex } from "@/lib/motion";

export const IndustriesSection = () => (
  <section id="industries" className="relative py-20 lg:py-32 bg-white">
    <div className={PAGE_SHELL_INDUSTRY}>
      <SectionHeader
        badge="Choose Your Industry"
        title="Start Where You Already Compete"
        description="Every business is different. Pick the category that fits yours and we will tailor the solution specifically to you."
      />

      <div className="grid md:grid-cols-3 gap-8">
        <motion.div
          className="contents"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.12 } },
          }}
        >
          {homeIndustries.map((industry, index) => (
            <IndustryCard key={industry.path} {...industry} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

const IndustryCard = ({
  name,
  icon: Icon,
  description,
  examples,
  path,
  color,
  index,
}: HomeIndustryCard & { index: number }) => (
  <Link href={path}>
    <motion.div
      variants={slideByIndex(index)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl p-8 border border-border hover:border-(--brand-primary) transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer group h-full flex flex-col"
    >
      <div
        className={`w-16 h-16 rounded-xl bg-linear-to-br ${color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="font-headline text-2xl mb-4" style={{ color: "var(--brand-deep)" }}>
        {name}
      </h3>
      <p className="font-body mb-4 leading-relaxed flex-1" style={{ color: "var(--brand-neutral)", maxWidth: "none" }}>
        {description}
      </p>
      <p className="font-ui text-sm text-(--brand-primary) mb-6">{examples}</p>
      <div className="flex items-center gap-2 text-(--brand-primary) group-hover:gap-3 transition-all">
        <span className="font-ui text-sm font-semibold">Explore Solutions</span>
        <ArrowRight className="w-4 h-4" />
      </div>
    </motion.div>
  </Link>
);
