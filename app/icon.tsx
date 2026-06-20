import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Brand monogram favicon — "M" on a walnut gradient.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #161518 0%, #ECC877 100%)",
          color: "#050506",
          fontSize: 42,
          fontWeight: 700,
          fontFamily: "serif",
          borderRadius: 14,
        }}
      >
        M
      </div>
    ),
    { ...size }
  );
}
