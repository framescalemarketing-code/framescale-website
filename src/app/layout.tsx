import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navigation } from "@/components/design/Navigation";
import { Footer } from "@/components/design/Footer";
import { MotionProvider } from "@/components/design/MotionProvider";
import { ScrollProgress } from "@/components/design/ScrollProgress";
import { StickyCallCTA } from "@/components/design/StickyCallCTA";
import { PageTransition } from "@/components/design/PageTransition";
import { AccessibilityWidget } from "@/components/design/AccessibilityWidget";
import { GAEventTracker } from "@/components/design/GAEventTracker";
import { site } from "@/lib/site";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";
import { iubenda } from "@/lib/iubenda";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

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
      </head>
      <body className="min-h-dvh bg-background text-foreground antialiased">
        <a
          href="#main-content"
          className="skip-to-content sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-(--brand-primary) focus:px-4 focus:py-2 focus:font-ui focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        
        {/* IUBENDA CONFIG - BEFORE INTERACTIVE (runs before hydration) */}
        <Script id="iubenda-cs-config" strategy="beforeInteractive">
          {`
            window._iub = window._iub || [];
            window._iub.csConfiguration = {
              siteId: ${iubenda.siteId},
              cookiePolicyId: ${iubenda.policyIdNumber},
              lang: "en",
              enableGdpr: true,
              gdprAppliesGlobally: true,
              enableUspr: true,
              usPreferencesWidgetDisplay: false,
              googleConsentMode: true,
              perPurposeConsent: false,
              floatingPreferencesButtonDisplay: "bottom-right",
              startOnDomReady: true,
              askConsentAtCookiePolicyUpdate: true,
              cookiePolicyInOtherWindow: true,
              storage: { useSiteId: true },
              callback: {
                onPreferenceExpressed: function(preference) {
                  if (!preference || preference.consent !== false || window.__framescaleIubendaUsprSyncing) {
                    return;
                  }

                  window.__framescaleIubendaUsprSyncing = true;
                  window.setTimeout(function() {
                    window._iub.cs.api.setPreferences({
                      consent: false,
                      uspr: { s: false, sh: false, adv: false },
                      ccpa: "1YY-"
                    }, true, false);
                    window.__framescaleIubendaUsprSyncing = false;
                  }, 0);
                },
                onConsentRejected: function() {
                  var preferences = window._iub.cs.api.getPreferences();
                  if (preferences && preferences.consent === false && !window.__framescaleIubendaUsprSyncing) {
                    window.__framescaleIubendaUsprSyncing = true;
                    window._iub.cs.api.setPreferences({
                      consent: false,
                      uspr: { s: false, sh: false, adv: false },
                      ccpa: "1YY-"
                    }, true, false);
                    window.__framescaleIubendaUsprSyncing = false;
                  }
                }
              },
              banner: {
                position: "float-top-center",
                acceptButtonDisplay: true,
                rejectButtonDisplay: true,
                customizeButtonDisplay: true,
                closeButtonDisplay: false,
                showTitle: false,
                listPurposes: false,
                showPurposesToggles: false,
                explicitWithdrawal: true,
                applyStyles: true,
                acceptButtonCaption: "Accept all",
                backgroundColor: "#ffffff",
                textColor: "#264653",
                acceptButtonColor: "#17788e",
                acceptButtonCaptionColor: "#ffffff",
                rejectButtonCaption: "Reject all",
                rejectButtonColor: "#f7f9fa",
                rejectButtonCaptionColor: "#264653",
                customizeButtonCaption: "Learn more and customize",
                customizeButtonColor: "#f7f9fa",
                customizeButtonCaptionColor: "#264653"
              }
            };
          `}
        </Script>
        
        {/* IUBENDA WIDGET LOADER - AFTER INTERACTIVE */}
        <Script
          src={`https://embeds.iubenda.com/widgets/${iubenda.widgetId}.js`}
          strategy="afterInteractive"
        />
        
        <GAEventTracker />
        <MotionProvider>
          <ScrollProgress />
          <Navigation />
          <PageTransition>{children}</PageTransition>
          <Footer />
          <StickyCallCTA />
          <AccessibilityWidget />
        </MotionProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
