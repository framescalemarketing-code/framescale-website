import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "FrameScale Inc",
    template: "%s | FrameScale Inc",
  },
  description:
    "FrameScale gives small and mid-size businesses the structured marketing framework they need to scale \u2014 strategy, analytics, and execution by one dedicated expert.",
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
      <body className="min-h-dvh bg-white font-sans text-brand-ink antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
