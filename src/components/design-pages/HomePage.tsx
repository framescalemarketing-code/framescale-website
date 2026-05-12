"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Link from "next/link";
import { Button } from "../design/Button";
import { SectionHeader } from "../design/SectionHeader";
import { MetricCard } from "../design/MetricCard";
import { slideByIndex, slideInFromLeft, slideInFromRight, slideUp } from "@/lib/motion";
import {
  Heart,
  ShoppingBag,
  Scale,
  Building2,
  ArrowRight,
  Target,
  Code,
  BarChart3,
  Users,
  type LucideIcon,
} from "lucide-react";

export const HomePage = () => {
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const shapeY1 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const shapeY2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const shapeOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  const industries = [
    {
      name: "Healthcare",
      icon: Heart,
      description: "Medical practices, optical retail, dental, specialty clinics",
      examples: "Optical practices, medical offices, dental clinics",
      path: "/industries/healthcare",
      color: "from-(--brand-primary) to-(--brand-secondary)",
    },
    {
      name: "Retail & E-commerce",
      icon: ShoppingBag,
      description: "Product retail, stores, online commerce, consumer brands",
      examples: "Retail stores, e-commerce brands, consumer products",
      path: "/industries/retail",
      color: "from-(--brand-secondary) to-(--brand-primary)",
    },
    {
      name: "Professional Services",
      icon: Scale,
      description: "Legal, accounting, consulting, B2B services",
      examples: "Law firms, accounting practices, consultancies",
      path: "/industries/professional-services",
      color: "from-(--brand-deep) to-(--brand-primary)",
    },
  ];

  const capabilities = [
    { value: "Multi-Industry", label: "Experience" },
    { value: "Full-Stack", label: "Execution" },
    { value: "Small-Mid", label: "Business Focus" },
    { value: "Scalable", label: "Growth Systems" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-linear-to-br from-white via-(--brand-secondary)/5 to-white pt-20">
        <motion.div style={{ opacity: shapeOpacity }} className="absolute inset-0 pointer-events-none">
          <motion.div
            style={{ y: shapeY1 }}
            className="absolute top-20 right-10 w-96 h-96 bg-linear-to-br from-(--brand-primary)/10 to-(--brand-secondary)/10 rounded-full blur-3xl"
          />
          <motion.div
            style={{ y: shapeY2 }}
            className="absolute bottom-20 left-10 w-96 h-96 bg-linear-to-br from-(--brand-secondary)/10 to-(--brand-primary)/10 rounded-full blur-3xl"
          />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              variants={slideUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.15 }}
              className="mb-6"
            >
              <span className="inline-block px-3 py-1.5 rounded-full bg-linear-to-r from-(--brand-primary)/10 to-(--brand-secondary)/10 border border-(--brand-primary)/20 font-ui text-xs font-semibold uppercase tracking-wide text-(--brand-primary)">
                Full-Stack Growth Marketing
              </span>
            </motion.div>

            <motion.h1
              variants={slideUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.24 }}
              className="font-headline text-5xl lg:text-7xl mb-6 leading-tight"
              style={{ color: "var(--brand-deep)" }}
            >
              Marketing that
              <br />
              <span className="bg-linear-to-r from-(--brand-primary) to-(--brand-secondary) bg-clip-text text-transparent">
                drives growth
              </span>
            </motion.h1>

            <motion.p
              variants={slideUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.34 }}
              className="font-body text-xl lg:text-2xl mb-12 leading-relaxed text-(--brand-neutral)"
              style={{ maxWidth: "none" }}
            >
              Strategy and execution for small to mid-size businesses across healthcare, retail, and professional services. One integrated team, shipped systems, measurable growth.
            </motion.p>

            <motion.div
              variants={slideUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.44 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <Button size="lg" href="#industries">
                Choose Your Industry
              </Button>
              <Button size="lg" variant="ghost" href="/process">
                See Our Process
              </Button>
            </motion.div>

            <motion.div
              variants={slideUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.56 }}
              className="flex flex-wrap justify-center gap-8 text-left"
            >
              <div>
                <div className="font-headline text-3xl text-(--brand-primary)">
                  4-Step
                </div>
                <div className="font-ui text-sm text-(--brand-neutral)">
                  Clear Framework
                </div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div>
                <div className="font-headline text-3xl text-(--brand-primary)">
                  3 Industries
                </div>
                <div className="font-ui text-sm text-(--brand-neutral)">
                  Proven Experience
                </div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div>
                <div className="font-headline text-3xl text-(--brand-primary)">
                  Full-Stack
                </div>
                <div className="font-ui text-sm text-(--brand-neutral)">
                  Strategy to Code
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry Selection */}
      <section id="industries" className="relative py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            badge="Choose Your Industry"
            title="Tailored Solutions for Your Business"
            description="We understand that every industry has unique challenges. Select your industry to see how we can help you grow."
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
              {industries.map((industry, index) => (
                <IndustryCard key={index} {...industry} index={index} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why FrameScale */}
      <section className="relative py-20 lg:py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={slideInFromLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h2
                className="font-headline text-4xl lg:text-5xl mb-6"
                style={{ color: "var(--brand-deep)" }}
              >
                Most businesses struggle because strategy and execution live in different worlds
              </h2>
              <p
                className="font-body text-lg leading-relaxed mb-6"
                style={{ color: "var(--brand-neutral)", maxWidth: "none" }}
              >
                Marketing consultants give you strategy decks. Agencies execute tactics. But who connects the research to the positioning to the systems to the results?
              </p>
              <p
                className="font-body text-lg leading-relaxed"
                style={{ color: "var(--brand-neutral)", maxWidth: "none" }}
              >
                You end up with brilliant strategy that never ships, or execution that ignores the fundamentals. Neither drives growth.
              </p>
            </motion.div>

            <motion.div
              variants={slideInFromRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-linear-to-br from-(--brand-primary) to-(--brand-deep) rounded-3xl p-10 text-white"
            >
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-headline text-2xl mb-3">
                    The FrameScale Inc Difference
                  </h3>
                  <p className="font-body text-white/90 leading-relaxed" style={{ maxWidth: "none" }}>
                    We combine strategic marketing thinking with full-stack technical execution. One team, one process, zero handoff friction.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <ValuePoint text="Industry-specific experience" icon={Building2} />
                <ValuePoint text="Research-driven strategy" icon={Target} />
                <ValuePoint text="Full-stack technical execution" icon={Code} />
                <ValuePoint text="Continuous measurement & optimization" icon={BarChart3} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="relative py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            badge="What We Deliver"
            title="Full-Stack Growth Marketing"
            description="From strategy to implementation, we handle everything needed to scale your business."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {capabilities.map((capability, index) => (
              <MetricCard key={index} {...capability} index={index} />
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <CapabilityBlock
              icon={Target}
              title="Strategic Foundation"
              items={[
                "Market & competitive research",
                "Customer development & personas",
                "Positioning & messaging strategy",
                "Growth roadmap planning",
                "Success metrics definition",
              ]}
            />
            <CapabilityBlock
              icon={Code}
              title="Technical Execution"
              items={[
                "Modern website development",
                "Marketing automation systems",
                "CRM & email integration",
                "Analytics implementation",
                "Conversion optimization",
              ]}
            />
            <CapabilityBlock
              icon={Users}
              title="Customer Acquisition"
              items={[
                "SEO & content marketing",
                "Paid advertising (Google, social)",
                "Email marketing campaigns",
                "Social media strategy",
                "Review & reputation management",
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 lg:py-32 bg-linear-to-br from-(--brand-primary) to-(--brand-deep) text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="font-headline text-4xl lg:text-6xl mb-6">
              Ready to scale your business?
            </h2>
            <p className="font-body text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto">
              Let&apos;s discuss your growth goals and how our full-stack approach can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" href="/contact">
                Schedule Discovery Call
              </Button>
              <Button
                variant="ghost"
                size="lg"
                href="/process"
                className="text-white bg-white/10 hover:bg-white/20 border-white/20"
              >
                Learn About Our Process
              </Button>
            </div>
            <p className="font-body text-sm text-white/60 mt-8">
              Free 30-minute consultation. Bring your goals, leave with a plan.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

interface IndustryCardProps {
  name: string;
  icon: LucideIcon;
  description: string;
  examples: string;
  path: string;
  color: string;
  index: number;
}

const IndustryCard = ({
  name,
  icon: Icon,
  description,
  examples,
  path,
  color,
  index,
}: IndustryCardProps) => {
  return (
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
        <div className={`w-16 h-16 rounded-xl bg-linear-to-br ${color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3
          className="font-headline text-2xl mb-4"
          style={{ color: "var(--brand-deep)" }}
        >
          {name}
        </h3>
        <p
          className="font-body mb-4 leading-relaxed"
          style={{ color: "var(--brand-neutral)", maxWidth: "none" }}
        >
          {description}
        </p>
        <p className="font-ui text-sm text-(--brand-primary) mb-6 flex-1">
          {examples}
        </p>
        <div className="flex items-center gap-2 text-(--brand-primary) group-hover:gap-3 transition-all">
          <span className="font-ui text-sm font-semibold">
            Explore Solutions
          </span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </motion.div>
    </Link>
  );
};

interface ValuePointProps {
  text: string;
  icon: LucideIcon;
}

const ValuePoint = ({ text, icon: Icon }: ValuePointProps) => (
  <div className="flex items-center gap-3">
    <Icon className="w-5 h-5 text-(--brand-secondary)" />
    <span className="font-body text-white/90">{text}</span>
  </div>
);

interface CapabilityBlockProps {
  icon: LucideIcon;
  title: string;
  items: string[];
}

const CapabilityBlock = ({ icon: Icon, title, items }: CapabilityBlockProps) => (
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
    <h3
      className="font-headline text-xl mb-6"
      style={{ color: "var(--brand-deep)" }}
    >
      {title}
    </h3>
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <div
            className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
            style={{ backgroundColor: "var(--brand-primary)" }}
          ></div>
          <span className="font-body text-sm" style={{ color: "var(--brand-neutral)" }}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  </motion.div>
);
