"use client";

import { motion } from "motion/react";
import { Target, Code, BarChart3, Users, type LucideIcon } from "lucide-react";
import { PAGE_SHELL_INDUSTRY } from "@/lib/page-layout";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

export const WhyFrameScaleSection = () => (
  <section className="relative py-20 lg:py-32 bg-muted">
    <div className={PAGE_SHELL_INDUSTRY}>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div variants={slideInFromLeft} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="font-headline text-4xl lg:text-5xl mb-6" style={{ color: "var(--brand-deep)" }}>
            Complex Problems. Clear Solutions.
          </h2>
          <p
            className="font-body text-lg leading-relaxed mb-6"
            style={{ color: "var(--brand-neutral)", maxWidth: "none" }}
          >
            Most business owners have worked with an agency and walked away still not knowing where their money went or what actually moved the needle.
          </p>
          <p
            className="font-body text-lg leading-relaxed"
            style={{ color: "var(--brand-neutral)", maxWidth: "none" }}
          >
            At FrameScale we make sure that never happens. You have full visibility into every decision, every dollar, and every result from the day we start working together.
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
              <h3 className="font-headline text-2xl mb-3">What Makes This Different</h3>
              <p className="font-body text-white/90 leading-relaxed" style={{ maxWidth: "none" }}>
                You should always know what is happening with your marketing. I keep you informed at every stage so nothing ever feels like a black box.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <ValuePoint text="You work with me directly, on a short client roster" icon={Users} />
            <ValuePoint text="You see the research before I spend anything" icon={Target} />
            <ValuePoint text="Your website is built around your business not pulled from a template" icon={Code} />
            <ValuePoint text="Your SEO, Google Business Profile, and analytics are tracked and explained in plain language" icon={BarChart3} />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const ValuePoint = ({ text, icon: Icon }: { text: string; icon: LucideIcon }) => (
  <div className="flex items-center gap-3">
    <Icon className="w-5 h-5 text-(--brand-secondary)" />
    <span className="font-body text-white/90">{text}</span>
  </div>
);
