"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Link from "next/link";
import { Button } from "../design/Button";
import { SectionHeader } from "../design/SectionHeader";
import { MetricCard } from "../design/MetricCard";
import { slideByIndex, slideInFromLeft, slideInFromRight, slideUp } from "@/lib/motion";
import { site } from "@/lib/site";
import {
  Heart,
  ShoppingBag,
  Scale,
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
      description:
        "Independent optical and multi-location eye care get the deepest work. Dental and specialty practices join when bookings and local reputation are the scoreboard.",
      examples: "Optical retail, OD-led practices, specialty clinics",
      path: "/industries/healthcare",
      color: "from-(--brand-primary) to-(--brand-secondary)",
    },
    {
      name: "Retail & E-commerce",
      icon: ShoppingBag,
      description: "Physical retail, DTC, and hybrid brands where margin, demand, and attribution have to move together.",
      examples: "Stores, online brands, omnichannel operators",
      path: "/industries/retail",
      color: "from-(--brand-secondary) to-(--brand-primary)",
    },
    {
      name: "Professional Services",
      icon: Scale,
      description: "Consultants and advisory firms lead. Law, CPA, and finance practices fit when pipeline quality matters more than lead volume.",
      examples: "Strategy consultants, fractional leaders, partner-led firms",
      path: "/industries/professional-services",
      color: "from-(--brand-deep) to-(--brand-primary)",
    },
  ];

  const capabilities = [
    { value: "Research First", label: "Homework before ad spend" },
    { value: "Custom Build", label: "Your business, not a template rental" },
    { value: "Direct Access", label: "Same principal from spark to launch" },
    { value: "Selective Roster", label: "Few seats so the work stays deep" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-linear-to-br from-white via-(--brand-secondary)/5 to-white pt-12 lg:pt-14">
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

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-14 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              variants={slideUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.15 }}
              className="mb-6"
            >
              <span className="inline-block px-3 py-1.5 rounded-full bg-linear-to-r from-(--brand-primary)/10 to-(--brand-secondary)/10 border border-(--brand-primary)/20 font-ui text-xs font-semibold uppercase tracking-wide text-(--brand-primary)">
                Guided Growth Marketing
              </span>
            </motion.div>

            <motion.h1
              variants={slideUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.24 }}
              className="font-headline text-5xl lg:text-6xl mb-6 leading-tight"
              style={{ color: "var(--brand-deep)" }}
            >
              Marketing that
              <br />
              <span className="bg-linear-to-r from-(--brand-primary) to-(--brand-secondary) bg-clip-text text-transparent">
                teaches you to scale
              </span>
            </motion.h1>

            <motion.p
              variants={slideUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.34 }}
              className="font-body text-xl lg:text-2xl mb-10 leading-relaxed text-(--brand-neutral) max-w-3xl mx-auto"
            >
              Research before spend. Custom sites, not WordPress or Wix rentals. SEO, Google Business Profile, analytics, and paid media you can read and act on. One principal from first call through launch, on a roster kept small on purpose.
            </motion.p>

            <motion.div
              variants={slideUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.44 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
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
                  Five phases
                </div>
                <div className="font-ui text-sm text-(--brand-neutral)">
                  End-to-end process
                </div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div>
                <div className="font-headline text-3xl text-(--brand-primary)">
                  3 Industries
                </div>
                <div className="font-ui text-sm text-(--brand-neutral)">
                  Core sectors
                </div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div>
                <div className="font-headline text-3xl text-(--brand-primary)">
                  Custom build
                </div>
                <div className="font-ui text-sm text-(--brand-neutral)">
                  Strategy to launch
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
            title="Start Where You Already Compete"
            description="Optical-led healthcare, margin-aware retail, and consultant-first professional services each get a different playbook. Choose the lane that matches how you win customers today."
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
                Less Noise. More Clarity.
              </h2>
              <p
                className="font-body text-lg leading-relaxed mb-6"
                style={{ color: "var(--brand-neutral)", maxWidth: "none" }}
              >
                Most owners have seen smart strategy that never ships, or busy tactics that never tie back to how the business actually makes money. That pattern burns budget and trust.
              </p>
              <p
                className="font-body text-lg leading-relaxed"
                style={{ color: "var(--brand-neutral)", maxWidth: "none" }}
              >
                FrameScale stays intentionally small. Strategy, custom web, and campaigns stay on one thread with one lead, so growth is something you can see, question, and carry forward.
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
                    What Makes This Different
                  </h3>
                  <p className="font-body text-white/90 leading-relaxed" style={{ maxWidth: "none" }}>
                    {`You work with someone who holds a bachelor's and a master's in business, keeps concurrent clients low so you get depth, and will not ship campaigns until the homework says they are worth doing. Sites are built for you, not dragged out of a template library.`}
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <ValuePoint text="Direct access to the principal, not a rotating account bench" icon={Users} />
                <ValuePoint text="Research before spend. No guessing inside the ad platform" icon={Target} />
                <ValuePoint text="Custom marketing sites instead of WordPress or Wix shortcuts" icon={Code} />
                <ValuePoint text="SEO, Google Business Profile, analytics, and paid media with partner-level care" icon={BarChart3} />
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
            title="Strategy, Custom Web, and Channels That Earn Their Keep"
            description="Websites, SEO, Google Business Profile, analytics, and paid media held to the same bar as the strategy. This is not a social posting shop. It is growth work you can see, read, and learn from."
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
                "Market, competitor, and customer research",
                "Customer and journey clarity you can act on",
                "Positioning and messaging you can defend",
                "Growth roadmap with metrics you own",
              ]}
            />
            <CapabilityBlock
              icon={Code}
              title="Custom Technical Execution"
              items={[
                "Custom marketing websites instead of WordPress or Wix templates",
                "Funnels, forms, and integrations that match your ops",
                "Analytics and conversion tracking you can read",
                "CRO grounded in data instead of guesswork",
              ]}
            />
            <CapabilityBlock
              icon={Users}
              title="Demand & Visibility"
              items={[
                "SEO and content aligned to how buyers search",
                "Google Business Profile and local presence",
                "Paid search and paid social when the math works",
                "Email and nurture only when they fit the business",
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
              Growth Without the Black Box
            </h2>
            <p className="font-body text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto">
              {`If you want a marketing partner who does the homework first, gives you direct access, and teaches as you go, let's talk about fit.`}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" href={site.bookingPath}>
                Schedule intro call
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
              Free 30-minute intro call. I listen, ask direct questions, and leave you with an honest next step. If we are not the right fit, I will say so.
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
