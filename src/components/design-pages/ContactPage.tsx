"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "../design/Button";
import { PageBackLink } from "../design/PageBackLink";
import { Mail, Calendar, MessageSquare, ArrowRight } from "lucide-react";
import { site } from "@/lib/site";
import { slideByIndex, slideInFromRight, slideUp } from "@/lib/motion";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormState = {
  name: string;
  email: string;
  company: string;
  industry: string;
  message: string;
};
type FieldErrors = Partial<Record<keyof FormState, string>>;

export const ContactPage = () => {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    industry: "",
    message: "",
  });
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitNote, setSubmitNote] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Prefill from URL params (e.g. /contact?company=Acme&industry=retail&name=Jane)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const next: Partial<FormState> = {};
    (["name", "email", "company", "industry", "message"] as const).forEach((key) => {
      const v = params.get(key);
      if (v) next[key] = v;
    });
    if (Object.keys(next).length) {
      setFormData((prev) => ({ ...prev, ...next }));
    }
  }, []);

  const validateField = (name: keyof FormState, value: string): string | undefined => {
    if (name === "name" && !value.trim()) return "Please enter your name.";
    if (name === "email") {
      if (!value.trim()) return "Email is required.";
      if (!EMAIL_RE.test(value.trim())) return "Enter a valid email address.";
    }
    if (name === "message") {
      if (!value.trim()) return "A short message helps us prepare.";
      if (value.trim().length < 10) return "Please add a little more detail (10+ characters).";
    }
    return undefined;
  };

  const validateAll = (data: FormState): FieldErrors => {
    const next: FieldErrors = {};
    (Object.keys(data) as (keyof FormState)[]).forEach((k) => {
      const err = validateField(k, data[k]);
      if (err) next[k] = err;
    });
    return next;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const allErrors = validateAll(formData);
    setErrors(allErrors);
    setTouched({ name: true, email: true, company: true, industry: true, message: true });
    if (Object.keys(allErrors).length > 0) {
      setSubmitNote("Please correct the highlighted fields and try again.");
      return;
    }

    setIsSubmitting(true);
    setSubmitNote("Sending your message...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          sourcePage: typeof window !== "undefined" ? window.location.pathname : "/contact",
        }),
      });

      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        throw new Error(data.error || "Unable to submit form.");
      }

      setSubmitNote("Thanks. Your message was received and we will get back to you within 24 hours.");
      setFormData({ name: "", email: "", company: "", industry: "", message: "" });
      setTouched({});
      setErrors({});
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unable to submit right now.";
      setSubmitNote(`${message} Please try again in a moment.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const name = e.target.name as keyof FormState;
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const name = e.target.name as keyof FormState;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, e.target.value) }));
  };

  const contactMethods = [
    {
      icon: Calendar,
      title: "Schedule a Call",
      description: "Book a 30-minute discovery call to discuss your growth goals.",
      action: "Schedule Now",
      href: `mailto:${site.email}?subject=${encodeURIComponent("Discovery Call Request")}`,
    },
    {
      icon: Mail,
      title: "Send a Message",
      description: "Fill out the form below and we'll get back to you within 24 hours.",
      action: "Fill Form Below",
      href: "#contact-form",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-linear-to-br from-white via-(--brand-secondary)/5 to-white pt-32 pb-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-96 h-96 bg-linear-to-br from-(--brand-primary)/10 to-(--brand-secondary)/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              variants={slideUp}
              initial="hidden"
              animate="show"
            >
              <PageBackLink className="mb-6" />
              <span className="inline-block px-3 py-1.5 rounded-full bg-linear-to-r from-(--brand-primary)/10 to-(--brand-secondary)/10 border border-(--brand-primary)/20 font-ui text-xs font-semibold uppercase tracking-wide text-(--brand-primary) mb-6">
                Get in Touch
              </span>
              <h1
                className="font-headline text-5xl lg:text-6xl mb-6 leading-tight"
                style={{ color: "var(--brand-deep)" }}
              >
                Let's talk about your growth goals
              </h1>
              <p
                className="font-body text-xl lg:text-2xl mb-8 leading-relaxed"
                style={{ color: "var(--brand-neutral)", maxWidth: "none" }}
              >
                Book a free 30-minute consultation. Share your goals, leave with a clear next step toward growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                variants={slideByIndex(index)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-linear-to-br from-(--brand-primary)/5 to-(--brand-secondary)/5 rounded-2xl p-8 border border-(--brand-primary)/20"
              >
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-(--brand-primary) to-(--brand-secondary) flex items-center justify-center mb-6">
                  <method.icon className="w-6 h-6 text-white" />
                </div>
                <h3
                  className="font-headline text-2xl mb-3"
                  style={{ color: "var(--brand-deep)" }}
                >
                  {method.title}
                </h3>
                <p
                  className="font-body mb-6 leading-relaxed"
                  style={{ color: "var(--brand-neutral)", maxWidth: "none" }}
                >
                  {method.description}
                </p>
                <Link
                  href={method.href}
                  className="inline-flex items-center gap-2 text-(--brand-primary) hover:gap-3 transition-all"
                >
                  <span className="font-ui text-sm font-semibold">{method.action}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            variants={slideInFromRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white rounded-2xl p-8 lg:p-12 border border-border shadow-lg">
              <div className="flex items-center gap-3 mb-8">
                <MessageSquare className="w-6 h-6 text-(--brand-primary)" />
                <h2
                  className="font-headline text-2xl"
                  style={{ color: "var(--brand-deep)" }}
                >
                  Send us a message
                </h2>
              </div>

              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-ui text-sm font-medium mb-2"
                      style={{ color: "var(--brand-deep)" }}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-(--brand-primary) focus:border-transparent transition-all font-body ${errors.name && touched.name ? "border-destructive" : "border-border"}`}
                      placeholder="John Smith"
                    />
                    {errors.name && touched.name && (
                      <p id="name-error" className="mt-1 font-body text-xs text-destructive">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block font-ui text-sm font-medium mb-2"
                      style={{ color: "var(--brand-deep)" }}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-(--brand-primary) focus:border-transparent transition-all font-body ${errors.email && touched.email ? "border-destructive" : "border-border"}`}
                      placeholder="john@company.com"
                    />
                    {errors.email && touched.email && (
                      <p id="email-error" className="mt-1 font-body text-xs text-destructive">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="company"
                      className="block font-ui text-sm font-medium mb-2"
                      style={{ color: "var(--brand-deep)" }}
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-(--brand-primary) focus:border-transparent transition-all font-body"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="industry"
                      className="block font-ui text-sm font-medium mb-2"
                      style={{ color: "var(--brand-deep)" }}
                    >
                      Industry
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-(--brand-primary) focus:border-transparent transition-all font-body"
                      style={{ color: "var(--brand-neutral)" }}
                    >
                      <option value="">Select an industry</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="retail">Retail & E-commerce</option>
                      <option value="professional-services">Professional Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-ui text-sm font-medium mb-2"
                    style={{ color: "var(--brand-deep)" }}
                  >
                    Tell us about your business and goals *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    rows={6}
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-(--brand-primary) focus:border-transparent transition-all resize-none font-body ${errors.message && touched.message ? "border-destructive" : "border-border"}`}
                    placeholder="What challenges are you facing? What are your growth goals?"
                  />
                  {errors.message && touched.message && (
                    <p id="message-error" className="mt-1 font-body text-xs text-destructive">{errors.message}</p>
                  )}
                </div>

                <Button type="submit" size="lg" className="w-full" icon="none">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                <p className="text-center font-body text-sm text-(--brand-neutral)">
                  We&apos;ll get back to you within 24 hours. No spam, ever.
                </p>
                {submitNote && (
                  <p className="text-center font-body text-sm text-(--brand-primary)">
                    {submitNote}
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section className="relative py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2
              className="font-headline text-3xl mb-6"
              style={{ color: "var(--brand-deep)" }}
            >
              What happens next?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <div
                  className="w-10 h-10 rounded-full bg-linear-to-br from-(--brand-primary) to-(--brand-secondary) flex items-center justify-center text-white font-headline text-lg mb-4"
                >
                  1
                </div>
                <h3
                  className="font-headline text-lg mb-2"
                  style={{ color: "var(--brand-deep)" }}
                >
                  We Review
                </h3>
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: "var(--brand-neutral)", maxWidth: "none" }}
                >
                  We'll review your message and prepare thoughtful questions about your business.
                </p>
              </div>
              <div>
                <div
                  className="w-10 h-10 rounded-full bg-linear-to-br from-(--brand-primary) to-(--brand-secondary) flex items-center justify-center text-white font-headline text-lg mb-4"
                >
                  2
                </div>
                <h3
                  className="font-headline text-lg mb-2"
                  style={{ color: "var(--brand-deep)" }}
                >
                  We Connect
                </h3>
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: "var(--brand-neutral)", maxWidth: "none" }}
                >
                  We'll schedule a 30-minute discovery call to discuss your goals and challenges.
                </p>
              </div>
              <div>
                <div
                  className="w-10 h-10 rounded-full bg-linear-to-br from-(--brand-primary) to-(--brand-secondary) flex items-center justify-center text-white font-headline text-lg mb-4"
                >
                  3
                </div>
                <h3
                  className="font-headline text-lg mb-2"
                  style={{ color: "var(--brand-deep)" }}
                >
                  We Plan
                </h3>
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: "var(--brand-neutral)", maxWidth: "none" }}
                >
                  If we're a good fit, we'll outline a custom approach for your business.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
