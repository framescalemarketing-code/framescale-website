"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Button } from "../design/Button";
import { Mail, Calendar, MessageSquare, ArrowRight } from "lucide-react";

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: Calendar,
      title: "Schedule a Call",
      description: "Book a 30-minute discovery call to discuss your growth goals.",
      action: "Schedule Now",
    },
    {
      icon: Mail,
      title: "Send a Message",
      description: "Fill out the form below and we'll get back to you within 24 hours.",
      action: "Fill Form Below",
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-linear-to-r from-(--brand-primary)/10 to-(--brand-secondary)/10 border border-(--brand-primary)/20 font-ui text-sm font-semibold uppercase tracking-wider text-(--brand-primary) mb-6">
                Get In Touch
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
                Free 30-minute consultation. No pressure, just honest conversation about how we can help you scale.
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
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
                <div className="flex items-center gap-2 text-(--brand-primary)">
                  <span className="font-ui text-sm font-semibold">
                    {method.action}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
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

              <form onSubmit={handleSubmit} className="space-y-6">
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
                      className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-(--brand-primary) focus:border-transparent transition-all font-body"
                      placeholder="John Smith"
                    />
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
                      className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-(--brand-primary) focus:border-transparent transition-all font-body"
                      placeholder="john@company.com"
                    />
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
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-(--brand-primary) focus:border-transparent transition-all resize-none font-body"
                    placeholder="What challenges are you facing? What are your growth goals?"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>

                <p className="text-center font-body text-sm text-(--brand-neutral)">
                  We'll get back to you within 24 hours.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section className="relative py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
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
