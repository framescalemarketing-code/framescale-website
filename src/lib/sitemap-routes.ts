import { getPublishedInsights } from "@/content/insights";
import { caseStudyPath, onSightApproved } from "@/content/onsight";
import { bookingLive } from "@/lib/site";

export type SitemapChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

export type SitemapEntry = {
  /** Path for `<loc>` (empty string for home). */
  path: string;
  changeFrequency: SitemapChangeFrequency;
  priority: number;
};

const publishedInsights = getPublishedInsights();

/**
 * Every indexable route, and the single source for `/sitemap.xml`. Keep in sync
 * with the App Router pages under `src/app`. The footer builds its own links
 * from `footerLinks` in `src/lib/site.ts` and does not read this. `/book`
 * joins the list once the calendar behind it is live.
 */
export const SITEMAP_ENTRIES: SitemapEntry[] = [
  { path: "", priority: 1.0, changeFrequency: "weekly" },
  { path: "/optical-marketing", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  ...(bookingLive ? [{ path: "/book", priority: 0.9, changeFrequency: "monthly" as const }] : []),
  { path: "/method", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  // The case study is a 404 while `onSightApproved` is false, so it only enters the sitemap while the switch is on.
  ...(onSightApproved ? [{ path: caseStudyPath, priority: 0.7, changeFrequency: "monthly" as const }] : []),
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
  // /insights is `noindex` until an article is published, so it only enters the
  // sitemap together with its first article. Drafts never appear here.
  ...(publishedInsights.length > 0
    ? [
        { path: "/insights", priority: 0.6, changeFrequency: "weekly" } satisfies SitemapEntry,
        ...publishedInsights.map(
          (article) =>
            ({ path: `/insights/${article.slug}`, priority: 0.6, changeFrequency: "monthly" }) satisfies SitemapEntry,
        ),
      ]
    : []),
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/cookie-policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/california-privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/accessibility", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
];
