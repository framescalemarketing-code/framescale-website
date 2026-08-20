import { ImageResponse } from "next/og";
import { location, principal, site } from "@/lib/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
  const eyebrow = `${location.city} · ${location.serviceArea}`;

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
          justifyContent: "center",
          gap: "24px",
        }}
      >
        <div style={{ fontSize: 26, letterSpacing: 4, opacity: 0.72, textTransform: "uppercase" }}>
          {eyebrow}
        </div>
        <div style={{ fontSize: 76, lineHeight: 1.04, fontWeight: 600, maxWidth: "960px" }}>
          {principal.displayName}
        </div>
        <div style={{ fontSize: 32, opacity: 0.82 }}>{principal.jobTitle}</div>
        <div style={{ fontSize: 22, opacity: 0.62, marginTop: "16px" }}>{site.hostname}</div>
      </div>
    ),
    { ...size },
  );
}
