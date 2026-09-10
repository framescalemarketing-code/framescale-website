import type { FaqItem } from "@/content/faq";
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
  profilePage: `${site.url}/about#profilepage`,
} as const;

const HEADSHOT_URL = `${site.url}/photos/founder/jonathan-about.jpg`;

const areaServed = location.areaServed.map((city) => ({
  "@type": "City",
  name: city,
  containedInPlace: {
    "@type": "AdministrativeArea",
    name: `${location.serviceArea}, ${location.regionName}`,
  },
}));

/**
 * ProfessionalService rather than a bare LocalBusiness. There is no public
 * street address, and claiming a fake one is both dishonest and a ranking
 * liability, so the address stops at the city.
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
    image: HEADSHOT_URL,
    logo: {
      "@type": "ImageObject",
      url: `${site.url}/brand/logo-512.png`,
      width: 512,
      height: 512,
    },
    founder: { "@id": SCHEMA_IDS.person },
    employee: { "@id": SCHEMA_IDS.person },
    areaServed,
    priceRange: "$$",
    sameAs: [site.social.linkedin],
    address: {
      "@type": "PostalAddress",
      addressLocality: location.city,
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

/**
 * The primary entity. This is what should surface for a search on the name,
 * so `sameAs` points at the personal profile, not the company page.
 */
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
    image: HEADSHOT_URL,
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
      "Small business consulting",
      "Small business marketing",
      "Business growth strategy",
      "Market and competitor research",
      "Local SEO",
      "Google Business Profile optimization",
      "Website conversion optimization",
      "Paid search and paid social advertising",
    ],
    workLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: location.city,
        addressRegion: location.region,
        addressCountry: location.country,
      },
    },
    sameAs: [site.social.linkedinPersonal],
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

/**
 * /about as the page about the person. This is the node search engines key a
 * person's knowledge panel off, and it ties the page back into the site graph.
 */
export function buildProfilePageGraph() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": SCHEMA_IDS.profilePage,
    url: `${site.url}/about`,
    name: `About ${principal.displayName}`,
    mainEntity: { "@id": SCHEMA_IDS.person },
    isPartOf: { "@id": SCHEMA_IDS.website },
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
      // The home item matches the canonical, which has no trailing slash.
      item: crumb.path === "/" ? site.url : `${site.url}${crumb.path}`,
    })),
  };
}

/** Serializable props for a <script type="application/ld+json"> tag. */
export function jsonLdProps(schema: unknown) {
  return {
    type: "application/ld+json",
    dangerouslySetInnerHTML: { __html: JSON.stringify(schema) },
  } as const;
}
