import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #0f5f71 0%, #264653 100%)",
          color: "white",
          fontFamily: "sans-serif",
          padding: "64px",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ fontSize: 30, opacity: 0.9 }}>FrameScale Inc</div>
          <div style={{ fontSize: 72, lineHeight: 1.05, fontWeight: 600, maxWidth: "900px" }}>
            Marketing that teaches you to scale
          </div>
          <div style={{ fontSize: 30, opacity: 0.9, maxWidth: "980px" }}>{site.tagline}</div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, opacity: 0.9 }}>
          <span>Healthcare • Retail • Professional Services</span>
          <span>{site.url.replace("https://", "")}</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
