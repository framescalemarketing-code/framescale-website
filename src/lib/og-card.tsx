import { ImageResponse } from "next/og";
import { practice, principal, site } from "@/lib/site";

export const OG_SIZE = { width: 1200, height: 630 } as const;

/**
 * Brand hexes are repeated here because an `ImageResponse` renders outside the
 * CSS cascade and cannot read custom properties. They match the five
 * `--brand-*` values the brand guard pins in `globals.css`.
 */
const DEEP = "#264653";
const AQUA = "#68b3b5";

/** Rings share one right-hand centre, echoing the ring motif used on the pages. */
const RINGS = [
  { size: 560, opacity: 0.22 },
  { size: 400, opacity: 0.34 },
  { size: 240, opacity: 0.5 },
] as const;

/**
 * One card for both the Open Graph and the Twitter image, so a link looks the
 * same wherever it is shared. Satori needs an explicit `display` on every
 * element with more than one child, so each text node is a single string.
 * Fonts are Satori's built-in sans: loading Bricolage here would mean fetching
 * it at request time, which is not worth it for a social card.
 */
export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          position: "relative",
          width: "100%",
          height: "100%",
          background: DEEP,
          color: "white",
          fontFamily: "sans-serif",
          padding: "72px",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {RINGS.map((ring) => (
          <div
            key={ring.size}
            style={{
              display: "flex",
              position: "absolute",
              right: 120 - ring.size / 2,
              top: 315 - ring.size / 2,
              width: ring.size,
              height: ring.size,
              borderRadius: ring.size,
              border: `3px solid ${AQUA}`,
              opacity: ring.opacity,
            }}
          />
        ))}
        <div
          style={{
            display: "flex",
            position: "absolute",
            right: 120 - 36,
            top: 315 - 36,
            width: 72,
            height: 72,
            borderRadius: 72,
            background: AQUA,
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ display: "flex", fontSize: 72, lineHeight: 1.02, fontWeight: 700, maxWidth: "800px" }}>
            {principal.displayName}
          </div>
          <div style={{ display: "flex", fontSize: 34, lineHeight: 1.3, color: AQUA, maxWidth: "700px" }}>
            {principal.jobTitle}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, opacity: 0.78 }}>
          <span>{practice.name}</span>
          <span>{site.hostname}</span>
        </div>
      </div>
    ),
    { ...OG_SIZE },
  );
}
