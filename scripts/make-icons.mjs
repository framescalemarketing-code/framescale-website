/**
 * Regenerates the raster icons from src/app/icon.svg using the sharp that Next
 * already depends on. Run after changing the mark:
 *
 *   node scripts/make-icons.mjs
 *
 * Produces:
 *   src/app/apple-icon.png    180x180, paper background (iOS home screen)
 *   public/brand/logo-512.png 512x512, paper background (schema.org logo)
 */
import { mkdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PAPER = "#fdfbf7";

async function render(size, target) {
  const svg = await readFile(path.join(root, "src/app/icon.svg"));
  // The mark fills about 80% of the square; the rest is paper, so it reads
  // as an app tile rather than a cropped logo.
  const markSize = Math.round(size * 0.8);
  const mark = await sharp(svg).resize(markSize, markSize).png().toBuffer();
  const offset = Math.round((size - markSize) / 2);

  await mkdir(path.dirname(target), { recursive: true });
  await sharp({
    create: { width: size, height: size, channels: 4, background: PAPER },
  })
    .composite([{ input: mark, left: offset, top: offset }])
    .png()
    .toFile(target);

  console.log(`wrote ${path.relative(root, target)} (${size}x${size})`);
}

await render(180, path.join(root, "src/app/apple-icon.png"));
await render(512, path.join(root, "public/brand/logo-512.png"));
