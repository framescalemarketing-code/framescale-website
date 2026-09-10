import type { Metadata } from "next";
import Image from "next/image";
import { Chapters } from "@/components/sections/Chapters";
import { Credentials } from "@/components/sections/Credentials";
import { ContactSection } from "@/components/sections/ContactSection";
import { ShareBar } from "@/components/sections/ShareBar";
import { Container } from "@/components/ui/Container";
import { aboutClosing, aboutHero } from "@/content/about";
import { buildBreadcrumbGraph, buildProfilePageGraph, jsonLdProps } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/metadata";
import { location, practice, principal } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: `About ${principal.displayName} | ${location.city} ${principal.jobTitle}`,
  absoluteTitle: true,
  description:
    `I'm a small business consultant in ${location.city}. From the back of an optical shop to running the store ` +
    "to an MBA in marketing, and how that shapes the work.",
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
      <script {...jsonLdProps(buildProfilePageGraph())} />
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
      <ContactSection title={aboutClosing.title} lead={aboutClosing.lead} />
      <ShareBar />
    </>
  );
}
