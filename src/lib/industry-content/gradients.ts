import type { IndustryHeroBlob, IndustryHeroGradient, IndustryIconGradient } from "./types";

export function heroSectionGradient(gradient: IndustryHeroGradient): string {
  return gradient === "deep"
    ? "from-white via-(--brand-deep)/5 to-white"
    : "from-white via-(--brand-secondary)/5 to-white";
}

export function heroBlobClassName(blob: IndustryHeroBlob): string {
  switch (blob) {
    case "top-right-primary":
      return "absolute top-20 right-10 w-96 h-96 bg-linear-to-br from-(--brand-primary)/10 to-(--brand-secondary)/10 rounded-full blur-3xl";
    case "top-left-secondary":
      return "absolute top-20 left-10 w-96 h-96 bg-linear-to-br from-(--brand-secondary)/10 to-(--brand-primary)/10 rounded-full blur-3xl";
    case "bottom-right-deep":
      return "absolute bottom-20 right-10 w-96 h-96 bg-linear-to-br from-(--brand-deep)/10 to-(--brand-primary)/10 rounded-full blur-3xl";
  }
}

export function iconTileGradient(gradient: IndustryIconGradient): string {
  switch (gradient) {
    case "primary-secondary":
      return "from-(--brand-primary) to-(--brand-secondary)";
    case "secondary-primary":
      return "from-(--brand-secondary) to-(--brand-primary)";
    case "deep-primary":
      return "from-(--brand-deep) to-(--brand-primary)";
  }
}
