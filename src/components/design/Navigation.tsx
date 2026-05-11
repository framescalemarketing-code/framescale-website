"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "./Button";
import { BrandLockup } from "./Brand";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Healthcare", href: "/industries/healthcare" },
    { label: "Retail", href: "/industries/retail" },
    { label: "Professional Services", href: "/industries/professional-services" },
    { label: "Process", href: "/process" },
    { label: "About", href: "/about" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_1px_24px_-12px_rgba(38,70,83,0.25)]"
          : "bg-white/60 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div whileHover={{ scale: 1.02 }} className="flex items-center">
            <Link href="/" className="flex items-center" aria-label="FrameScale Inc home">
              <BrandLockup size="sm" />
            </Link>
          </motion.div>

          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-ui text-[13px] tracking-wide hover:text-(--brand-primary) transition-colors duration-200 relative group"
                style={{ color: "var(--brand-deep)" }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-(--brand-primary) to-(--brand-secondary) group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <Button size="sm" href="/contact">
              Get Started
            </Button>
          </div>

          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" style={{ color: "var(--brand-deep)" }} />
            ) : (
              <Menu className="w-6 h-6" style={{ color: "var(--brand-deep)" }} />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-border overflow-hidden"
          >
            <div className="px-6 py-6 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block font-ui py-2 hover:text-(--brand-primary) transition-colors"
                  style={{ color: "var(--brand-deep)" }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button size="md" href="/contact" className="w-full justify-center">
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
