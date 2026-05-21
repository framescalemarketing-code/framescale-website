"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "@/components/design/Button";
import { PageBackLink } from "@/components/design/PageBackLink";
import { heroBlobClassName, heroSectionGradient, iconTileGradient } from "@/lib/industry-content/gradients";
import type { IndustryHeroContent } from "@/lib/industry-content/types";
import { PAGE_SHELL_INDUSTRY } from "@/lib/page-layout";
import { slideUp } from "@/lib/motion";
import { site } from "@/lib/site";
import { ImagePlaceholder, type ImagePlaceholderVariant } from "./ImagePlaceholder";

type IndustryHeroProps = {
  content: IndustryHeroContent;
};

const placeholderVariantFor = (
  gradient: IndustryHeroContent["iconMarkGradient"],
): ImagePlaceholderVariant => {
  if (gradient === "deep-primary") return "deep";
  if (gradient === "secondary-primary") return "secondary";
  return "primary";
};

export const IndustryHero = ({ content }: IndustryHeroProps) => {
  const Icon = content.icon;
  const markGradient = iconTileGradient(content.iconMarkGradient);
  const hasMedia = Boolean(content.media);

  const textBlock = (
    <>
      <PageBackLink href="/#industries" label="Back to Industries" className="mb-6" />

      <div className="flex items-center gap-3 mb-6">
        <div
          className={`w-14 h-14 rounded-xl bg-linear-to-br ${markGradient} flex items-center justify-center`}
        >
          <Icon className="w-7 h-7 text-white" />
        </div>
        <span className="font-ui text-sm font-semibold uppercase tracking-wider text-(--brand-primary)">
          {content.badge}
        </span>
      </div>

      <h1
        className="font-headline text-4xl lg:text-5xl mb-6 leading-tight"
        style={{ color: "var(--brand-deep)" }}
      >
        {content.title}
      </h1>

      <p
        className="font-body text-lg lg:text-xl mb-8 leading-relaxed max-w-2xl"
        style={{ color: "var(--brand-neutral)" }}
      >
        {content.description}
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button size="lg" href={site.bookingPath}>
          Schedule intro call
        </Button>
        <Button size="lg" variant="ghost" href="/process">
          See Our Process
        </Button>
      </div>
    </>
  );

  return (
    <section
      className={`relative min-h-[60vh] flex items-center overflow-hidden bg-linear-to-br ${heroSectionGradient(content.heroGradient)} pt-32 pb-20`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className={heroBlobClassName(content.heroBlob)} />
      </div>

      <div className={`${PAGE_SHELL_INDUSTRY} relative z-10 w-full`}>
        {hasMedia && content.media ? (
          <motion.div
            variants={slideUp}
            initial="hidden"
            animate="show"
            className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-12 items-center"
          >
            <div>{textBlock}</div>
            <div className="lg:pl-4">
              {content.media.src ? (
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={content.media.src}
                    alt={content.media.alt ?? content.media.label}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover"
                    priority
                  />
                </div>
              ) : (
                <ImagePlaceholder
                  aspect="4/3"
                  label={content.media.label}
                  description={content.media.description}
                  variant={placeholderVariantFor(content.iconMarkGradient)}
                />
              )}
            </div>
          </motion.div>
        ) : (
          <motion.div
            variants={slideUp}
            initial="hidden"
            animate="show"
            className="max-w-4xl"
          >
            {textBlock}
          </motion.div>
        )}
      </div>
    </section>
  );
};
