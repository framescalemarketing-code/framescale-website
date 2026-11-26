import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/Hero";
import { CtaBand } from "@/components/sections/CtaBand";
import { ProseBlocks } from "@/components/content/ProseBlocks";
import { Section } from "@/components/ui/Section";
import { canShowDrafts, getInsightArticle, insightArticles } from "@/content/insights";
import { buildArticleGraph, buildBreadcrumbGraph, jsonLdProps } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/metadata";
import { principal } from "@/lib/site";

type PageProps = { params: Promise<{ slug: string }> };

/** Every article gets a route. Whether a draft renders is decided at build time below. */
export const dynamicParams = false;

export function generateStaticParams() {
  return insightArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsightArticle(slug);
  if (!article || (!article.published && !canShowDrafts())) return {};

  return buildPageMetadata({
    title: article.title,
    absoluteTitle: true,
    description: article.description,
    path: `/insights/${article.slug}`,
    ...(article.published ? {} : { robots: { index: false, follow: false } }),
  });
}

export default async function InsightArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getInsightArticle(slug);

  // A draft is a 404 on the production deployment. Locally and on previews it
  // renders with a visible label and `noindex`, so it can be read and edited.
  if (!article || (!article.published && !canShowDrafts())) notFound();

  return (
    <>
      {article.published && article.datePublished ? (
        <script
          {...jsonLdProps(
            buildArticleGraph({
              slug: article.slug,
              title: article.title,
              description: article.description,
              datePublished: article.datePublished,
            }),
          )}
        />
      ) : null}
      <script
        {...jsonLdProps(
          buildBreadcrumbGraph([
            { name: "Home", path: "/" },
            { name: "Insights", path: "/insights" },
            { name: article.title, path: `/insights/${article.slug}` },
          ]),
        )}
      />

      <PageHero headline={article.title} lead={article.description}>
        <p className="mt-6 font-ui text-sm text-(--text-muted)">
          By {principal.fullName}
          {article.published ? null : (
            <span className="ml-3 rounded-(--radius) border border-(--border) px-2 py-0.5 font-semibold text-(--brand-deep)">
              Draft, not published
            </span>
          )}
        </p>
      </PageHero>

      <Section size="default">
        <div>
          <ProseBlocks blocks={article.blocks} />

          <div className="rule mt-14 flex max-w-2xl flex-col gap-3 pt-8">
            <h2 className="display-sm text-(--brand-deep)">Where To Go Next</h2>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href={article.service.href} className="link-quiet font-semibold text-(--brand-primary)">
                  {article.service.label}
                </Link>
              </li>
              <li>
                <Link href="/method" className="link-quiet font-semibold text-(--brand-primary)">
                  The SCALE Method
                </Link>
              </li>
              <li>
                <Link href="/insights" className="link-quiet font-semibold text-(--brand-primary)">
                  All Guides
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <CtaBand
        title="Want To Talk It Through?"
        lead="Half an hour on the phone. Tell me about your practice and I will tell you where I would start."
      />
    </>
  );
}
