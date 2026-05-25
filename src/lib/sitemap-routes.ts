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
  description: string;
  section: SitemapSection;
  includeInXml?: boolean;
  changeFrequency: SitemapChangeFrequency;
  priority: number;
};

type SitemapSectionContent = {
  id: SitemapSection;
  indexLabel: string;
  title: string;
  description: string;
};

const SECTION_CONTENT: Record<SitemapSection, SitemapSectionContent> = {
  main: {
    id: "main",
    indexLabel: "01",
    title: "Core Pages",
    description: "The main pages that explain FrameScale, the process, and how to get in touch.",
  },
  industries: {
    id: "industries",
    indexLabel: "02",
    title: "Industry Pages",
    description: "Focused landing pages for the kinds of businesses FrameScale helps most often.",
  },
  legal: {
    id: "legal",
    indexLabel: "03",
    title: "Policies And Notices",
    description: "The legal, privacy, accessibility, and compliance pages connected to the site.",
  },
};

export const SITEMAP_SECTION_ORDER: SitemapSection[] = ["main", "industries", "legal"];

/**
 * All indexable marketing routes. Single source for `/sitemap.xml` and the `/sitemap` HTML page.
 * Keep in sync with each App Router `page.tsx` under `src/app` (omit API routes and static assets).
 */
export const SITEMAP_ENTRIES: SitemapEntry[] = [
  {
    path: "",
    label: "Home",
    description: "The main homepage with the overview, industries, capabilities, and primary calls to action.",
    section: "main",
    priority: 1.0,
    changeFrequency: "weekly",
  },
  {
    path: "/about",
    label: "About",
    description: "Why FrameScale exists, how Jonathan works, and how the business helps owners scale.",
    section: "main",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/process",
    label: "Process",
    description: "The SCALE Method, including research, strategy, systems, and ongoing measurement.",
    section: "main",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: site.bookingPath,
    label: "Schedule A Call",
    description: "The booking page for choosing a time and starting a conversation.",
    section: "main",
    priority: 0.95,
    changeFrequency: "weekly",
  },
  {
    path: "/contact",
    label: "Contact",
    description: "The contact form and contact options for reaching out directly by email or form.",
    section: "main",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/sitemap",
    label: "Sitemap",
    description: "This full site index for browsing every important public page.",
    section: "main",
    priority: 0.5,
    changeFrequency: "monthly",
  },
  ...industries.map((ind) => ({
    path: ind.href,
    label: ind.label,
    description: ind.description,
    section: "industries" as const,
    priority: 0.9,
    changeFrequency: "monthly" as const,
  })),
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
    path: "/california-privacy#privacy-choices",
    label: "Your Privacy Choices",
    description: "The privacy choices section for California visitors, including the preferences and opt-out controls.",
    section: "legal",
    includeInXml: false,
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
    description: "The terms covering site usage, bookings, services, payments, and limitations of liability.",
    section: "legal",
    priority: 0.3,
    changeFrequency: "yearly",
  },
];

export function getSitemapPageSections() {
  return SITEMAP_SECTION_ORDER.map((section) => ({
    ...SECTION_CONTENT[section],
    links: SITEMAP_ENTRIES.filter((entry) => entry.section === section).map((entry) => ({
      label: entry.label,
      description: entry.description,
      href: entry.path === "" ? "/" : entry.path,
    })),
  }));
}
