import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/Hero";
import { ScalePhases, WorkingStandards } from "@/components/sections/ScaleMethod";
import { CtaBand } from "@/components/sections/CtaBand";
import { scaleIntro } from "@/content/scale";
import { buildBreadcrumbGraph, buildWebPageGraph, jsonLdProps } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "The SCALE Method: A Five-Phase Marketing Process",
  absoluteTitle: true,
  description:
    "The SCALE Method is the five-phase marketing process I use with optical practices, from market study " +
    "to evaluation. See each step before it starts.",
  path: "/method",
  keywords: [
    "SCALE method",
    "marketing process for optical practices",
    "marketing roadmap",
    "optical practice marketing plan",
  ],
});

export default function MethodPage() {
  return (
    <>
      <script
        {...jsonLdProps(
          buildWebPageGraph({
            type: "WebPage",
            path: "/method",
            name: "The SCALE Method",
            description: String(metadata.description),
          }),
        )}
      />
      <script
        {...jsonLdProps(
          buildBreadcrumbGraph([
            { name: "Home", path: "/" },
            { name: "Method", path: "/method" },
          ]),
        )}
      />

      <PageHero headline="The SCALE Method: How I Work With Your Practice" lead={scaleIntro.lead}>
        <p className="measure mt-6 text-(--text-muted)">
          SCALE stands for Study, Clarify, Align, Launch and Evaluate. Each of the four{" "}
          <Link href="/services" className="link-quiet font-semibold text-(--brand-primary)">
            services I offer
          </Link>{" "}
          runs on these phases, and you approve the end of one before I start the next.
        </p>
      </PageHero>

      <ScalePhases />
      <WorkingStandards />

      <CtaBand
        title="Want To See How It Would Work For You?"
        lead="Tell me about the practice on a free call. I will tell you which phase I would start in, and what that would involve."
      />
    </>
  );
}
