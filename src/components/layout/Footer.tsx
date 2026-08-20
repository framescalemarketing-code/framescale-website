import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { BrandMark } from "@/components/design/Brand";
import { Container } from "@/components/ui/Container";
import { footerLinks, location, practice, principal, site } from "@/lib/site";

const YEAR = new Date().getFullYear();

/** Lucide v1 removed brand icons, so the LinkedIn mark is inlined here. */
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13M7.12 20.45H3.55V9h3.57zM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0" />
    </svg>
  );
}


export function Footer() {
  return (
    <footer className="dark-section" aria-labelledby="footer-heading">
      <div className="grain-overlay" />
      <h2 id="footer-heading" className="sr-only">
        Site footer
      </h2>

      <Container width="wide">
        <div className="grid gap-12 py-20 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* NAP block. These values must match the JSON-LD exactly; consistency
              between the visible page and the markup is what local ranking uses. */}
          <div className="flex flex-col gap-5">
            <BrandMark width={72} height={30} tone="light" />
            <div>
              <p className="font-headline text-xl text-white">{principal.displayName}</p>
              <p className="mt-1 font-ui text-[11px] font-semibold tracking-[0.14em] text-white/45 uppercase">
                {principal.jobTitle} · {practice.name}
              </p>
            </div>

            <address className="flex flex-col gap-3 not-italic">
              <span className="flex items-start gap-2.5 text-sm text-white/70">
                <MapPin className="mt-0.5 size-4 shrink-0 text-(--brand-secondary)" aria-hidden="true" />
                <span>
                  {location.city}, {location.region}
                  <span className="block text-white/45">Serving {location.serviceArea}</span>
                </span>
              </span>
              <a
                href={`tel:${site.phoneHref}`}
                className="link-quiet flex items-center gap-2.5 text-sm text-white/70 hover:text-white"
              >
                <Phone className="size-4 shrink-0 text-(--brand-secondary)" aria-hidden="true" />
                {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="link-quiet flex items-center gap-2.5 text-sm break-all text-white/70 hover:text-white"
              >
                <Mail className="size-4 shrink-0 text-(--brand-secondary)" aria-hidden="true" />
                {site.email}
              </a>
            </address>

            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 px-4 py-2 font-ui text-xs font-semibold text-white/80 transition-colors hover:border-white/45 hover:text-white"
            >
              <LinkedInIcon className="size-4" />
              LinkedIn
            </a>
          </div>

          {(Object.entries(footerLinks) as [string, readonly { label: string; href: string }[]][]).map(
            ([heading, links]) => (
              <nav key={heading} aria-label={heading}>
                <p className="font-ui text-[11px] font-semibold tracking-[0.16em] text-white/45 uppercase">
                  {heading}
                </p>
                <ul className="mt-5 flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="link-quiet text-sm text-white/70 hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ),
          )}
        </div>

        {/* Service area. Plain prose, not a keyword block: a bare list of cities
            is the pattern Google treats as a doorway signal. */}
        <div className="border-t border-white/10 py-8">
          <p className="text-sm text-white/45">
            {principal.firstName} works with owners across {location.serviceArea}, including{" "}
            {location.areaServed.slice(0, -1).join(", ")}, and {location.areaServed.at(-1)}.
          </p>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">
            &copy; {YEAR} {practice.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            {location.city}, {location.regionName}
          </p>
        </div>
      </Container>
    </footer>
  );
}
