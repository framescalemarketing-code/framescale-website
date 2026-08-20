import type { Metadata, Viewport } from "next";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTABar } from "@/components/layout/MobileCTABar";
import { MotionProvider } from "@/components/system/MotionProvider";
import { AccessibilityWidget } from "@/components/system/AccessibilityWidget";
import { GAEventTracker } from "@/components/system/GAEventTracker";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";
import { iubenda } from "@/lib/iubenda";
import { buildIubendaConsentConfigScript } from "@/lib/iubenda-consent-config";
import { getTurnstileSiteKeyForServer } from "@/lib/cloudflare-turnstile";
import { buildSiteGraph, jsonLdProps } from "@/lib/schema";
import { location, principal, site } from "@/lib/site";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1f24" },
  ],
  colorScheme: "light dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${principal.displayName} | ${principal.jobTitle} in ${location.city}`,
    template: `%s | ${principal.displayName}`,
  },
  description: site.description,
  keywords: [
    `business growth consultant ${location.city}`,
    `marketing consultant ${location.city}`,
    `${location.city} small business consultant`,
    "growth strategy consultant",
    "local SEO consultant",
    "Google Business Profile management",
    "website conversion optimization",
    "marketing analytics consultant",
  ],
  category: "business",
  creator: principal.fullName,
  publisher: principal.fullName,
  applicationName: principal.fullName,
  authors: [{ name: principal.fullName, url: `${site.url}/about` }],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: `${principal.displayName} | ${principal.jobTitle} in ${location.city}`,
    description: site.description,
    url: site.url,
    siteName: principal.displayName,
    locale: site.locale,
    type: "website",
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: `${principal.displayName}, ${principal.jobTitle} in ${location.city}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${principal.displayName} | ${principal.jobTitle} in ${location.city}`,
    description: site.description,
    images: [
      {
        url: site.twitterImage,
        alt: `${principal.displayName}, ${principal.jobTitle} in ${location.city}`,
      },
    ],
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
  const turnstileSiteKey = getTurnstileSiteKeyForServer();

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
        {/* eslint-disable @next/next/google-font-preconnect, @next/next/no-page-custom-font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://challenges.cloudflare.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://challenges.cloudflare.com" />

        {/* The brand fonts are loaded by an @import inside globals.css, which
            the browser cannot discover until that stylesheet has downloaded and
            parsed. Preloading the same URL starts the request in parallel; the
            @import then resolves from cache. Preload rather than a stylesheet
            link, which would be render-blocking and delay first paint. The
            @import stays because `npm run brand:check` treats it as part of the
            brand contract. */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
        />
        {/* eslint-enable @next/next/google-font-preconnect, @next/next/no-page-custom-font */}

        {/* Scroll reveals are serialized into the HTML as inline opacity:0.
            If the bundle never runs, the page would render mostly blank, so
            reveal them unconditionally when scripting is unavailable. */}
        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html: '[style*="opacity:0"]{opacity:1!important;transform:none!important}',
            }}
          />
        </noscript>
      </head>
      <body className="min-h-dvh bg-background text-foreground antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-(--brand-primary) focus:px-4 focus:py-2 focus:font-ui focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>

        {/* One entity graph for the whole site: WebSite, ProfessionalService,
            and the Person the site is actually about. */}
        <script {...jsonLdProps(buildSiteGraph())} />

        {/* IUBENDA CONFIG - BEFORE INTERACTIVE (runs before hydration) */}
        <Script id="iubenda-cs-config" strategy="beforeInteractive">
          {buildIubendaConsentConfigScript()}
        </Script>

        {/* IUBENDA WIDGET LOADER - AFTER INTERACTIVE */}
        <Script
          src={`https://embeds.iubenda.com/widgets/${iubenda.widgetId}.js`}
          strategy="afterInteractive"
        />
        {turnstileSiteKey ? (
          <Script
            src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
            strategy="afterInteractive"
          />
        ) : null}

        <GAEventTracker />
        <MotionProvider>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <MobileCTABar />
          <AccessibilityWidget />
        </MotionProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
