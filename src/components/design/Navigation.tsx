"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { Button } from "./Button";
import { BrandLockup } from "./Brand";
import { mainNav } from "@/lib/site";

type NavChild = { label: string; href: string; description?: string };
type NavItem = { label: string; href: string; children?: readonly NavChild[] };

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

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
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }} className="flex items-center">
            <Link href="/" className="flex items-center" aria-label="FrameScale Inc home">
              <BrandLockup size="sm" />
            </Link>
          </motion.div>

          <div className="hidden lg:flex items-center gap-7">
            {(mainNav as readonly NavItem[]).map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => {
                    cancelClose();
                    setOpenMenu(link.label);
                  }}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    type="button"
                    aria-haspopup="menu"
                    aria-expanded={openMenu === link.label}
                    onClick={() => setOpenMenu(openMenu === link.label ? null : link.label)}
                    className="inline-flex items-center gap-1 font-ui text-[13px] tracking-wide hover:text-(--brand-primary) transition-colors duration-200 relative group"
                    style={{ color: "var(--brand-deep)" }}
                  >
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openMenu === link.label ? "rotate-180" : ""}`} />
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-(--brand-primary) to-(--brand-secondary) group-hover:w-full transition-all duration-300" />
                  </button>
                  <AnimatePresence>
                    {openMenu === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.18 }}
                        role="menu"
                        className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[320px] rounded-2xl bg-white border border-border shadow-[0_24px_60px_-24px_rgba(38,70,83,0.35)] p-2"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            role="menuitem"
                            onClick={() => setOpenMenu(null)}
                            className="block rounded-xl px-4 py-3 hover:bg-(--brand-secondary)/10 transition-colors duration-150"
                          >
                            <div className="font-ui text-sm font-semibold" style={{ color: "var(--brand-deep)" }}>
                              {child.label}
                            </div>
                            {child.description && (
                              <div className="font-body text-xs mt-0.5 text-(--brand-neutral)">
                                {child.description}
                              </div>
                            )}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-ui text-[13px] tracking-wide hover:text-(--brand-primary) transition-colors duration-200 relative group"
                  style={{ color: "var(--brand-deep)" }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-(--brand-primary) to-(--brand-secondary) group-hover:w-full transition-all duration-300" />
                </Link>
              )
            )}
            <Button size="sm" href="/contact">
              Get Started
            </Button>
          </div>

          <button
            className="lg:hidden p-2 -mr-2 min-w-[44px] min-h-[44px] inline-flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={isMobileMenuOpen}
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
            transition={{ duration: 0.28 }}
            className="lg:hidden bg-white border-t border-border overflow-hidden"
          >
            <div className="px-6 py-6 space-y-2">
              {(mainNav as readonly NavItem[]).map((link) => (
                <div key={link.label}>
                  {link.children ? (
                    <>
                      <div className="font-ui text-xs font-semibold uppercase tracking-wider text-(--brand-neutral) mt-2 mb-2 px-1">
                        {link.label}
                      </div>
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block py-3 px-1 font-ui hover:text-(--brand-primary) transition-colors min-h-[44px]"
                          style={{ color: "var(--brand-deep)" }}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="block py-3 px-1 font-ui hover:text-(--brand-primary) transition-colors min-h-[44px]"
                      style={{ color: "var(--brand-deep)" }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <Button size="md" href="/contact" className="w-full justify-center mt-4">
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
