import { ImageResponse } from "next/og"

// Default Open Graph image (1200x630) for all pages.
// Next.js App Router picks this file up automatically and serves it at /opengraph-image.
// Edge runtime required: @vercel/og's Node build fails to prerender on Windows.
export const runtime = "edge"
export const alt = "Asif Hossain – Australian Website Developer & AI Automation Engineer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#09090f",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(34,211,238,0.12), transparent 45%), radial-gradient(circle at 15% 85%, rgba(251,191,36,0.12), transparent 45%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            width: "120px",
            height: "6px",
            borderRadius: "3px",
            background: "linear-gradient(90deg, #fbbf24, #22d3ee)",
            marginBottom: "40px",
          }}
        />

        <div style={{ display: "flex", fontSize: "72px", fontWeight: 700, lineHeight: 1.1 }}>
          <span style={{ color: "#fbbf24" }}>Asif&nbsp;</span>
          <span style={{ color: "#22d3ee" }}>Hossain</span>
        </div>

        <div style={{ color: "#f4f4f5", fontSize: "36px", fontWeight: 600, marginTop: "24px" }}>
          Website Developer &amp; AI Automation Engineer
        </div>

        <div style={{ color: "#a1a1aa", fontSize: "28px", marginTop: "16px" }}>
          React · Next.js · Node.js · n8n · Australia
        </div>

        <div style={{ color: "#fbbf24", fontSize: "26px", marginTop: "48px" }}>
          asifhossain.dev
        </div>
      </div>
    ),
    size
  )
}
