"use client";

import { MessageSquare } from "lucide-react";
import { Button } from "@/components/design/Button";
import type { useContactForm } from "@/lib/contact/use-contact-form";

type ContactFormProps = {
  form: ReturnType<typeof useContactForm>;
};

export const ContactForm = ({ form }: ContactFormProps) => {
  const { formData, touched, errors, submitNote, isSubmitting, handleSubmit, handleChange, handleBlur } = form;

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 xl:p-12 border border-border shadow-lg">
      <div className="flex items-center gap-3 mb-8">
        <MessageSquare className="w-6 h-6 text-(--brand-primary)" />
        <h2 className="font-headline text-2xl" style={{ color: "var(--brand-deep)" }}>
          Send Us a Message
        </h2>
      </div>

      <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block font-ui text-sm font-medium mb-2" style={{ color: "var(--brand-deep)" }}>
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
              <p id="name-error" className="mt-1 font-body text-xs text-destructive">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block font-ui text-sm font-medium mb-2" style={{ color: "var(--brand-deep)" }}>
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
              <p id="email-error" className="mt-1 font-body text-xs text-destructive">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="confirmEmail"
            className="block font-ui text-sm font-medium mb-2"
            style={{ color: "var(--brand-deep)" }}
          >
            Confirm email *
          </label>
          <input
            type="email"
            id="confirmEmail"
            name="confirmEmail"
            required
            autoComplete="off"
            value={formData.confirmEmail}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!errors.confirmEmail}
            aria-describedby={errors.confirmEmail ? "confirm-email-error" : undefined}
            className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-(--brand-primary) focus:border-transparent transition-all font-body ${errors.confirmEmail && touched.confirmEmail ? "border-destructive" : "border-border"}`}
            placeholder="Re-enter your email"
          />
          {errors.confirmEmail && touched.confirmEmail && (
            <p id="confirm-email-error" className="mt-1 font-body text-xs text-destructive">
              {errors.confirmEmail}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="company" className="block font-ui text-sm font-medium mb-2" style={{ color: "var(--brand-deep)" }}>
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
            <label htmlFor="industry" className="block font-ui text-sm font-medium mb-2" style={{ color: "var(--brand-deep)" }}>
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
          <label htmlFor="message" className="block font-ui text-sm font-medium mb-2" style={{ color: "var(--brand-deep)" }}>
            Describe your business and goals *
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
            <p id="message-error" className="mt-1 font-body text-xs text-destructive">
              {errors.message}
            </p>
          )}
        </div>

        <Button type="submit" size="lg" className="w-full" icon="none">
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>

        <p className="text-center font-body text-sm text-(--brand-neutral)">
          I will get back to you within 24 hours. No spam, ever.
        </p>
        {submitNote && <p className="text-center font-body text-sm text-(--brand-primary)">{submitNote}</p>}
      </form>
    </div>
  );
};
