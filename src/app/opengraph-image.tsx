import { ImageResponse } from "next/og";
import { location, practice, principal, site } from "@/lib/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  // Satori requires an explicit display value on any element with more than
  // one child, so each text node is precomposed into a single string.
  const eyebrow = `${principal.jobTitle} · ${location.city}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #17788e 0%, #264653 100%)",
          color: "white",
          fontFamily: "sans-serif",
          padding: "72px",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <div style={{ fontSize: 26, letterSpacing: 4, opacity: 0.72, textTransform: "uppercase" }}>
            {eyebrow}
          </div>
          <div style={{ fontSize: 82, lineHeight: 1.02, fontWeight: 600, maxWidth: "940px" }}>
            {principal.displayName}
          </div>
          <div style={{ fontSize: 30, opacity: 0.82, maxWidth: "900px", lineHeight: 1.35 }}>
            Research first. Websites that convert. Reporting you can actually read.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, opacity: 0.7 }}>
          <span>{practice.name}</span>
          <span>{site.hostname}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
