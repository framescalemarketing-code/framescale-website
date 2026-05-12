import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navigation } from "@/components/design/Navigation";
import { Footer } from "@/components/design/Footer";
import { MotionProvider } from "@/components/design/MotionProvider";
import { ScrollProgress } from "@/components/design/ScrollProgress";
import { StickyCallCTA } from "@/components/design/StickyCallCTA";
import { PageTransition } from "@/components/design/PageTransition";
import { CursorDot } from "@/components/design/CursorDot";
import { GAEventTracker } from "@/components/design/GAEventTracker";
import { site } from "@/lib/site";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

const IUBENDA_POLICY_ID = process.env.NEXT_PUBLIC_IUBENDA_POLICY_ID?.trim() || "26891202";
const IUBENDA_WIDGET_ID = "2d54165d-88d8-4b24-a956-b743f39cdc9f";

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
  sameAs: [site.social.linkedin, site.social.fiverr],
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
        {GA_MEASUREMENT_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });
              `}
            </Script>
          </>
        ) : null}
        {/* eslint-disable @next/next/google-font-preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        {/* eslint-enable @next/next/google-font-preconnect */}

        <Script src="https://cdn.iubenda.com/iubenda.js" strategy="afterInteractive" />
        <Script src={`https://embeds.iubenda.com/widgets/${IUBENDA_WIDGET_ID}.js`} strategy="afterInteractive" />
        <Script id="iubenda-cs-config" strategy="afterInteractive">
          {`
            window._iub = window._iub || [];
            window._iub.csConfiguration = {
              cookiePolicyId: ${Number(IUBENDA_POLICY_ID)},
              lang: "en",
              gdprApplies: true,
              floatingPreferencesButtonDisplay: "bottom-left",
              perPurposeConsent: true,
              askConsentAtCookiePolicyUpdate: true,
              banner: {
                position: "top",
                slideDown: true,
                acceptButtonDisplay: true,
                customizeButtonDisplay: true,
                rejectButtonDisplay: true,
                backgroundColor: "#ffffff",
                textColor: "#264653",
                fontSize: "14px",
                acceptButtonColor: "#17788e",
                acceptButtonCaptionColor: "#ffffff",
                customizeButtonColor: "#f7f9fa",
                customizeButtonCaptionColor: "#264653",
                rejectButtonColor: "#6c7a7c",
                rejectButtonCaptionColor: "#ffffff"
              }
            };
          `}
        </Script>
        <Script src="https://cdn.iubenda.com/cs/iubenda_cs.js" strategy="afterInteractive" />
      </head>
      <body className="min-h-dvh bg-background text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <GAEventTracker />
        <MotionProvider>
          <ScrollProgress />
          <CursorDot />
          <Navigation />
          <PageTransition>{children}</PageTransition>
          <Footer />
          <StickyCallCTA />
        </MotionProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
