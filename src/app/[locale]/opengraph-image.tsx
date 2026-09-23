import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1c1b21",
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(139,92,246,0.55), transparent 55%), radial-gradient(circle at 85% 75%, rgba(34,211,238,0.45), transparent 55%), radial-gradient(circle at 50% 100%, rgba(244,63,94,0.35), transparent 55%)",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: -1,
          }}
        >
          Thibault Cauche
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 34,
            color: "rgba(255,255,255,0.75)",
          }}
        >
          Développeur fullstack &amp; mobile — React, .NET, Flutter
        </div>
      </div>
    ),
    { ...size }
  );
}
