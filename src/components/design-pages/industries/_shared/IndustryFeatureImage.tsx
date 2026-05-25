"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { PAGE_SHELL_INDUSTRY } from "@/lib/page-layout";
import { slideUp } from "@/lib/motion";
import { ImagePlaceholder, type ImagePlaceholderVariant } from "./ImagePlaceholder";

type IndustryFeatureImageBaseProps = {
  /** Short label shown on the placeholder card (also fallback alt text). */
  label: string;
  /** Art-direction note describing the photo that belongs here. */
  description?: string;
  variant?: ImagePlaceholderVariant;
};

type IndustryFeatureImageWithSource = IndustryFeatureImageBaseProps & {
  /** Public path to the real photo. When set, renders `next/image` instead of the placeholder. */
  src: string;
  /** Alt text for the real photo. */
  alt: string;
};

type IndustryFeatureImagePlaceholder = IndustryFeatureImageBaseProps & {
  src?: undefined;
  alt?: never;
};

type IndustryFeatureImageProps = IndustryFeatureImageWithSource | IndustryFeatureImagePlaceholder;

/**
 * Editorial section break between Challenges and Solutions. Gives the eye a
 * rest from the all-cards rhythm and reserves space for a wide photo. Renders
 * a real `next/image` if `src` is provided, otherwise a designed placeholder.
 */
export const IndustryFeatureImage = ({
  label,
  description,
  variant = "primary",
  src,
  alt,
}: IndustryFeatureImageProps) => (
  <section className="relative py-12 lg:py-16 bg-white">
    <div className={PAGE_SHELL_INDUSTRY}>
      <motion.div
        variants={slideUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {src ? (
          <div className="relative w-full overflow-hidden rounded-2xl shadow-md" style={{ aspectRatio: "21 / 9" }}>
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="object-cover"
            />
          </div>
        ) : (
          <ImagePlaceholder
            aspect="21/9"
            label={label}
            description={description}
            variant={variant}
          />
        )}
      </motion.div>
    </div>
  </section>
);
