import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
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
import { practice, principal, site } from "@/lib/site";

/**
 * Display face: Bricolage Grotesque, with its optical-size and width axes so
 * headlines can be set tight. Text face: Hanken Grotesk. Both are exposed as
 * CSS variables that `--font-headline`, `--font-ui` and `--font-body` in
 * globals.css read.
 */
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
  variable: "--font-bricolage",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

/**
 * The site has no dark theme: the paper tone in globals.css is the whole
 * light palette. Declaring `light dark` told the browser otherwise, so on a
 * machine set to dark mode the UA painted form fields, the industry `<select>`,
 * and the scrollbar dark against a light page. One theme colour, matching
 * `--background`, for the same reason.
 */
export const viewport: Viewport = {
  themeColor: "#f3f7f7",
  colorScheme: "light",
};

/**
 * No `openGraph.images` or `twitter.images` here: the `opengraph-image.tsx`
 * file in this directory and in each route segment supplies them, hashed.
 */
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${principal.displayName} | ${principal.jobTitle}`,
    template: `%s | ${principal.displayName}`,
  },
  description: site.description,
  keywords: [
    "optical practice marketing",
    "optometry practice marketing",
    "eyewear retail marketing",
    "marketing for optometrists",
    "independent optical practice growth",
    "optical practice SEO",
    "optical practice website design",
    "eyecare marketing consultant",
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
    title: `${principal.displayName} | ${principal.jobTitle}`,
    description: site.description,
    url: site.url,
    siteName: practice.name,
    locale: site.locale,
    type: "website",
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: `${principal.displayName}, ${principal.jobTitle}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${principal.displayName} | ${principal.jobTitle}`,
    description: site.description,
    images: [
      {
        url: site.twitterImage,
        alt: `${principal.displayName}, ${principal.jobTitle}`,
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
    <html lang="en" className={`${bricolage.variable} ${hanken.variable}`}>
      <head>
        {GA_MEASUREMENT_ID ? (
          <>
            {/* Consent Mode needs a default on the page before gtag.js runs.
                iubenda sends the `update` when the visitor accepts or rejects;
                without a default already in place, GA can initialise with
                storage granted in the gap before the widget loads. */}
            <Script id="consent-default" strategy="beforeInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('consent', 'default', {
                  ad_storage: 'denied',
                  ad_user_data: 'denied',
                  ad_personalization: 'denied',
                  analytics_storage: 'denied',
                  functionality_storage: 'granted',
                  security_storage: 'granted',
                  wait_for_update: 500
                });
              `}
            </Script>
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
        {/* The brand fonts are self-hosted by next/font at build time, so no
            request goes to Google at runtime. Only Turnstile needs a warm-up. */}
        <link rel="preconnect" href="https://challenges.cloudflare.com" />
        <link rel="dns-prefetch" href="https://challenges.cloudflare.com" />

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
