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

const LINK_CLASS =
  "link-quiet inline-flex min-h-8 items-center text-[15px] text-(--on-deep-muted) hover:text-white";

/**
 * Deep-teal base of every page. The contact details are the same strings the
 * JSON-LD carries, so the visible page and the markup never disagree.
 */
export function Footer() {
  return (
    /* The mobile CTA bar is fixed to the bottom of the viewport and would
       otherwise cover the last row. The bar is md:hidden, so the clearance is. */
    <footer
      className="dark-section border-t border-white/10 pb-(--mobile-cta-clearance) md:pb-0"
      aria-labelledby="footer-heading"
    >
      <div className="grain-overlay" />
      <h2 id="footer-heading" className="sr-only">
        Site footer
      </h2>

      <Container width="wide">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-14 sm:gap-x-10 lg:grid-cols-[1.9fr_0.8fr_1.2fr_1.1fr]">
          <div className="col-span-2 flex flex-col gap-5 lg:col-span-1">
            <div className="flex items-center gap-3">
              <BrandMark width={54} height={22} tone="light" />
              <div>
                <p className="font-headline text-lg leading-tight text-white">{principal.displayName}</p>
                <p className="font-ui text-sm text-(--on-deep-muted)">
                  {principal.jobTitle}, {practice.name}
                </p>
              </div>
            </div>

            <address className="flex flex-col gap-2 not-italic">
              <span className="flex items-start gap-2 text-[15px] text-(--on-deep-muted)">
                <MapPin className="mt-1 size-4 shrink-0 text-(--brand-secondary)" aria-hidden="true" />
                <span>
                  Based in {location.regionName}. Working remotely across {location.serviceArea}.
                </span>
              </span>
              <a href={`tel:${site.phoneHref}`} className={`${LINK_CLASS} w-fit gap-2`}>
                <Phone className="size-4 shrink-0 text-(--brand-secondary)" aria-hidden="true" />
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className={`${LINK_CLASS} w-fit gap-2 wrap-anywhere`}>
                <Mail className="size-4 shrink-0 text-(--brand-secondary)" aria-hidden="true" />
                {site.email}
              </a>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`${LINK_CLASS} w-fit gap-2`}
              >
                <LinkedInIcon className="size-4 shrink-0 text-(--brand-secondary)" />
                LinkedIn
              </a>
            </address>
          </div>

          {(Object.entries(footerLinks) as [string, readonly { label: string; href: string }[]][]).map(
            ([heading, links]) => (
              <nav key={heading} aria-label={heading}>
                <p className="font-ui text-sm font-semibold text-white">{heading}</p>
                <ul className="mt-3 flex flex-col gap-1">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className={LINK_CLASS}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ),
          )}
        </div>

        <div className="tick-rule text-white" aria-hidden="true" />
        <div className="flex py-5">
          <p className="text-sm text-(--on-deep-muted)">
            &copy; {YEAR} {practice.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
