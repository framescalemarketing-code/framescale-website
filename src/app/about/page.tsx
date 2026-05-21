import type { Metadata } from "next";
import { AboutPage } from "@/components/design-pages/AboutPage";

const title = "About FrameScale";
const description =
  "Meet Jonathan and see how FrameScale works: research before spend, clear reporting, custom websites, and one point person from start to finish.";

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
