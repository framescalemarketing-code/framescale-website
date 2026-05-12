import type { Metadata } from "next";
import { AboutPage } from "@/components/design-pages/AboutPage";

const title = "About FrameScale";
const description =
  "Principal-led growth marketing with business-school depth. Research before spend, custom web, and teaching built in for healthcare, retail, and professional services.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: { title, description, url: "/about", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function About() {
  return <AboutPage />;
}
