import type { Metadata } from "next";
import { BookingSection } from "@/components/sections/BookingSection";
import { buildBreadcrumbGraph, jsonLdProps } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/metadata";
import { bookingLive, ctaLabels } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: ctaLabels.book,
  description: "Half an hour on the phone. Pick a time, tell me what's going on, and leave knowing what I'd do first.",
  path: "/book",
  // Kept out of the index until the calendar credentials are in place and
  // the calls to action point here.
  ...(bookingLive ? {} : { robots: { index: false, follow: true } }),
});

export default function BookPage() {
  return (
    <>
      <script
        {...jsonLdProps(
          buildBreadcrumbGraph([
            { name: "Home", path: "/" },
            { name: ctaLabels.book, path: "/book" },
          ]),
        )}
      />
      <BookingSection />
    </>
  );
}
