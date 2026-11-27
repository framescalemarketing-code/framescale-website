import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Chapters } from "@/components/sections/Chapters";
import { Credentials } from "@/components/sections/Credentials";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { aboutHero } from "@/content/about";
import { caseStudyPath, onSightApproved, proofLinks } from "@/content/onsight";
import { buildBreadcrumbGraph, buildWebPageGraph, jsonLdProps } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/metadata";
import { practice, principal } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: `About ${principal.fullName} | ${practice.name}`,
  absoluteTitle: true,
  description:
    "I went from a full service optical lab to the sales floor to store management, then earned an MBA in marketing.",
  path: "/about",
  keywords: [
    `${principal.fullName}`,
    "optical practice marketing consultant",
    "MBA marketing consultant",
    "optical industry marketing",
  ],
});

export default function AboutPage() {
  return (
    <>
      <script
        {...jsonLdProps(
          buildWebPageGraph({
            type: "AboutPage",
            path: "/about",
            name: `About ${principal.fullName}`,
            description: String(metadata.description),
          }),
        )}
      />
      <script
        {...jsonLdProps(
          buildBreadcrumbGraph([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        )}
      />

      {/* Portrait-led hero. The photo is the point of this page, so it gets real
          space rather than being cropped into a card. */}
      <section className="pt-14 pb-16 md:pt-20 md:pb-24">
        <Container width="wide">
          <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            <div className="flex flex-col gap-6">
              <h1 className="display-xl text-[clamp(2.2rem,4.8vw,4rem)] text-(--brand-deep)">
                {aboutHero.headline}
              </h1>
              <p className="lead measure">{aboutHero.lead}</p>
              <p className="measure text-(--text-muted)">
                The{" "}
                <Link href="/optical-marketing" className="link-quiet font-semibold text-(--brand-primary)">
                  optical marketing page
                </Link>{" "}
                covers that side of my work.
              </p>
              {onSightApproved ? (
                <p className="measure text-(--text-muted)">
                  {proofLinks.about}{" "}
                  <Link href={caseStudyPath} className="link-quiet font-semibold text-(--brand-primary)">
                    {proofLinks.aboutLink}
                  </Link>
                  .
                </p>
              ) : null}
              <div className="tick-rule mt-4 max-w-xs text-(--brand-primary)" aria-hidden="true" />
            </div>

            <div className="relative mx-auto aspect-4/5 w-full max-w-sm overflow-hidden rounded-(--radius-media) lg:max-w-none">
              <Image
                src="/photos/founder/jonathan-about.jpg"
                alt={`${principal.displayName}, ${principal.jobTitle}`}
                fill
                sizes="(max-width: 1024px) 80vw, 38vw"
                className="object-cover object-[center_18%]"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      <Chapters />
      <Credentials />
      <CtaBand
        title="Tell Me What You Are Working On"
        lead="Half an hour on the phone, just the two of us."
      />
    </>
  );
}
