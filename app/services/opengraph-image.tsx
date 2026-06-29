import { ImageResponse } from "next/og"

// Open Graph image (1200x630) for /services. Next.js serves it at /services/opengraph-image
// and uses it as the Twitter card fallback too. Edge runtime: @vercel/og's Node build
// fails to prerender on Windows.
export const runtime = "edge"
export const alt = "Web Development & AI Automation Services Australia – Asif Hossain"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function ServicesOpengraphImage() {
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

        <div style={{ color: "#fbbf24", fontSize: "26px", fontWeight: 600, letterSpacing: "0.1em" }}>
          SERVICES
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", fontSize: "64px", fontWeight: 700, lineHeight: 1.1, marginTop: "20px" }}>
          <span style={{ color: "#f4f4f5" }}>Web Development &amp;&nbsp;</span>
          <span style={{ color: "#22d3ee" }}>AI Automation</span>
        </div>

        <div style={{ color: "#a1a1aa", fontSize: "28px", marginTop: "24px" }}>
          Websites · n8n Automation · AI Integration · Cloud · Australia
        </div>

        <div style={{ color: "#fbbf24", fontSize: "26px", marginTop: "48px" }}>
          asifhossain.dev/services
        </div>
      </div>
    ),
    size
  )
}
