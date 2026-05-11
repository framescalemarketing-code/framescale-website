import type { Metadata } from "next";
import { ContactPage } from "@/components/design-pages/ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact FrameScale for a free 30-minute consultation about your growth goals.",
};

export default function Contact() {
  return <ContactPage />;
}
