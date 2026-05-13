import { industries, site } from "@/lib/site";

export type SitemapSection = "main" | "industries" | "legal";

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
  label: string;
  section: SitemapSection;
  changeFrequency: SitemapChangeFrequency;
  priority: number;
};

const SECTION_TITLE: Record<SitemapSection, string> = {
  main: "Main",
  industries: "Industries",
  legal: "Legal",
};

export const SITEMAP_SECTION_ORDER: SitemapSection[] = ["main", "industries", "legal"];

/**
 * All indexable marketing routes. Single source for `/sitemap.xml` and the `/sitemap` HTML page.
 * Keep in sync with each App Router `page.tsx` under `src/app` (omit API routes and static assets).
 */
export const SITEMAP_ENTRIES: SitemapEntry[] = [
  { path: "", label: "Home", section: "main", priority: 1.0, changeFrequency: "weekly" },
  { path: "/about", label: "About", section: "main", priority: 0.8, changeFrequency: "monthly" },
  { path: "/process", label: "Process", section: "main", priority: 0.8, changeFrequency: "monthly" },
  { path: site.bookingPath, label: "Book intro call", section: "main", priority: 0.95, changeFrequency: "weekly" },
  { path: "/contact", label: "Contact", section: "main", priority: 0.9, changeFrequency: "monthly" },
  { path: "/sitemap", label: "Sitemap", section: "main", priority: 0.5, changeFrequency: "monthly" },
  ...industries.map((ind) => ({
    path: ind.href,
    label: ind.label,
    section: "industries" as const,
    priority: 0.9,
    changeFrequency: "monthly" as const,
  })),
  { path: "/privacy", label: "Privacy Policy", section: "legal", priority: 0.3, changeFrequency: "yearly" },
  { path: "/california-privacy", label: "California Privacy Notice", section: "legal", priority: 0.3, changeFrequency: "yearly" },
  { path: "/cookie-policy", label: "Cookie Policy", section: "legal", priority: 0.3, changeFrequency: "yearly" },
  { path: "/accessibility", label: "Accessibility Statement", section: "legal", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", label: "Terms of Service", section: "legal", priority: 0.3, changeFrequency: "yearly" },
];

export function getSitemapPageSections(): { title: string; links: { label: string; href: string }[] }[] {
  return SITEMAP_SECTION_ORDER.map((section) => ({
    title: SECTION_TITLE[section],
    links: SITEMAP_ENTRIES.filter((e) => e.section === section).map((e) => ({
      label: e.label,
      href: e.path === "" ? "/" : e.path,
    })),
  }));
}