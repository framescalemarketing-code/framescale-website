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

/**
 * Every indexable route, and the single source for `/sitemap.xml`. Keep in sync
 * with the App Router pages under `src/app`. The footer builds its own links
 * from `footerLinks` in `src/lib/site.ts` and does not read this.
 */
export const SITEMAP_ENTRIES: SitemapEntry[] = [
  { path: "", priority: 1.0, changeFrequency: "weekly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/optical", priority: 0.85, changeFrequency: "monthly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/cookie-policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/california-privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/accessibility", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
];
