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
 * `city` here at all. The previous San Diego framing capped the audience at one
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
    `I am ${principal.displayName}. I spent years in optical, from the back of the shop to managing stores. ` +
    "Now I help independent practices and eyewear retailers grow. You work with me directly, never a handoff.",
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
  /** The booking form lives on its own page. Every call to action points here. */
  contactPath: "/contact",
  /**
   * Id carried by the closing call to action band on every marketing page. Old
   * links of the form `/#contact` from emails and ads keep landing on something.
   */
  contactAnchor: "#contact",
  social: {
    /** The practice page. Anchors the ProfessionalService entity. */
    linkedin: "https://www.linkedin.com/company/framescaleinc",
    /** The personal profile. It already ranks for the name, so it anchors the Person entity. */
    linkedinPersonal: "https://www.linkedin.com/in/jmejia96/",
    fiverr: "https://www.fiverr.com/s/xX8GAv4",
  },
} as const;

export const mainNav = [
  { label: "Optical", href: "/optical-marketing" },
  { label: "Services", href: "/services" },
  { label: "Method", href: "/method" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
] as const;

export const footerLinks = {
  Site: [
    { label: "Home", href: "/" },
    { label: "Optical", href: "/optical-marketing" },
    { label: "Services", href: "/services" },
    { label: "Method", href: "/method" },
    { label: "About", href: "/about" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: site.contactPath },
  ],
  Services: [
    { label: "Figuring Out What's Wrong", href: "/services#strategy" },
    { label: "Websites That Work", href: "/services#websites" },
    { label: "Getting Found On Google", href: "/services#local-seo" },
    { label: "Ads And Straight Answers", href: "/services#analytics" },
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

/**
 * The contact link for every call to action. The form used to sit at the foot
 * of each page, so this had to know which page the visitor was on. It now lives
 * at one route, so the answer is the same everywhere.
 */
export function contactHref(): string {
  return site.contactPath;
}
