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

  console.log("Brand guard passed: baseline reference + approved exceptions are intact.");
}

try {
  run();
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
}
