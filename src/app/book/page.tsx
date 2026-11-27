import type { Metadata } from "next";
import { BookingSection } from "@/components/sections/BookingSection";
import { PageHero } from "@/components/sections/Hero";
import { booking } from "@/content/booking";
import { buildBreadcrumbGraph, buildWebPageGraph, jsonLdProps } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/metadata";
import { bookingLive, ctaLabels } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: ctaLabels.book,
  description: "Pick a time and tell me about your practice. We will talk through where to start.",
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
          buildWebPageGraph({
            type: "WebPage",
            path: "/book",
            name: ctaLabels.book,
            description: String(metadata.description),
          }),
        )}
      />
      <script
        {...jsonLdProps(
          buildBreadcrumbGraph([
            { name: "Home", path: "/" },
            { name: ctaLabels.book, path: "/book" },
          ]),
        )}
      />

      <PageHero headline={booking.headline} lead={booking.lead} />
      <BookingSection />
    </>
  );
}
