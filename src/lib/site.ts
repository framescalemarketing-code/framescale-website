export const site = {
  name: "FrameScale Inc",
  shortName: "FrameScale",
  tagline:
    "Full-stack growth marketing strategy and execution for small to mid-size businesses.",
  description:
    "FrameScale combines research-driven marketing strategy with full-stack execution for growing businesses across healthcare, retail, and professional services.",
  url: "https://framescalemarketing.com",
  email: "hello@framescalemarketing.com",
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
  { label: "Healthcare", href: "/industries/healthcare", description: "Optical, medical, dental, specialty" },
  { label: "Retail & E-commerce", href: "/industries/retail", description: "Stores, brands, online commerce" },
  { label: "Professional Services", href: "/industries/professional-services", description: "Legal, accounting, consulting" },
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
    { label: "Contact", href: "/contact" },
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
