import type { Metadata } from "next";
import { PageHero } from "@/components/sections/Hero";
import { ContactSection } from "@/components/sections/ContactSection";
import { buildBreadcrumbGraph, buildWebPageGraph, jsonLdProps } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Jonathan Mejia | FrameScale",
  absoluteTitle: true,
  description:
    "Send me a note about your optical practice's marketing. I read every message myself and reply within " +
    "one business day.",
  path: "/contact",
  keywords: ["contact optical marketing consultant", "contact marketing consultant"],
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
        lead="Write a few sentences and I will reply within one business day. If you would rather talk, book a call and we will work it out live."
      />

      <ContactSection />
    </>
  );
}
