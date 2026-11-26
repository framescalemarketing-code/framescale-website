import type { Metadata } from "next";
import { PageHero } from "@/components/sections/Hero";
import { ContactSection } from "@/components/sections/ContactSection";
import { buildBreadcrumbGraph, buildWebPageGraph, jsonLdProps } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Book A Free Call With Jonathan Mejia | FrameScale",
  absoluteTitle: true,
  description:
    "Book a free half-hour call about your optical practice's marketing. Tell me what is going on and I will " +
    "tell you where I would start.",
  path: "/contact",
  keywords: ["book an optical marketing consultation", "contact marketing consultant"],
});

export default function ContactPage() {
  return (
    <>
      <script
        {...jsonLdProps(
          buildWebPageGraph({
            type: "ContactPage",
            path: "/contact",
            name: "Contact Jonathan Mejia",
            description: String(metadata.description),
          }),
        )}
      />
      <script
        {...jsonLdProps(
          buildBreadcrumbGraph([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        )}
      />

      <PageHero
        headline="Tell Me About Your Practice"
        lead="Half an hour on the phone, just the two of us. I will tell you where I would start, and whether I am the right person at all."
      />

      <ContactSection />
    </>
  );
}
