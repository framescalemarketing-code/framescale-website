/** Public site hostname (no scheme, no path). Drives `url`, inbox, and noreply defaults. */
const SITE_PUBLIC_HOSTNAME = "framescalemarketing.com";
/** Inbox local part for the public contact address (must match DNS / Resend setup). */
const SITE_CONTACT_MAILBOX_LOCAL = "framescalemarketing";

export const site = {
  name: "FrameScale Inc",
  shortName: "FrameScale",
  tagline: "Hands-on growth marketing that teaches you to scale.",
  description:
    "Research-led strategy and custom marketing sites for owners who want clarity, not noise. SEO, Google Business Profile, analytics, and paid media led directly by the principal so you can own the systems behind the results.",
  /** Full marketing origin, derived from `SITE_PUBLIC_HOSTNAME`. */
  url: `https://${SITE_PUBLIC_HOSTNAME}`,
  /** Hostname only (no scheme), for `robots.txt` Host and similar. */
  hostname: SITE_PUBLIC_HOSTNAME,
  /** Canonical path for the live scheduling embed (`/book`). */
  bookingPath: "/book",
  email: `${SITE_CONTACT_MAILBOX_LOCAL}@${SITE_PUBLIC_HOSTNAME}`,
  /** Default transactional `from` when `RESEND_NOREPLY_FROM` is unset (must match a verified domain in Resend). */
  noreplyFrom: `noreply@${SITE_PUBLIC_HOSTNAME}`,
  phone: "(916) 520-4553",
  locale: "en_US",
  ogImage: "/opengraph-image",
  twitterImage: "/twitter-image",
  social: {
    linkedin: "https://www.linkedin.com/company/framescale",
    fiverr: "https://www.fiverr.com/s/xX8GAv4",
  },
} as const;

export const industries = [
  {
    label: "Healthcare",
    href: "/industries/healthcare",
    description: "Independent optical and eye care. Sites that prove trust when referrals look you up.",
  },
  {
    label: "Retail & E-commerce",
    href: "/industries/retail",
    description: "Hybrid and online-first brands. Message, audience, and channel aligned to margin.",
  },
  {
    label: "Professional Services",
    href: "/industries/professional-services",
    description: "Consultants and partner-led firms. Firm-grade sites and cases, not salesy lead gen.",
  },
] as const;

export const mainNav = [
  { label: "Industries", href: "/industries/healthcare", children: industries },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
] as const;

export const footerLinks = {
  Industries: [
    { label: "Healthcare", href: "/industries/healthcare" },
    { label: "Retail & E-commerce", href: "/industries/retail" },
    { label: "Professional Services", href: "/industries/professional-services" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Process", href: "/process" },
    { label: "Book a call", href: site.bookingPath },
    { label: "Contact", href: "/contact" },
    { label: "Sitemap", href: "/sitemap" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "California Privacy Notice", href: "/california-privacy" },
    { label: "Your Privacy Choices", href: "/california-privacy#privacy-choices" },
    { label: "Cookie Policy", href: "/cookie-policy" },
    { label: "Accessibility Statement", href: "/accessibility" },
    { label: "Terms of Service", href: "/terms" },
  ],
} as const;
