import { ImageResponse } from "next/og";
import { SITE } from "@/lib/data";

export const runtime = "edge";
export const alt = SITE.brand;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #050506 0%, #121116 55%, #211F26 100%)",
          color: "#F6F3EC",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "#ECC877",
              color: "#050506",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 38,
              fontWeight: 700,
            }}
          >
            M
          </div>
          <div style={{ fontSize: 28, letterSpacing: 1, opacity: 0.9 }}>
            {SITE.brand}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1 }}>
            {SITE.name}
          </div>
          <div style={{ fontSize: 40, color: "#ECC877" }}>{SITE.role}</div>
        </div>

        <div style={{ fontSize: 28, opacity: 0.85, maxWidth: 900 }}>
          30,000+ crypto family · Web3 education without the hype
        </div>
      </div>
    ),
    { ...size }
  );
}
