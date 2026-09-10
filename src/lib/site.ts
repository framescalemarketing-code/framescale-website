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
  jobTitle: "Small Business Consultant",
  alumniOf: "University of California, Riverside",
  credential: "Master of Business Administration, Marketing Concentration",
} as const;

/** The registered practice. Jonathan is the entity buyers search for; this is what he runs. */
export const practice = {
  name: "FrameScale Inc",
  shortName: "FrameScale",
} as const;

/** Geography. No public address exists, so this is a service area, not a storefront. */
export const location = {
  city: "San Diego",
  region: "CA",
  regionName: "California",
  country: "US",
  /** Drives `areaServed` in JSON-LD and the service-area copy in the footer. */
  areaServed: [
    "San Diego",
    "La Jolla",
    "Carlsbad",
    "Encinitas",
    "Del Mar",
    "Poway",
    "Chula Vista",
    "Oceanside",
    "Escondido",
    "Coronado",
  ],
  /** The area the listed cities sit in. Used by the schema `containedInPlace`. */
  serviceArea: "San Diego County",
  /**
   * The wider label used in prose. Jonathan takes work across the region and
   * drives to it, so the copy says so; the schema keeps the county because
   * that is what the named cities are actually in.
   */
  serviceRegion: "Southern California",
} as const;

export const site = {
  name: principal.displayName,
  shortName: principal.fullName,
  tagline: `${principal.jobTitle}, ${location.city} and ${location.serviceRegion}`,
  description:
    `I'm ${principal.displayName}, a small business consultant in ${location.city}. I find out what's holding ` +
    "your business back, then I fix it with you: the numbers, the plan, the website, and getting found on Google.",
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
  /** Anchor for the inline contact form, which appears at the foot of the marketing pages. */
  contactAnchor: "#contact",
  /** The booking page. See `bookingLive` for whether the calls to action point at it yet. */
  bookingPath: "/book",
  social: {
    /** The company page. `Person.sameAs` uses the personal profile below. */
    linkedin: "https://www.linkedin.com/company/framescaleinc",
    linkedinPersonal: "https://www.linkedin.com/in/jmejia96/",
    /** Kept for reference only. Rendered nowhere and left out of the entity graph. */
    fiverr: "https://www.fiverr.com/s/xX8GAv4",
  },
} as const;

/**
 * Whether "Book A Free Call" sends people to the booking page or to the
 * message form. The page needs the Google Calendar credentials from
 * `.env.example` in production before it can take a booking, so this stays
 * false until they are in place and is flipped in a commit of its own.
 */
export const bookingLive = false;

/** One set of labels, so the same action reads the same everywhere. */
export const ctaLabels = {
  book: "Book A Free Call",
  call: "Call",
} as const;

export const mainNav = [
  { label: "Services", href: "/services" },
  { label: "Optical", href: "/optical" },
  { label: "About", href: "/about" },
] as const;

export const footerLinks = {
  Site: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Optical", href: "/optical" },
    { label: "About", href: "/about" },
    { label: "Contact", href: `/${site.contactAnchor}` },
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

/** Pages that render an inline `#contact` section at their foot. */
const PAGES_WITH_CONTACT_SECTION = new Set(["/", "/services", "/optical", "/about"]);

/**
 * Resolve the right contact link for the page the visitor is currently on.
 * On a page that has its own form, scroll to it. On the legal pages and the
 * 404, which have no form, send them to the home page section instead.
 */
export function contactHrefFor(pathname: string): string {
  return PAGES_WITH_CONTACT_SECTION.has(pathname)
    ? site.contactAnchor
    : `/${site.contactAnchor}`;
}

/** Where a "Book A Free Call" button goes: the booking page once it is live, the form until then. */
export function bookingHrefFor(pathname: string): string {
  return bookingLive ? site.bookingPath : contactHrefFor(pathname);
}
