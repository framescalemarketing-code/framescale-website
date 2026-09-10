import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import type { ShareCard } from "@/content/share-cards";
import { site } from "@/lib/site";

export const SHARE_CARD_SIZE = { width: 1200, height: 630 };
export const SHARE_CARD_CONTENT_TYPE = "image/png";

/* Brand tokens, duplicated from globals.css because Satori cannot read CSS
   variables: the paper ground, the deep teal, the primary teal, the muted
   text colour, and the hairline. */
const PAPER = "#fdfbf7";
const DEEP = "#264653";
const TEAL = "#17788e";
const MUTED = "#5f6d6f";
const BORDER = "rgba(38, 70, 83, 0.13)";

type Assets = {
  serif: Buffer;
  ui: Buffer;
  body: Buffer;
  headshot: string;
  mark: string;
};

let assetsPromise: Promise<Assets> | null = null;

/**
 * Satori only parses TrueType/OpenType, so the card uses static .ttf instances
 * of the three brand faces rather than the variable .woff2 files the site
 * itself loads. The headshot and the mark go in as data URLs. Everything is
 * read once per server instance.
 */
function loadAssets(): Promise<Assets> {
  if (!assetsPromise) {
    const root = process.cwd();
    assetsPromise = Promise.all([
      readFile(join(root, "src/lib/og/fonts/SourceSerif4-SemiBold.ttf")),
      readFile(join(root, "src/lib/og/fonts/Montserrat-SemiBold.ttf")),
      readFile(join(root, "src/lib/og/fonts/OpenSans-Regular.ttf")),
      readFile(join(root, "public/photos/founder/jonathan-about.jpg"), "base64"),
      readFile(join(root, "src/app/icon.svg"), "base64"),
    ]).then(([serif, ui, body, headshot, mark]) => ({
      serif,
      ui,
      body,
      headshot: `data:image/jpeg;base64,${headshot}`,
      mark: `data:image/svg+xml;base64,${mark}`,
    }));
  }
  return assetsPromise;
}

export async function renderShareCard(card: ShareCard) {
  const assets = await loadAssets();
  const titleSize = card.title.length > 24 ? 60 : 68;

  return new ImageResponse(
    (
      // Satori needs an explicit `display: flex` on every element with more
      // than one child, so every wrapper below carries one.
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: PAPER,
          color: DEEP,
          padding: "60px 64px",
          fontFamily: "Open Sans",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
            paddingRight: 48,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div
              style={{
                fontFamily: "Montserrat",
                fontWeight: 600,
                fontSize: 21,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: TEAL,
              }}
            >
              {card.eyebrow}
            </div>
            <div
              style={{
                fontFamily: "Source Serif 4",
                fontWeight: 600,
                fontSize: titleSize,
                lineHeight: 1.08,
                letterSpacing: -1,
                color: DEEP,
              }}
            >
              {card.title}
            </div>
            <div style={{ fontSize: 28, lineHeight: 1.4, color: MUTED, maxWidth: 600 }}>
              {card.line}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              fontFamily: "Montserrat",
              fontWeight: 600,
              fontSize: 21,
              color: DEEP,
            }}
          >
            {/* The mark's viewBox is 200 x 90, so 72 x 32 keeps its proportions. */}
            {/* eslint-disable-next-line @next/next/no-img-element -- Satori renders raw elements; next/image does not exist here */}
            <img src={assets.mark} width={72} height={32} alt="" />
            <span>{site.hostname}</span>
          </div>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element -- Satori renders raw elements; next/image does not exist here */}
        <img
          src={assets.headshot}
          width={420}
          height={510}
          alt=""
          style={{
            objectFit: "cover",
            objectPosition: "center 15%",
            borderRadius: 28,
            border: `1px solid ${BORDER}`,
          }}
        />
      </div>
    ),
    {
      ...SHARE_CARD_SIZE,
      fonts: [
        { name: "Source Serif 4", data: assets.serif, weight: 600, style: "normal" },
        { name: "Montserrat", data: assets.ui, weight: 600, style: "normal" },
        { name: "Open Sans", data: assets.body, weight: 400, style: "normal" },
      ],
    },
  );
}
