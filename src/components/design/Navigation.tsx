"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./Button";
import { BrandLockup } from "./Brand";
import { mainNav, site } from "@/lib/site";

type NavChild = { label: string; href: string; description?: string };
type NavItem = { label: string; href: string; children?: readonly NavChild[] };

export const Navigation = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpenMenu(null);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") {
        return;
      }

      setOpenMenu(null);
      setIsMobileMenuOpen(false);
    };

    const handlePointerDown = (event: MouseEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("mousedown", handlePointerDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("mousedown", handlePointerDown);
    };
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
      ref={navRef}
      aria-label="Primary"
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
            {(mainNav as readonly NavItem[]).map((link) => {
              if (link.children) {
                const submenuId = `${link.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-submenu`;

                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => {
                      cancelClose();
                      setOpenMenu(link.label);
                    }}
                    onMouseLeave={scheduleClose}
                    onBlur={(event) => {
                      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                        scheduleClose();
                      }
                    }}
                  >
                    <button
                      type="button"
                      aria-haspopup="true"
                      aria-expanded={openMenu === link.label}
                      aria-controls={submenuId}
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
                          id={submenuId}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.18 }}
                          className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[320px] rounded-2xl bg-white border border-border shadow-[0_24px_60px_-24px_rgba(38,70,83,0.35)] p-2"
                        >
                          <ul aria-label={`${link.label} links`}>
                            {link.children.map((child) => (
                              <li key={child.label}>
                                <Link
                                  href={child.href}
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
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-ui text-[13px] tracking-wide hover:text-(--brand-primary) transition-colors duration-200 relative group"
                  style={{ color: "var(--brand-deep)" }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-(--brand-primary) to-(--brand-secondary) group-hover:w-full transition-all duration-300" />
                </Link>
              );
            })}
            <Button size="sm" href={site.bookingPath}>
              Get Started
            </Button>
          </div>

          <button
            className="lg:hidden p-2 -mr-2 min-w-11 min-h-11 inline-flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
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
            id="mobile-navigation"
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
                          className="block py-3 px-1 font-ui hover:text-(--brand-primary) transition-colors min-h-11"
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
                      className="block py-3 px-1 font-ui hover:text-(--brand-primary) transition-colors min-h-11"
                      style={{ color: "var(--brand-deep)" }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <Button size="md" href={site.bookingPath} className="w-full justify-center mt-4">
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
