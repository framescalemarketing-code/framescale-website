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

/**
 * Deliberately compact. The service-area line and the copyright used to be two
 * separate bordered rows below the grid; they share one row now, which removes
 * a divider and a whole block of padding.
 */
export function Footer() {
  return (
    <footer className="dark-section" aria-labelledby="footer-heading">
      <div className="grain-overlay" />
      <h2 id="footer-heading" className="sr-only">
        Site footer
      </h2>

      <Container>
        <div className="grid grid-cols-2 gap-x-6 gap-y-7 py-8 sm:gap-x-10 lg:grid-cols-[1.9fr_0.85fr_1.15fr_1.05fr]">
          {/* NAP block. These values must match the JSON-LD exactly; consistency
              between the visible page and the markup is what local ranking uses. */}
          <div className="col-span-2 flex flex-col gap-3 lg:col-span-1">
            <div className="flex items-center gap-3">
              <BrandMark width={46} height={19} tone="light" />
              <div>
                <p className="font-headline text-base leading-tight text-white">{principal.displayName}</p>
                <p className="font-ui text-[9px] font-semibold tracking-[0.14em] text-white/45 uppercase">
                  {principal.jobTitle} · {practice.name}
                </p>
              </div>
            </div>

            <address className="flex flex-col gap-1.5 not-italic">
              <span className="flex items-start gap-2 text-[13px] text-white/70">
                <MapPin className="mt-0.5 size-3.5 shrink-0 text-(--brand-secondary)" aria-hidden="true" />
                <span>
                  {location.city}, {location.region}. Serving {location.serviceArea}.
                </span>
              </span>
              <a
                href={`tel:${site.phoneHref}`}
                className="link-quiet flex items-center gap-2 text-[13px] text-white/70 hover:text-white"
              >
                <Phone className="size-3.5 shrink-0 text-(--brand-secondary)" aria-hidden="true" />
                {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="link-quiet flex items-start gap-2 text-xs wrap-anywhere text-white/70 hover:text-white"
              >
                <Mail className="mt-0.5 size-3.5 shrink-0 text-(--brand-secondary)" aria-hidden="true" />
                {site.email}
              </a>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="link-quiet mt-0.5 flex w-fit items-center gap-2 text-[13px] text-white/70 hover:text-white"
              >
                <LinkedInIcon className="size-3.5 shrink-0 text-(--brand-secondary)" />
                LinkedIn
              </a>
            </address>
          </div>

          {(Object.entries(footerLinks) as [string, readonly { label: string; href: string }[]][]).map(
            ([heading, links]) => (
              <nav key={heading} aria-label={heading}>
                <p className="font-ui text-[10px] font-semibold tracking-[0.16em] text-white/40 uppercase">
                  {heading}
                </p>
                <ul className="mt-2.5 flex flex-col gap-1.5">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="link-quiet text-[13px] text-white/70 hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ),
          )}
        </div>

        {/* Service area as plain prose rather than a bare list of cities, which
            is the pattern Google reads as a doorway signal. */}
        <div className="flex flex-col gap-2 border-t border-white/10 py-4 lg:flex-row lg:items-baseline lg:justify-between lg:gap-8">
          <p className="text-xs leading-relaxed text-white/40">
            I work with owners across {location.serviceArea}, including{" "}
            {location.areaServed.slice(0, -1).join(", ")}, and {location.areaServed.at(-1)}.
          </p>
          <p className="text-xs whitespace-nowrap text-white/35">
            &copy; {YEAR} {practice.name}
          </p>
        </div>
      </Container>
    </footer>
  );
}
