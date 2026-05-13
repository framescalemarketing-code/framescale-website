import type { Metadata } from "next";
import { BookPage } from "@/components/design-pages/BookPage";

const title = "Book an intro call";
const description =
  "Schedule a free 30-minute intro call with FrameScale. Share goals and constraints, and leave with a clear next step.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/book" },
  openGraph: { title, description, url: "/book", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function Book() {
  return <BookPage />;
}
