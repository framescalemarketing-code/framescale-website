import Link from "next/link";
import { Container } from "./Container";
import { site, nav } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-brand-ink/10 bg-white">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-lg text-brand-ink">{site.name}</p>
            <p className="mt-3 max-w-md text-sm leading-6 text-brand-ink/70">
              {site.description}
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="text-sm font-semibold text-brand-ink">Pages</p>
            <ul className="mt-3 space-y-2 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    className="text-brand-ink/70 hover:text-brand-ink"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <p className="text-sm font-semibold text-brand-ink">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-brand-ink/70">
              <li>
                <a className="hover:text-brand-ink" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </li>
              <li>
                <a className="hover:text-brand-ink" href={`tel:${site.phone}`}>
                  {site.phone}
                </a>
              </li>
              <li>
                <Link className="hover:text-brand-ink" href="/privacy">
                  Privacy
                </Link>
                <span className="px-2 text-brand-ink/30">|</span>
                <Link className="hover:text-brand-ink" href="/terms">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="pb-10 text-xs text-brand-ink/50">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
