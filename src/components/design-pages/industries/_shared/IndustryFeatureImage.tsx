"use client";

import { motion } from "motion/react";
import { PAGE_SHELL_INDUSTRY } from "@/lib/page-layout";
import { slideUp } from "@/lib/motion";
import { ImagePlaceholder, type ImagePlaceholderVariant } from "./ImagePlaceholder";

type IndustryFeatureImageProps = {
  /** Short label shown on the placeholder card. */
  label: string;
  /** Art-direction note describing the photo that belongs here. */
  description?: string;
  variant?: ImagePlaceholderVariant;
};

/**
 * Editorial section break between Challenges and Solutions. Gives the eye a
 * rest from the all-cards rhythm and reserves space for a wide photo later.
 */
export const IndustryFeatureImage = ({
  label,
  description,
  variant = "primary",
}: IndustryFeatureImageProps) => (
  <section className="relative py-12 lg:py-16 bg-white">
    <div className={PAGE_SHELL_INDUSTRY}>
      <motion.div
        variants={slideUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <ImagePlaceholder
          aspect="21/9"
          label={label}
          description={description}
          variant={variant}
        />
      </motion.div>
    </div>
  </section>
);
