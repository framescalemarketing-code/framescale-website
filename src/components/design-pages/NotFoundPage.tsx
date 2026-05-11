"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "../design/Button";
import { Home, ArrowLeft, Search } from "lucide-react";
import { slideUp } from "@/lib/motion";

export const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-white via-(--brand-secondary)/5 to-white">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-linear-to-br from-(--brand-primary)/10 to-(--brand-secondary)/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-linear-to-br from-(--brand-secondary)/10 to-(--brand-primary)/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.div
          variants={slideUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-linear-to-br from-(--brand-primary) to-(--brand-secondary) mb-6"
            >
              <Search className="w-12 h-12 text-white" />
            </motion.div>
            <h1
              className="font-headline text-8xl mb-4"
              style={{ color: "var(--brand-primary)" }}
            >
              404
            </h1>
          </div>

          <h2
            className="font-headline text-4xl lg:text-5xl mb-6"
            style={{ color: "var(--brand-deep)" }}
          >
            Page not found
          </h2>

          <p
            className="font-body text-xl mb-12 leading-relaxed"
            style={{ color: "var(--brand-neutral)", maxWidth: "none" }}
          >
            We couldn't find the page you're looking for. It might have been moved, deleted, or the URL might be incorrect.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" href="/">
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Button>
            <Button size="lg" variant="ghost" onClick={() => window.history.back()}>
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </Button>
          </div>

          <div className="mt-16 pt-8 border-t border-border">
            <p
              className="font-body text-sm mb-4"
              style={{ color: "var(--brand-neutral)" }}
            >
              Looking for something specific?
            </p>
            <div className="flex flex-wrap justify-center gap-4 font-ui text-sm">
              <Link
                href="/"
                className="text-(--brand-primary) hover:underline"
              >
                Home
              </Link>
              <span style={{ color: "var(--border)" }}>•</span>
              <Link
                href="/industries/healthcare"
                className="text-(--brand-primary) hover:underline"
              >
                Healthcare
              </Link>
              <span style={{ color: "var(--border)" }}>•</span>
              <Link
                href="/industries/retail"
                className="text-(--brand-primary) hover:underline"
              >
                Retail
              </Link>
              <span style={{ color: "var(--border)" }}>•</span>
              <Link
                href="/industries/professional-services"
                className="text-(--brand-primary) hover:underline"
              >
                Professional Services
              </Link>
              <span style={{ color: "var(--border)" }}>•</span>
              <Link
                href="/process"
                className="text-(--brand-primary) hover:underline"
              >
                Process
              </Link>
              <span style={{ color: "var(--border)" }}>•</span>
              <Link
                href="/about"
                className="text-(--brand-primary) hover:underline"
              >
                About
              </Link>
              <span style={{ color: "var(--border)" }}>•</span>
              <Link
                href="/contact"
                className="text-(--brand-primary) hover:underline"
              >
                Contact
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
