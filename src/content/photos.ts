/**
 * Photography copy. Alt text and captions are user-facing strings, so they live
 * here rather than inline in JSX, same as every other line on the site.
 *
 * The frame photographs are Jonathan's own, shot during his years in optical.
 * They are the reason the optical claim reads as true rather than asserted, so
 * captions should name the thing and say something only an optician would know.
 * A caption that just describes the picture is wasted.
 */
export type SitePhoto = {
  src: string;
  alt: string;
  caption?: string;
};

export const framePhotos = {
  opticalHero: {
    src: "/photos/frames/cartier-panther-detail.webp",
    alt: "Cartier rimless eyeglass frame, with the engraved panther on the temple",
    caption: "Cartier rimless. The panther sits where the temple meets the lens.",
  },
  opticalDetail: {
    src: "/photos/frames/rayban-temple-markings.webp",
    alt: "Close view of a Ray-Ban acetate frame temple, showing the moulded size markings",
    caption:
      "Ray-Ban RB5206. The numbers moulded inside the temple, 54 16 145, are the eye size, the bridge, and the temple length.",
  },
  // Written and optimized, but not currently placed on any page. Photography is
  // deliberately kept to the optical page rather than spread across the site.
  frontOn: {
    src: "/photos/frames/cartier-rimless-symmetry.webp",
    alt: "Cartier rimless eyeglass frame photographed straight on against a white background",
    caption: "A frame board is inventory. What sells and what sits decides what is worth advertising.",
  },
  angled: {
    src: "/photos/frames/cartier-rimless-angle.webp",
    alt: "Gold Cartier rimless eyeglass frame resting on a white surface, seen from an angle",
    caption: "The product I started out making, before I ever sold one.",
  },
} satisfies Record<string, SitePhoto>;
