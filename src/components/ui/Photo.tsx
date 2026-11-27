import Image from "next/image";

type PhotoProps = {
  src: string;
  alt: string;
  /** Aspect-ratio utility, e.g. `aspect-4/5`. Defaults to a wide editorial crop. */
  aspect?: string;
  /**
   * Responsive sizes hint. Required on purpose: `fill` without an accurate
   * `sizes` ships a desktop-width image to phones.
   */
  sizes: string;
  /** Only for an above-the-fold image. */
  priority?: boolean;
  className?: string;
};

/**
 * One photo, framed the way this site frames photography: the media radius, a
 * hairline border, and a cover crop. Wraps `next/image` so the aspect box and
 * the `fill` pairing stay in one place rather than being rebuilt per page.
 */
export function Photo({
  src,
  alt,
  aspect = "aspect-16/10",
  sizes,
  priority = false,
  className = "",
}: PhotoProps) {
  return (
    <figure className={className}>
      <div
        className={`relative ${aspect} w-full overflow-hidden rounded-(--radius-media) border border-(--border)`}
      >
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" priority={priority} />
      </div>
    </figure>
  );
}
