import type { Metadata } from "next";
import Image from "next/image";
import { Chapters, SanDiegoSection } from "@/components/sections/Chapters";
import { Credentials } from "@/components/sections/Credentials";
import { ContactSection } from "@/components/sections/ContactSection";
import { Container } from "@/components/ui/Container";
import { aboutHero } from "@/content/about";
import { buildBreadcrumbGraph, jsonLdProps } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/metadata";
import { location, practice, principal } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: `About ${principal.displayName} | ${location.city} ${principal.jobTitle}`,
  absoluteTitle: true,
  description: `I am a small business consultant in ${location.city}. From the shop floor to store management to an MBA in marketing, and how that background shapes the work I do.`,
  path: "/about",
  keywords: [
    `${principal.fullName}`,
    `small business consultant ${location.city}`,
    "MBA marketing consultant",
    "small business marketing help",
  ],
});

export default function AboutPage() {
  return (
    <>
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
          <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <div className="flex flex-col gap-6">
              <p className="eyebrow">{aboutHero.eyebrow}</p>
              <h1 className="display-xl text-(--brand-deep)">{aboutHero.headline}</h1>
              <p className="lead">{aboutHero.lead}</p>
              <p className="font-ui text-[11px] font-semibold tracking-[0.14em] text-(--text-muted) uppercase">
                {principal.jobTitle} · {practice.name} · {location.city}, {location.region}
              </p>
            </div>

            <div className="relative mx-auto aspect-4/5 w-full max-w-sm overflow-hidden rounded-4xl lg:max-w-none">
              <Image
                src="/photos/founder/jonathan-about.jpg"
                alt={`${principal.displayName}, ${principal.jobTitle} in ${location.city}`}
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
      <SanDiegoSection />
      <ContactSection
        eyebrow="Say Hello"
        title="Tell me what you're working on"
        lead="Thirty minutes on the phone. No slides, no pitch."
      />
    </>
  );
}
