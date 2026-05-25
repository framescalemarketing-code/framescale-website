"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Mail, Calendar, ArrowRight } from "lucide-react";
import { PageBackLink } from "../design/PageBackLink";
import { ContactForm } from "./contact/ContactForm";
import { createContactFormState, useContactForm } from "@/lib/contact/use-contact-form";
import { slideByIndex, slideInFromRight, slideUp } from "@/lib/motion";
import {
  PAGE_CONTACT_FORM_MAX,
  PAGE_HERO_INNER,
  PAGE_SHELL_CONTACT_INFO,
  PAGE_SHELL_FLUID,
  PAGE_SHELL_FLUID_RELATIVE_FULL,
} from "@/lib/page-layout";
import { site } from "@/lib/site";

type ContactPageProps = {
  turnstileSiteKey: string;
};

export const ContactPage = ({ turnstileSiteKey }: ContactPageProps) => {
  const searchParams = useSearchParams();
  const form = useContactForm(createContactFormState(searchParams), {
    requireTurnstile: Boolean(turnstileSiteKey),
  });

  const contactMethods = [
    {
      icon: Calendar,
      title: "Schedule a Call",
      description: "Pick a time and tell me where things feel unclear.",
      action: "Book a time",
      href: site.bookingPath,
    },
    {
      icon: Mail,
      title: "Send a Message",
      description: "Send the details here if you would rather start in writing.",
      action: "Start with email",
      href: "#contact-form",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-linear-to-br from-white via-(--brand-secondary)/5 to-white pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-96 h-96 bg-linear-to-br from-(--brand-primary)/10 to-(--brand-secondary)/10 rounded-full blur-3xl" />
        </div>

        <div className={PAGE_SHELL_FLUID_RELATIVE_FULL}>
          <div className={PAGE_HERO_INNER}>
            <motion.div variants={slideUp} initial="hidden" animate="show">
              <PageBackLink className="mb-6" />
              <span className="inline-block px-3 py-1.5 rounded-full bg-linear-to-r from-(--brand-primary)/10 to-(--brand-secondary)/10 border border-(--brand-primary)/20 font-ui text-xs font-semibold uppercase tracking-wide text-(--brand-primary) mb-6">
                Get in Touch
              </span>
              <h1
                className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[3.5rem] mb-4 sm:mb-6 leading-tight px-1"
                style={{ color: "var(--brand-deep)" }}
              >
                Talk It Through
              </h1>
              <p
                className="font-body text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 leading-relaxed max-w-2xl xl:max-w-3xl mx-auto px-1"
                style={{ color: "var(--brand-neutral)" }}
              >
                Book a free 30 minute call or send a note. I will ask direct questions and give you an honest next step.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20 bg-white">
        <div className={PAGE_SHELL_FLUID}>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 xl:gap-10 mb-16 sm:mb-20">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                variants={slideByIndex(index)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-linear-to-br from-(--brand-primary)/5 to-(--brand-secondary)/5 rounded-2xl p-6 sm:p-8 xl:p-10 border border-(--brand-primary)/20 h-full flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-(--brand-primary) to-(--brand-secondary) flex items-center justify-center mb-6">
                  <method.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-headline text-2xl mb-3" style={{ color: "var(--brand-deep)" }}>
                  {method.title}
                </h3>
                <p
                  className="font-body mb-6 leading-relaxed flex-1 max-w-none"
                  style={{ color: "var(--brand-neutral)" }}
                >
                  {method.description}
                </p>
                <Link
                  href={method.href}
                  className="inline-flex items-center gap-2 text-(--brand-primary) hover:gap-3 transition-all mt-auto pt-2"
                >
                  <span className="font-ui text-sm font-semibold">{method.action}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={slideInFromRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={PAGE_CONTACT_FORM_MAX}
          >
            <ContactForm form={form} turnstileSiteKey={turnstileSiteKey} />
          </motion.div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20 bg-muted">
        <div className={PAGE_SHELL_CONTACT_INFO}>
          <motion.div variants={slideUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h2 className="font-headline text-3xl mb-6" style={{ color: "var(--brand-deep)" }}>
              What Happens Next?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8 xl:gap-10 text-left max-w-5xl xl:max-w-none mx-auto">
              {[
                {
                  step: "1",
                  title: "I Read It",
                  body: "I look at what you shared and note the questions that matter most.",
                },
                {
                  step: "2",
                  title: "We Talk",
                  body: "The call is 30 minutes. We cover the business, the pressure points, and what you want clearer.",
                },
                {
                  step: "3",
                  title: "I Tell You",
                  body: "If I am not the right fit, I will say so.",
                },
                {
                  step: "4",
                  title: "You Decide",
                  body: "If it is a fit, you get a clear next step, timing, and scope.",
                },
              ].map((item) => (
                <div key={item.step}>
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-(--brand-primary) to-(--brand-secondary) flex items-center justify-center text-white font-headline text-lg mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-headline text-lg mb-2" style={{ color: "var(--brand-deep)" }}>
                    {item.title}
                  </h3>
                  <p
                    className="font-body text-sm leading-relaxed"
                    style={{ color: "var(--brand-neutral)", maxWidth: "none" }}
                  >
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
