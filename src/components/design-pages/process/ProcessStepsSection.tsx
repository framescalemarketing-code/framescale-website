"use client";

import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/design/SectionHeader";
import { processSteps } from "@/lib/process-content";
import { PAGE_SHELL_INDUSTRY } from "@/lib/page-layout";
import { slideByIndex } from "@/lib/motion";

export const ProcessStepsSection = () => (
  <section className="relative py-20 bg-white">
    <div className={PAGE_SHELL_INDUSTRY}>
      <SectionHeader
        badge="Five Phase Process"
        title="From Research To Measurable Growth"
        description="Each phase turns uncertainty into a clear decision. You see what we are learning, what we are building, and what should happen next."
      />

      <div className="space-y-24">
        {processSteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.number}
              variants={slideByIndex(index)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div className="lg:sticky lg:top-32">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-headline text-6xl lg:text-7xl text-(--brand-primary)/20">{step.number}</span>
                    <div className="w-16 h-16 rounded-xl bg-linear-to-br from-(--brand-primary) to-(--brand-secondary) flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h2 className="font-headline text-3xl lg:text-4xl mb-4" style={{ color: "var(--brand-deep)" }}>
                    {step.title}
                  </h2>
                  <p
                    className="font-body text-lg leading-relaxed"
                    style={{ color: "var(--brand-neutral)", maxWidth: "none" }}
                  >
                    {step.description}
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="bg-white rounded-2xl p-8 border border-border">
                    <h3 className="font-headline text-xl mb-4" style={{ color: "var(--brand-deep)" }}>
                      What We Do
                    </h3>
                    <ul className="space-y-3">
                      {step.activities.map((activity) => (
                        <li key={activity} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-(--brand-primary) shrink-0 mt-0.5" />
                          <span className="font-body text-sm" style={{ color: "var(--brand-neutral)" }}>
                            {activity}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-linear-to-br from-(--brand-primary)/5 to-(--brand-secondary)/5 rounded-2xl p-8 border border-(--brand-primary)/20">
                    <h3 className="font-headline text-xl mb-4" style={{ color: "var(--brand-deep)" }}>
                      What You Leave With
                    </h3>
                    <ul className="space-y-2">
                      {step.deliverables.map((deliverable) => (
                        <li key={deliverable} className="flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-(--brand-primary)" />
                          <span className="font-body text-sm font-medium" style={{ color: "var(--brand-deep)" }}>
                            {deliverable}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {index < processSteps.length - 1 && (
                <div className="flex justify-center my-16">
                  <div className="w-px h-16 bg-linear-to-b from-(--brand-primary) to-transparent" />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);
