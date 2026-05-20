"use client";

import { ImageIcon } from "lucide-react";

export type ImagePlaceholderAspect = "1/1" | "16/9" | "4/3" | "3/4" | "21/9";
export type ImagePlaceholderVariant = "primary" | "secondary" | "deep";

type ImagePlaceholderProps = {
  /** Aspect ratio of the placeholder slot. */
  aspect?: ImagePlaceholderAspect;
  /** Short label rendered on the placeholder (what photo belongs here). */
  label: string;
  /** Longer art-direction note for the photographer. Rendered subtly. */
  description?: string;
  /** Optional eyebrow above the label, e.g. "Photo placeholder". */
  eyebrow?: string;
  /** Color treatment for the placeholder background. */
  variant?: ImagePlaceholderVariant;
  className?: string;
};

const aspectClass: Record<ImagePlaceholderAspect, string> = {
  "1/1": "aspect-square",
  "16/9": "aspect-video",
  "4/3": "aspect-[4/3]",
  "3/4": "aspect-[3/4]",
  "21/9": "aspect-[21/9]",
};

const variantClass: Record<ImagePlaceholderVariant, string> = {
  primary:
    "from-(--brand-primary)/10 via-(--brand-secondary)/10 to-(--brand-primary)/5",
  secondary:
    "from-(--brand-secondary)/10 via-(--brand-primary)/10 to-(--brand-secondary)/5",
  deep: "from-(--brand-deep)/10 via-(--brand-primary)/10 to-(--brand-deep)/5",
};

/**
 * Designed placeholder that takes the visual space of a future photo. The
 * label and description tell the next person (you, the photographer, or a
 * future agent) exactly what shot belongs in this slot.
 */
export const ImagePlaceholder = ({
  aspect = "4/3",
  label,
  description,
  eyebrow = "Photo placeholder",
  variant = "primary",
  className = "",
}: ImagePlaceholderProps) => (
  <div
    role="img"
    aria-label={`${eyebrow}: ${label}`}
    className={`relative w-full ${aspectClass[aspect]} rounded-2xl overflow-hidden border border-dashed border-(--brand-primary)/30 bg-linear-to-br ${variantClass[variant]} ${className}`}
  >
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
      <div className="w-12 h-12 rounded-full bg-white/70 backdrop-blur flex items-center justify-center mb-3 border border-(--brand-primary)/20">
        <ImageIcon className="w-6 h-6 text-(--brand-primary)" />
      </div>
      <p className="font-ui text-xs font-semibold uppercase tracking-wider text-(--brand-primary) mb-1">
        {eyebrow}
      </p>
      <p
        className="font-headline text-base lg:text-lg"
        style={{ color: "var(--brand-deep)" }}
      >
        {label}
      </p>
      {description && (
        <p
          className="font-body text-xs mt-2 max-w-xs leading-snug"
          style={{ color: "var(--brand-neutral)" }}
        >
          {description}
        </p>
      )}
    </div>
  </div>
);
