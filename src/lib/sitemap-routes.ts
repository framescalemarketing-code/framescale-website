export type SitemapSection = "main" | "legal";

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
  description: string;
  section: SitemapSection;
  includeInXml?: boolean;
  changeFrequency: SitemapChangeFrequency;
  priority: number;
};

/**
 * Every indexable route. Single source for `/sitemap.xml` and the footer.
 * Keep in sync with each App Router `page.tsx` under `src/app`.
 */
export const SITEMAP_ENTRIES: SitemapEntry[] = [
  {
    path: "",
    label: "Home",
    description: "Growth consulting for San Diego owners, with the full overview and a way to get in touch.",
    section: "main",
    priority: 1.0,
    changeFrequency: "weekly",
  },
  {
    path: "/services",
    label: "Services",
    description: "The four service areas, the SCALE Method, and current pricing.",
    section: "main",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/about",
    label: "About",
    description: "Background, credentials, and why the work is based in San Diego.",
    section: "main",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/privacy",
    label: "Privacy Policy",
    description: "The main privacy policy page with direct access to the full Iubenda-hosted policy.",
    section: "legal",
    priority: 0.3,
    changeFrequency: "yearly",
  },
  {
    path: "/cookie-policy",
    label: "Cookie Policy",
    description: "The cookie and tracking notice, with direct access to the full Iubenda-hosted policy.",
    section: "legal",
    priority: 0.3,
    changeFrequency: "yearly",
  },
  {
    path: "/california-privacy",
    label: "California Privacy Notice",
    description: "The California-specific privacy notice covering CCPA and CPRA rights.",
    section: "legal",
    priority: 0.3,
    changeFrequency: "yearly",
  },
  {
    path: "/accessibility",
    label: "Accessibility Statement",
    description: "The accessibility standards, supported use, known limits, and contact process for this site.",
    section: "legal",
    priority: 0.3,
    changeFrequency: "yearly",
  },
  {
    path: "/terms",
    label: "Terms of Service",
    description: "The terms covering site usage, services, and limitations of liability.",
    section: "legal",
    priority: 0.3,
    changeFrequency: "yearly",
  },
];
