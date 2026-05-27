"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowRight, Calendar, Clock3, Mail, PhoneCall } from "lucide-react";
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
      action: "Book A Time",
      href: site.bookingPath,
    },
    {
      icon: Mail,
      title: "Send a Message",
      description: "Send the details here if you would rather start in writing.",
      action: "Start With Email",
      href: "#contact-form",
    },
  ];

  const contactSignals = [
    {
      icon: PhoneCall,
      title: "Talk It Through Live",
      body: "Best when the situation is easier to explain out loud and you want direct back-and-forth.",
    },
    {
      icon: Mail,
      title: "Write It First",
      body: "Best when you want to gather notes, links, or examples before we speak.",
    },
    {
      icon: Clock3,
      title: "Quick Response",
      body: "Most messages get a reply within one business day so you are not left waiting.",
    },
  ];

  const formPrep = [
    "A short summary of what feels unclear or blocked right now.",
    "Any service, location, or audience details that matter most.",
    "Links to your current site, booking flow, or examples you want reviewed.",
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
                Book a free 30 minute call or send a note. I will ask direct questions and give you the next step.
              </p>
              <div className="grid gap-3 sm:grid-cols-3 max-w-5xl mx-auto text-left">
                {contactSignals.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-(--brand-primary)/15 bg-white/80 p-4 shadow-[0_18px_40px_-28px_rgba(23,120,142,0.35)] backdrop-blur-sm"
                  >
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-(--brand-primary) to-(--brand-secondary) text-white">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h2 className="mb-2 font-headline text-lg" style={{ color: "var(--brand-deep)" }}>
                      {item.title}
                    </h2>
                    <p className="font-body text-sm leading-relaxed text-(--brand-neutral)">{item.body}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20 bg-white">
        <div className={PAGE_SHELL_FLUID}>
          <div className="grid gap-10 xl:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] xl:items-start">
            <div className="space-y-6 xl:sticky xl:top-28">
              <div className="rounded-3xl border border-(--brand-primary)/15 bg-linear-to-br from-(--brand-primary)/6 to-(--brand-secondary)/8 p-6 sm:p-8">
                <p className="mb-3 font-ui text-xs font-semibold uppercase tracking-[0.24em] text-(--brand-primary)">
                  Choose The Easiest Start
                </p>
                <h2 className="mb-4 font-headline text-3xl sm:text-4xl" style={{ color: "var(--brand-deep)" }}>
                  Pick the path that matches how you think best
                </h2>
                <p className="font-body text-base sm:text-lg leading-relaxed text-(--brand-neutral)">
                  If the story is easier to explain out loud, book the call. If you want to send context first, use the form and I will respond with the clearest next step.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.title}
                    variants={slideByIndex(index)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="flex h-full flex-col rounded-2xl border border-(--brand-primary)/20 bg-white p-6 shadow-[0_20px_50px_-32px_rgba(38,70,83,0.28)]"
                  >
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-(--brand-primary) to-(--brand-secondary) text-white">
                        <method.icon className="h-6 w-6" />
                      </div>
                      <span className="rounded-full bg-(--brand-primary)/10 px-3 py-1 font-ui text-[11px] font-semibold uppercase tracking-wide text-(--brand-primary)">
                        Recommended
                      </span>
                    </div>
                    <h3 className="mb-3 font-headline text-2xl" style={{ color: "var(--brand-deep)" }}>
                      {method.title}
                    </h3>
                    <p className="mb-6 flex-1 max-w-none font-body leading-relaxed text-(--brand-neutral)">
                      {method.description}
                    </p>
                    <Link
                      href={method.href}
                      className="mt-auto inline-flex items-center gap-2 pt-2 text-(--brand-primary) transition-all hover:gap-3"
                    >
                      <span className="font-ui text-sm font-semibold">{method.action}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="rounded-2xl border border-border bg-muted/35 p-6 sm:p-7">
                <h3 className="mb-4 font-headline text-2xl" style={{ color: "var(--brand-deep)" }}>
                  Helpful To Include
                </h3>
                <ul className="space-y-3">
                  {formPrep.map((item) => (
                    <li key={item} className="flex items-start gap-3 font-body text-sm leading-relaxed text-(--brand-neutral)">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-(--brand-primary)" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <motion.div
              variants={slideInFromRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={`${PAGE_CONTACT_FORM_MAX} max-w-none`}
            >
              <ContactForm form={form} turnstileSiteKey={turnstileSiteKey} />
            </motion.div>
          </div>
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
                <div key={item.step} className="rounded-2xl border border-border bg-white p-6 shadow-[0_18px_45px_-32px_rgba(38,70,83,0.24)]">
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
