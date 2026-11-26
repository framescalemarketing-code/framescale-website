import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();

function read(relativePath) {
  return readFileSync(resolve(root, relativePath), "utf8");
}

function assertIncludes(content, expected, message) {
  if (!content.includes(expected)) {
    throw new Error(message + `\nMissing: ${expected}`);
  }
}

function assertNotIncludes(content, forbidden, message) {
  if (content.includes(forbidden)) {
    throw new Error(message + `\nFound forbidden: ${forbidden}`);
  }
}

function run() {
  // Fonts (redesign 2026-11-26): Bricolage Grotesque for display, Hanken
  // Grotesk for text and UI. Both load through next/font/google in layout.tsx
  // and are exposed as CSS variables that globals.css maps to the three role
  // variables below.
  const globalsCss = read("src/app/globals.css");
  assertIncludes(
    globalsCss,
    '--font-headline: var(--font-bricolage), "Bricolage Grotesque", sans-serif;',
    "Brand guard failed: --font-headline must map to Bricolage Grotesque"
  );
  assertIncludes(
    globalsCss,
    '--font-ui: var(--font-hanken), "Hanken Grotesk", sans-serif;',
    "Brand guard failed: --font-ui must map to Hanken Grotesk"
  );
  assertIncludes(
    globalsCss,
    '--font-body: var(--font-hanken), "Hanken Grotesk", sans-serif;',
    "Brand guard failed: --font-body must map to Hanken Grotesk"
  );

  // Brand colors are part of the same contract as the fonts and the logo.
  // The redesign is allowed to change every layout rule below the token
  // block, but these five values define the brand and must survive.
  const BRAND_COLORS = [
    ["--brand-primary: #17788e;", "primary teal"],
    ["--brand-primary-hover: #145f71;", "primary hover"],
    ["--brand-secondary: #68b3b5;", "secondary aqua"],
    ["--brand-deep: #264653;", "deep teal"],
    ["--brand-neutral: #6c7a7c;", "neutral slate"],
  ];
  for (const [declaration, label] of BRAND_COLORS) {
    assertIncludes(
      globalsCss,
      declaration,
      `Brand guard failed: the ${label} brand color must stay in src/app/globals.css`
    );
  }

  const layoutTsx = read("src/app/layout.tsx");
  const LAYOUT_FONT_PINS = [
    ['from "next/font/google"', "fonts must load through next/font/google"],
    ["Bricolage_Grotesque(", "the display face must be Bricolage Grotesque"],
    ["Hanken_Grotesk(", "the text face must be Hanken Grotesk"],
    ['variable: "--font-bricolage"', "the display font variable must be --font-bricolage"],
    ['variable: "--font-hanken"', "the text font variable must be --font-hanken"],
  ];
  for (const [expected, label] of LAYOUT_FONT_PINS) {
    assertIncludes(layoutTsx, expected, `Brand guard failed: ${label} in src/app/layout.tsx`);
  }
  assertNotIncludes(
    layoutTsx,
    "fonts.googleapis.com",
    "Brand guard failed: fonts are self-hosted by next/font, so layout.tsx must not link Google Fonts"
  );

  const brandTsx = read("src/components/design/Brand.tsx");
  assertIncludes(
    brandTsx,
    'const LOGO_VIEWBOX = "0 -10 200 90";',
    "Brand guard failed: logo viewBox override must stay at 0 -10 200 90"
  );
  assertNotIncludes(
    brandTsx,
    'const LOGO_VIEWBOX = "0 0 200 80";',
    "Brand guard failed: original clipped logo viewBox cannot be reintroduced"
  );

  console.log("Brand guard passed: baseline reference + approved exceptions are intact.");
}

try {
  run();
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
}
