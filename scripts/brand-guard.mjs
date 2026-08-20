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
  const fontsCss = read("src/styles/fonts.css");
  assertIncludes(
    fontsCss,
    "Source+Serif+4",
    "Brand guard failed: Source Serif 4 must remain in src/styles/fonts.css"
  );
  assertIncludes(
    fontsCss,
    "Montserrat",
    "Brand guard failed: Montserrat must remain in src/styles/fonts.css"
  );
  assertIncludes(
    fontsCss,
    "Open+Sans",
    "Brand guard failed: Open Sans must remain in src/styles/fonts.css"
  );

  const globalsCss = read("src/app/globals.css");
  assertIncludes(
    globalsCss,
    "@import \"../styles/fonts.css\";",
    "Brand guard failed: globals.css must import ../styles/fonts.css"
  );
  assertIncludes(
    globalsCss,
    '--font-headline: "Source Serif 4", serif;',
    "Brand guard failed: --font-headline must map to Source Serif 4"
  );
  assertIncludes(
    globalsCss,
    '--font-ui: "Montserrat", sans-serif;',
    "Brand guard failed: --font-ui must map to Montserrat"
  );
  assertIncludes(
    globalsCss,
    '--font-body: "Open Sans", sans-serif;',
    "Brand guard failed: --font-body must map to Open Sans"
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
  assertNotIncludes(
    layoutTsx,
    'from "next/font/google"',
    "Brand guard failed: next/font/google should not be used for this project baseline"
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

  // Launch blocker: the principal's surname is the site's primary search
  // entity. It renders in the nav, every h1, all title tags, and Person JSON-LD.
  const siteTs = read("src/lib/site.ts");
  assertNotIncludes(
    siteTs,
    'const PRINCIPAL_LAST_NAME = "Doe";',
    "Brand guard failed: PRINCIPAL_LAST_NAME is still the placeholder. Set the real surname in src/lib/site.ts before launch."
  );

  console.log("Brand guard passed: baseline reference + approved exceptions are intact.");
}

try {
  run();
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
}
