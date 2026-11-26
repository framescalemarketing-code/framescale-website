import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/Hero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { getPublishedInsights } from "@/content/insights";
import { buildBreadcrumbGraph, jsonLdProps } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/metadata";

const hasArticles = getPublishedInsights().length > 0;

export const metadata: Metadata = buildPageMetadata({
  title: "Optical Marketing Guides | Jonathan Mejia, MBA",
  absoluteTitle: true,
  description:
    "Plain-language guides on optical practice marketing: what it includes, which numbers to track and how to read a report.",
  path: "/insights",
  // An index with nothing on it is thin content, so it stays out of search
  // results until the first article is published.
  ...(hasArticles ? {} : { robots: { index: false, follow: true } }),
});

export default function InsightsPage() {
  const articles = getPublishedInsights();

  return (
    <>
      <script
        {...jsonLdProps(
          buildBreadcrumbGraph([
            { name: "Home", path: "/" },
            { name: "Insights", path: "/insights" },
          ]),
        )}
      />

      <PageHero
        headline="Optical Marketing Guides"
        lead="Short, plain write-ups of what I tell practice owners on the first call."
      />

      <Section size="default">
        {articles.length > 0 ? (
          <Reveal group className="flex flex-col">
            {articles.map((article, index) => (
              <RevealItem key={article.slug} className={index === 0 ? "" : "rule"}>
                <Link
                  href={`/insights/${article.slug}`}
                  className="focus-ring group flex flex-col gap-3 py-8 md:flex-row md:items-center md:gap-10"
                >
                  <div className="flex flex-1 flex-col gap-2">
                    <h2 className="display-sm text-(--brand-deep) transition-colors group-hover:text-(--brand-primary)">
                      {article.title}
                    </h2>
                    <p className="measure text-(--text-muted)">{article.description}</p>
                  </div>
                  <ArrowRight
                    className="size-5 shrink-0 text-(--brand-primary) transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </RevealItem>
            ))}
          </Reveal>
        ) : (
          <div className="flex max-w-2xl flex-col gap-4">
            <h2 className="display-md text-(--brand-deep)">The First Guides Are Being Written</h2>
            <p className="measure text-(--text-muted)">
              I am putting the first few together now. Until they are up, the{" "}
              <Link href="/method" className="link-quiet font-semibold text-(--brand-primary)">
                method page
              </Link>{" "}
              explains how I work, and the{" "}
              <Link href="/services" className="link-quiet font-semibold text-(--brand-primary)">
                services page
              </Link>{" "}
              covers what I do.
            </p>
          </div>
        )}
      </Section>

      <CtaBand
        title="Have A Question I Have Not Covered?"
        lead="Ask me on a free call. If enough owners ask the same thing, it becomes a guide."
      />
    </>
  );
}
