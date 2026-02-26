"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { nav } from "@/lib/site";

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={[
        "rounded-full px-3 py-2 text-sm font-medium transition-colors",
        isActive
          ? "bg-brand-sand text-brand-ink"
          : "text-brand-ink/80 hover:bg-brand-sand hover:text-brand-ink",
      ].join(" ")}
    >
      {label}
    </Link>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-ink/10 bg-white/85 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-6">
          <Logo />
          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} />
            ))}
          </nav>
          <Link
            href="/contact"
            className="hidden rounded-full bg-brand-teal px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-tealDark md:inline-flex"
          >
            Book a consult
          </Link>
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-brand-teal px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-tealDark md:hidden"
          >
            Contact
          </Link>
        </div>
      </Container>
    </header>
  );
}

