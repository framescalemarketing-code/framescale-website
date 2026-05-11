import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/design/Navigation";
import { Footer } from "@/components/design/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "FrameScale Inc",
    template: "%s | FrameScale Inc",
  },
  description:
    "FrameScale combines research-driven marketing strategy with full-stack execution for growing businesses that need practical strategy, modern web systems, and measurable outcomes.",
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-white antialiased">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
