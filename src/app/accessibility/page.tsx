import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { LegalShell } from "@/components/layout/LegalShell";
import { buildPageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

const title = "Accessibility Statement";
const description = "FrameScale accessibility statement, including our target standard, supported use, contact process, and known limits.";

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path: "/accessibility",
});

const lastUpdated = "May 20, 2026";

const measures = [
  "Semantic headings, landmarks, labels, and alt text are used where they help people navigate the site.",
  "The site includes a skip link, keyboard focus styles, and an accessibility options widget for text size, contrast, motion, and link visibility.",
  "Forms are built with visible labels, required field states, confirmation fields where needed, and plain-language error messages.",
  "Motion respects the user preference for reduced motion, and the site also offers a reduce motion control.",
  "Color choices are checked against the brand palette for readable contrast where text is used.",
  "Pages are designed to reflow across phone, tablet, laptop, and desktop screen sizes.",
];

const supportedUse = [
  "Current versions of Chrome, Edge, Firefox, and Safari.",
  "Keyboard navigation without a mouse.",
  "Screen readers and browser zoom where supported by the visitor's browser and device.",
  "Mobile and desktop layouts using responsive CSS.",
];

const knownLimitations = [
  "Some third-party tools, scripts, embedded services, or browser extensions may not be fully controlled by FrameScale.",
  "Older browsers may not support every visual or accessibility enhancement used on the site.",
  "Some downloaded or linked documents from outside FrameScale may have different accessibility support.",
];

export default function AccessibilityPage() {
  return (
    <LegalShell title="Accessibility Statement" lead="FrameScale wants this website to be usable for as many people as possible, including people who use assistive technology.">
            <p className="font-body text-sm text-(--text-muted) leading-relaxed">
              Last updated: {lastUpdated}
            </p>

            <Section title="Our Commitment">
              <p>
                FrameScale is committed to making this website accessible, understandable, and usable. Our goal is to follow the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA as the practical standard for this site.
              </p>
              <p>
                Accessibility is ongoing work. We review the site as pages, forms, images, and booking tools change.
              </p>
            </Section>

            <Section title="What We Do">
              <ul className="space-y-3">
                {measures.map((item) => (
                  <li key={item} className="font-body text-(--text-muted) leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Supported Use">
              <p>
                This site is designed to work with common modern browsers and devices. It should support:
              </p>
              <ul className="space-y-3">
                {supportedUse.map((item) => (
                  <li key={item} className="font-body text-(--text-muted) leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Known Limits">
              <p>
                We try to keep the site accessible, but some limits may remain:
              </p>
              <ul className="space-y-3">
                {knownLimitations.map((item) => (
                  <li key={item} className="font-body text-(--text-muted) leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Need Help">
              <p>
                If you cannot access part of the site, have trouble using the booking form, or notice an accessibility issue, email{" "}
                <Link className="text-(--brand-primary) font-semibold hover:underline" href={`mailto:${site.email}`}>
                  {site.email}
                </Link>
                .
              </p>
              <p>
                Please include the page URL, what you were trying to do, the device and browser you used, and any assistive technology involved. We will review the issue and respond as soon as reasonably possible.
              </p>
            </Section>

            <Section title="Feedback">
              <p>
                Accessibility feedback is welcome. It helps us make the site better for everyone who uses it.
              </p>
            </Section>
    </LegalShell>
  );
}

const Section = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="border-t border-border pt-8">
    <h2 className="font-headline text-2xl sm:text-3xl text-(--brand-deep) mb-4">{title}</h2>
    <div className="space-y-4 font-body text-(--text-muted) leading-relaxed">{children}</div>
  </section>
);
