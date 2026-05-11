import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navigation } from "@/components/design/Navigation";
import { Footer } from "@/components/design/Footer";
import { MotionProvider } from "@/components/design/MotionProvider";
import { ScrollProgress } from "@/components/design/ScrollProgress";
import { StickyCallCTA } from "@/components/design/StickyCallCTA";
import { PageTransition } from "@/components/design/PageTransition";
import { CursorDot } from "@/components/design/CursorDot";
import { site } from "@/lib/site";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1f24" },
  ],
  colorScheme: "light dark",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  email: site.email,
  telephone: site.phone,
  sameAs: [site.social.linkedin],
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "growth marketing",
    "healthcare marketing",
    "retail marketing",
    "professional services marketing",
    "marketing strategy",
    "conversion optimization",
    "marketing systems",
    "small business marketing",
  ],
  alternates: {
    canonical: site.url,
  },
  category: "business",
  creator: site.name,
  publisher: site.name,
  applicationName: site.shortName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/favicon.svg" }],
  },
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: site.locale,
    type: "website",
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: `${site.name} - ${site.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: [site.twitterImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* eslint-disable @next/next/google-font-preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        {/* eslint-enable @next/next/google-font-preconnect */}
      </head>
      <body className="min-h-dvh bg-background text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <MotionProvider>
          <ScrollProgress />
          <CursorDot />
          <Navigation />
          <PageTransition>{children}</PageTransition>
          <Footer />
          <StickyCallCTA />
        </MotionProvider>
      </body>
    </html>
  );
}
