"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandMark } from "@/components/design/Brand";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { contactHrefFor, mainNav, practice, principal, site } from "@/lib/site";

/**
 * The lockup is composed here rather than in Brand.tsx: the mark is the brand
 * asset and stays frozen, while the wordmark is now the principal's name
 * because that is the entity people search for.
 */
function NameLockup({ onDark = false }: { onDark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3">
      <BrandMark width={54} height={22} tone={onDark ? "light" : "color"} />
      <span className="flex flex-col leading-none">
        <span
          className={`font-ui text-[15px] font-bold tracking-tight ${
            onDark ? "text-white" : "text-(--brand-deep)"
          }`}
        >
          {principal.fullName}
          <span className={onDark ? "text-white/55" : "text-(--text-muted)"}>, {principal.suffix}</span>
        </span>
        <span
          className={`mt-1 font-ui text-[10px] font-medium tracking-[0.14em] uppercase ${
            onDark ? "text-white/45" : "text-(--text-muted)"
          }`}
        >
          {practice.name}
        </span>
      </span>
    </span>
  );
}

export function Header() {
  const pathname = usePathname();
  const contactHref = contactHrefFor(pathname);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile panel on navigation.
  useEffect(() => setOpen(false), [pathname]);

  // Lock body scroll while the mobile panel is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-background/92 backdrop-blur-md transition-colors duration-200 ${
        scrolled ? "border-(--border)" : "border-transparent"
      }`}
    >
      <Container width="wide">
        <div className="flex h-20 items-center justify-between gap-6">
          <Link
            href="/"
            className="shrink-0 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            <NameLockup />
          </Link>

          <nav className="hidden items-center gap-9 md:flex" aria-label="Main">
            {mainNav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`link-quiet font-ui text-sm font-semibold transition-colors ${
                    active ? "text-(--brand-primary)" : "text-(--brand-deep) hover:text-(--brand-primary)"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Button href={contactHref} size="md" withArrow>
              Book A Call
            </Button>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rounded-md p-2 text-(--brand-deep) md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </Container>

      {open ? (
        <div id="mobile-nav" className="border-t border-(--border) bg-background md:hidden">
          <Container>
            <nav className="flex flex-col gap-1 py-6" aria-label="Mobile">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-2 py-3 font-headline text-2xl text-(--brand-deep)"
                >
                  {item.label}
                </Link>
              ))}
              <Button href={contactHref} size="lg" withArrow className="mt-4 w-full">
                Book A Call
              </Button>
              <a
                href={`tel:${site.phoneHref}`}
                className="mt-3 px-2 py-2 text-center font-ui text-sm font-semibold text-(--brand-primary)"
              >
                {site.phone}
              </a>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
