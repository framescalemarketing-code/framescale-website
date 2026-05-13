export const site = {
  name: "FrameScale Inc",
  shortName: "FrameScale",
  tagline: "Hands-on growth marketing that teaches you to scale.",
  description:
    "Research-led strategy and custom marketing sites for owners who want clarity, not noise. SEO, Google Business Profile, analytics, and paid media led directly by the principal so you can own the systems behind the results.",
  url: "https://framescalemarketing.com",
  /** Canonical path for the live scheduling embed (`/book`). */
  bookingPath: "/book",
  email: "framescalemarketing@framescalemarketing.com",
  /** Default transactional `from` when `RESEND_NOREPLY_FROM` is unset (must match a verified domain in Resend). */
  noreplyFrom: "noreply@framescalemarketing.com",
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
    description: "Optical leads. Dental, medical, and specialty practices too.",
  },
  { label: "Retail & E-commerce", href: "/industries/retail", description: "Stores, brands, and online commerce" },
  {
    label: "Professional Services",
    href: "/industries/professional-services",
    description: "Consultants lead. Legal, accounting, and advisory firms too.",
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
