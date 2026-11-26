import type { FaqItem } from "@/content/faq";
import { opticalSchemaDescription } from "@/content/optical";
import { services } from "@/content/services";
import { location, practice, principal, site } from "@/lib/site";

/**
 * Stable @id anchors. Nodes reference each other by these rather than being
 * nested, which is what lets search engines and answer engines resolve the
 * whole thing as one entity graph instead of unrelated fragments.
 */
export const SCHEMA_IDS = {
  website: `${site.url}/#website`,
  person: `${site.url}/#person`,
  practice: `${site.url}/#practice`,
} as const;

/**
 * One Country node rather than a list of cities. The practice works remotely
 * with optical practices anywhere, so enumerating metros would claim a local
 * presence that does not exist.
 */
const areaServed = {
  "@type": "Country",
  name: location.areaServed,
};

/**
 * Deliberately ProfessionalService and not LocalBusiness. LocalBusiness expects
 * a customer-accessible street address; there isn't one, and claiming a fake
 * address is both dishonest and a real ranking liability.
 */
function practiceNode() {
  return {
    "@type": "ProfessionalService",
    "@id": SCHEMA_IDS.practice,
    name: practice.name,
    alternateName: practice.shortName,
    url: site.url,
    email: site.email,
    telephone: site.phoneHref,
    description: site.description,
    founder: { "@id": SCHEMA_IDS.person },
    employee: { "@id": SCHEMA_IDS.person },
    areaServed,
    priceRange: "$$",
    sameAs: [site.social.linkedin],
    address: {
      "@type": "PostalAddress",
      addressRegion: location.region,
      addressCountry: location.country,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  };
}

/** The primary entity. This is what should surface for a search on the name. */
function personNode() {
  return {
    "@type": "Person",
    "@id": SCHEMA_IDS.person,
    name: principal.fullName,
    honorificSuffix: principal.suffix,
    jobTitle: principal.jobTitle,
    url: `${site.url}/about`,
    email: site.email,
    telephone: site.phoneHref,
    image: `${site.url}/photos/founder/jonathan-about.jpg`,
    worksFor: { "@id": SCHEMA_IDS.practice },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: principal.alumniOf,
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      educationalLevel: "Master's Degree",
      name: principal.credential,
    },
    knowsAbout: [
      "Optical practice marketing",
      "Eyewear retail operations",
      "Optical retail management",
      "Small business consulting",
      "Small business marketing",
      "Business growth strategy",
      "Market and competitor research",
      "Search engine optimization",
      "AI search visibility",
      "Website conversion optimization",
      "Paid search and paid social advertising",
    ],
    workLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressRegion: location.region,
        addressCountry: location.country,
      },
    },
    sameAs: [site.social.linkedinPersonal, site.social.fiverr],
  };
}

function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": SCHEMA_IDS.website,
    url: site.url,
    name: `${principal.displayName}, ${principal.jobTitle}`,
    description: site.description,
    inLanguage: "en-US",
    publisher: { "@id": SCHEMA_IDS.person },
  };
}

/** Emitted once, in the root layout. Every page inherits it. */
export function buildSiteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [websiteNode(), practiceNode(), personNode()],
  };
}

/** One Service node per pillar, provided by the person, scoped to the area. */
export function buildServicesGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": services.map((service) => ({
      "@type": "Service",
      "@id": `${site.url}/services#${service.id}-service`,
      name: service.title,
      description: service.summary,
      serviceType: service.title,
      provider: { "@id": SCHEMA_IDS.person },
      areaServed,
      url: `${site.url}/services#${service.id}`,
    })),
  };
}

/** FAQPage. The highest-value surface for AI answer engines on the site. */
export function buildFaqGraph(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildBreadcrumbGraph(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${site.url}${crumb.path}`,
    })),
  };
}

/**
 * Page-type node: AboutPage, ContactPage or plain WebPage. It tells a search or
 * answer engine what the page is for and ties it back to the site and the
 * person by @id, instead of leaving every URL as an untyped document.
 */
export function buildWebPageGraph(page: {
  type: "WebPage" | "AboutPage" | "ContactPage";
  path: string;
  name: string;
  description: string;
}) {
  const url = `${site.url}${page.path}`;
  return {
    "@context": "https://schema.org",
    "@type": page.type,
    "@id": `${url}#webpage`,
    url,
    name: page.name,
    description: page.description,
    inLanguage: "en-US",
    isPartOf: { "@id": SCHEMA_IDS.website },
    about: { "@id": SCHEMA_IDS.person },
  };
}

/**
 * Article for one Insights piece. Only emitted once an article is published,
 * because `datePublished` is a claim and a draft has no publication date.
 */
export function buildArticleGraph(article: {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
}) {
  const url = `${site.url}/insights/${article.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: article.title,
    description: article.description,
    datePublished: article.datePublished,
    mainEntityOfPage: url,
    url,
    inLanguage: "en-US",
    author: { "@id": SCHEMA_IDS.person },
    publisher: { "@id": SCHEMA_IDS.practice },
  };
}

/**
 * The vertical page's own Service node. Kept separate from `buildServicesGraph`
 * so the four general pillars and the optical positioning can move
 * independently. `audience` is what tells a search or answer engine who this is
 * for, which is the whole reason the page exists.
 */
export function buildOpticalServiceGraph() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}/optical-marketing#service`,
    name: "Optical practice marketing",
    serviceType: "Optical practice marketing",
    description: opticalSchemaDescription,
    provider: { "@id": SCHEMA_IDS.person },
    areaServed,
    url: `${site.url}/optical-marketing`,
    audience: {
      "@type": "BusinessAudience",
      name: "Independent optical practices and eyewear retailers",
    },
  };
}

/** Serializable props for a <script type="application/ld+json"> tag. */
export function jsonLdProps(schema: unknown) {
  return {
    type: "application/ld+json",
    dangerouslySetInnerHTML: { __html: JSON.stringify(schema) },
  } as const;
}
