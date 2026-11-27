/**
 * Photography copy. Alt text is a user-facing string, so it lives here rather
 * than inline in JSX, same as every other line on the site. There are no
 * visible captions: Jonathan asked for them to be removed on 2026-11-26.
 *
 * The frame photographs are Jonathan's own, shot during his years in optical.
 */
export type SitePhoto = {
  src: string;
  alt: string;
};

export const framePhotos = {
  opticalHero: {
    src: "/photos/frames/cartier-panther-detail.webp",
    alt: "Cartier rimless eyeglass frame, with the engraved panther on the temple",
  },
  opticalDetail: {
    src: "/photos/frames/rayban-temple-markings.webp",
    alt: "Close view of a Ray-Ban acetate frame temple, showing the moulded size markings",
  },
  // Written and optimized, but not currently placed on any page. Photography is
  // deliberately kept to the optical page rather than spread across the site.
  frontOn: {
    src: "/photos/frames/cartier-rimless-symmetry.webp",
    alt: "Cartier rimless eyeglass frame photographed straight on against a white background",
  },
  angled: {
    src: "/photos/frames/cartier-rimless-angle.webp",
    alt: "Gold Cartier rimless eyeglass frame resting on a white surface, seen from an angle",
  },
} satisfies Record<string, SitePhoto>;
