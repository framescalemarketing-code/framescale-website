import { getPublishedInsights } from "@/content/insights";
import { caseStudyMeta, caseStudyPath, onSightApproved } from "@/content/onsight";

/** Public site hostname (no scheme, no path). Drives `url`, inbox, and noreply defaults. */
const SITE_PUBLIC_HOSTNAME = "framescalemarketing.com";
/** Inbox local part for the public contact address (must match DNS / Resend setup). */
const SITE_CONTACT_MAILBOX_LOCAL = "framescalemarketing";

/** Renders in the nav, every <h1>, all title tags, and `Person.name` in JSON-LD. */
const PRINCIPAL_LAST_NAME = "Mejia";

/** The person the site is about. Everything else is the practice he runs. */
export const principal = {
  firstName: "Jonathan",
  lastName: PRINCIPAL_LAST_NAME,
  /** "Jonathan Mejia" - used wherever a bare legal name is needed (schema `name`). */
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  /** Post-nominal, rendered after the name and mapped to `Person.honorificSuffix`. */
  suffix: "MBA",
  /** "Jonathan Mejia, MBA" - the display form used in nav, headings, and footer. */
  get displayName() {
    return `${this.fullName}, ${this.suffix}`;
  },
  jobTitle: "Optical Practice Marketing Consultant",
  alumniOf: "University of California, Riverside",
  credential: "Master of Business Administration, Marketing Concentration",
} as const;

/** The registered practice. Jonathan is the entity buyers search for; this is what he runs. */
export const practice = {
  name: "FrameScale Inc",
  shortName: "FrameScale",
} as const;

/**
 * Geography. The practice is remote and national, so there is deliberately no
 * `city` here at all. The earlier single-city framing capped the audience at one
 * metro while naming a city the practice does not operate from, and a service
 * area business cannot rank locally in a metro it has no presence in. The niche
 * travels and the geography does not, so optical is the positioning and the
 * address carries region and country only.
 */
export const location = {
  region: "CA",
  regionName: "California",
  country: "US",
  /** Drives `areaServed` in JSON-LD. */
  areaServed: "United States",
  /** Human-readable form for prose. */
  serviceArea: "the United States",
} as const;

export const site = {
  name: principal.displayName,
  shortName: principal.fullName,
  tagline: "Marketing for independent optical practices",
  /**
   * The highest-leverage string on the site. It feeds root metadata, the OG and
   * Twitter cards, `WebSite.description`, and `ProfessionalService.description`,
   * so the optical claim has to lead here before it leads anywhere else. Kept
   * near 180 characters and front-loaded, because search results truncate.
   */
  description:
    `I am ${principal.displayName}, a marketing consultant for independent optical practices. I came up from ` +
    "the lab to the sales floor, and you work with me directly.",
  /** Full marketing origin, derived from `SITE_PUBLIC_HOSTNAME`. */
  url: `https://${SITE_PUBLIC_HOSTNAME}`,
  /** Hostname only (no scheme), for `robots.txt` Host and similar. */
  hostname: SITE_PUBLIC_HOSTNAME,
  email: `${SITE_CONTACT_MAILBOX_LOCAL}@${SITE_PUBLIC_HOSTNAME}`,
  /** Default transactional `from` when `RESEND_NOREPLY_FROM` is unset (must match a verified Resend domain). */
  noreplyFrom: `noreply@${SITE_PUBLIC_HOSTNAME}`,
  phone: "(916) 520-4553",
  /** E.164 form for `tel:` links and schema. Must stay in sync with `phone`. */
  phoneHref: "+19165204553",
  locale: "en_US",
  ogImage: "/opengraph-image",
  twitterImage: "/twitter-image",
  /** The message form lives on its own page. */
  contactPath: "/contact",
  /**
   * Id carried by the closing call to action band on every marketing page. Old
   * links of the form `/#contact` from emails and ads keep landing on something.
   */
  contactAnchor: "#contact",
  /** The booking page. See `bookingLive` for whether the calls to action point at it yet. */
  bookingPath: "/book",
  social: {
    /** The practice page. Anchors the ProfessionalService entity. */
    linkedin: "https://www.linkedin.com/company/framescaleinc",
    /** The personal profile. It already ranks for the name, so it anchors the Person entity. */
    linkedinPersonal: "https://www.linkedin.com/in/jmejia96/",
    /** Kept for reference only. Rendered nowhere and left out of the entity graph. */
    fiverr: "https://www.fiverr.com/s/xX8GAv4",
  },
} as const;

/**
 * Insights stays out of the nav and footer until the first article is
 * published, so no visitor lands on an empty page.
 */
export const hasPublishedInsights = getPublishedInsights().length > 0;
const insightsLink = hasPublishedInsights ? ([{ label: "Insights", href: "/insights" }] as const) : [];

/** The On-Sight case study joins the footer only while its switch in `src/content/onsight.ts` is on. */
const caseStudyLink = onSightApproved
  ? ([{ label: caseStudyMeta.linkLabel, href: caseStudyPath }] as const)
  : [];

/**
 * Whether "Book A Free Call" sends people to the booking page or to the
 * message form. The page needs a calendar to read from (the Google service
 * account, or the private iCal feed URL; see `.env.example`) before it can
 * offer a time, and shows the phone and email instead until then.
 */
export const bookingLive = true;

/** One set of labels, so the same action reads the same everywhere. */
export const ctaLabels = {
  book: "Book A Free Call",
  call: "Call",
} as const;

export const mainNav = [
  { label: "Optical", href: "/optical-marketing" },
  { label: "Services", href: "/services" },
  { label: "Method", href: "/method" },
  { label: "About", href: "/about" },
  ...insightsLink,
] as const;

export const footerLinks = {
  Site: [
    { label: "Home", href: "/" },
    { label: "Optical", href: "/optical-marketing" },
    { label: "Services", href: "/services" },
    { label: "Method", href: "/method" },
    { label: "About", href: "/about" },
    ...caseStudyLink,
    ...insightsLink,
    ...(bookingLive ? [{ label: ctaLabels.book, href: site.bookingPath }] : []),
    { label: "Contact", href: site.contactPath },
  ],
  Services: [
    { label: "Strategy Before Spending", href: "/services#strategy" },
    { label: "A Website That Books Appointments", href: "/services#websites" },
    { label: "Search And AI Visibility", href: "/services#local-seo" },
    { label: "Reports You Can Read", href: "/services#analytics" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Cookie Policy", href: "/cookie-policy" },
    { label: "California Privacy Notice", href: "/california-privacy" },
    { label: "Your Privacy Choices", href: "/california-privacy#privacy-choices" },
    { label: "Accessibility Statement", href: "/accessibility" },
    { label: "Terms of Service", href: "/terms" },
  ],
} as const;

/** Where a "Book A Free Call" button goes: the booking page once it is live, the form until then. */
export function bookingHrefFor(): string {
  return bookingLive ? site.bookingPath : site.contactPath;
}
