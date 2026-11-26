"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandMark } from "@/components/design/Brand";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { contactHref, mainNav, practice, principal, site } from "@/lib/site";

/**
 * The lockup is composed here rather than in Brand.tsx: the mark is the brand
 * asset and stays frozen, while the wordmark is the principal's name because
 * that is the entity people search for.
 */
function NameLockup() {
  return (
    <span className="inline-flex items-center gap-3">
      <BrandMark width={54} height={22} tone="light" />
      <span className="flex flex-col leading-none">
        <span className="font-ui text-[15px] font-bold tracking-tight text-white">
          {principal.fullName}
          <span className="text-(--on-deep-muted)">, {principal.suffix}</span>
        </span>
        <span className="mt-1 font-ui text-xs text-(--on-deep-muted)">{practice.name}</span>
      </span>
    </span>
  );
}

/** A section's own page stays marked while the visitor is on one of its children. */
function isActive(pathname: string, href: string) {
  return pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
}

/**
 * Deep-teal masthead. On the home page it continues straight into the deep
 * hero; on every other page it is the one brand-colored bar above paper.
 */
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

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
    <header className="dark-section sticky top-0 z-40 border-b border-white/10">
      <Container width="wide">
        <div className="flex h-[4.5rem] items-center justify-between gap-6">
          <Link
            href="/"
            className="shrink-0 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            <NameLockup />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
            {mainNav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`link-quiet font-ui text-sm font-semibold transition-colors ${
                    active
                      ? "text-white [background-size:100%_1px]"
                      : "text-(--on-deep-muted) hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Button href={contactHref()} variant="light" size="md" withArrow>
              Book A Call
            </Button>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="-mr-2 inline-flex size-11 items-center justify-center rounded-md text-white lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </Container>

      {open ? (
        <div id="mobile-nav" className="border-t border-white/10 lg:hidden">
          <Container width="wide">
            <nav className="flex flex-col py-4" aria-label="Mobile">
              {mainNav.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`rule border-white/10 px-1 py-3 font-headline text-2xl ${
                      active ? "text-white" : "text-(--on-deep-muted)"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Button href={contactHref()} variant="light" size="lg" withArrow className="mt-5 w-full">
                Book A Call
              </Button>
              <a
                href={`tel:${site.phoneHref}`}
                className="mt-2 inline-flex min-h-11 items-center justify-center font-ui text-sm font-semibold text-white"
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
