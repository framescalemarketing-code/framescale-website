import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
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
          padding: "64px",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div style={{ fontSize: 28, letterSpacing: 1.2, opacity: 0.95 }}>GUIDED GROWTH MARKETING</div>
          <div style={{ fontSize: 68, lineHeight: 1.05, fontWeight: 700, maxWidth: "920px" }}>
            Research first. One principal. Custom build.
          </div>
          <div style={{ fontSize: 28, opacity: 0.9, maxWidth: "980px" }}>{site.description}</div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, opacity: 0.9 }}>
          <span>{site.name}</span>
          <span>{site.url.replace("https://", "")}</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
