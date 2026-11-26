import { OG_SIZE, renderOgImage } from "@/lib/og-card";

export const size = OG_SIZE;

export const contentType = "image/png";

export default function TwitterImage() {
  return renderOgImage();
}
