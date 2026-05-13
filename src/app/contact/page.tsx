import type { Metadata } from "next";
import { ContactPage } from "@/components/design-pages/ContactPage";

const title = "Contact FrameScale";
const description =
  "Book a free 30-minute intro call. Share goals and constraints, get candid feedback, and leave with an honest next step.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title, description, url: "/contact", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function Contact() {
  return <ContactPage />;
}
