"use client"

import { useState, useEffect, useRef, type ReactNode } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { ikLoader } from "@/lib/imagekit"
import { shimmerDataURL } from "@/lib/shimmer"

const blur = shimmerDataURL(800, 500)

// ── Tile ────────────────────────────────────────────────────────────────────
function Tile({ src, alt, priority = false, onClick, children }: {
  src: string; alt: string; priority?: boolean
  onClick: () => void; children?: ReactNode
}) {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={alt}
      style={{
        position: "absolute", inset: 0,
        overflow: "hidden", borderRadius: "12px",
        background: "#07070f", border: "1px solid rgba(255,255,255,0.06)",
        cursor: "pointer", padding: 0,
      }}
    >
      <Image
        src={src} loader={ikLoader} alt={alt}
        fill sizes="(max-width: 768px) 50vw, 40vw"
        className="object-contain"
        style={{
          padding: "6px",
          transform: hovered ? "scale(1.04)" : "scale(1)",
          transition: "transform 0.45s ease",
        }}
        placeholder="blur" blurDataURL={blur} priority={priority}
      />
      <div style={{
        position: "absolute", inset: 0,
        background: "rgba(0,0,0,0.2)",
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.25s",
        pointerEvents: "none",
      }} />
      {children}
    </button>
  )
}

// ── Main component ───────────────────────────────────────────────────────────
interface Props {
  /** Pre-fetched image URLs from the server (ImageKit API). Any filename, any count. */
  images: string[]
  alt: string
}

export default function ProjectGallery({ images, alt }: Props) {
  const [lightbox, setLightbox] = useState<number | null>(null)
  const total    = images.length
  const remaining = Math.max(0, total - 3)
  const imagesRef = useRef(images)
  imagesRef.current = images

  // keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightbox === null) return
      const len = imagesRef.current.length
      if (e.key === "Escape")     setLightbox(null)
      if (e.key === "ArrowRight") setLightbox(i => i === null ? null : (i + 1) % len)
      if (e.key === "ArrowLeft")  setLightbox(i => i === null ? null : (i - 1 + len) % len)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [lightbox])

  // lock body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [lightbox])

  if (total === 0) return null

  return (
    <>
      {/* ── Preview grid ─────────────────────────────────────────────────────── */}
      <div style={{ position: "relative", width: "100%", paddingTop: "46%" }}>

        {/* Left: hero image */}
        <div style={{ position: "absolute", top: 0, left: 0, right: "calc(45% + 4px)", bottom: 0 }}>
          <Tile src={images[0]} alt={`${alt} — 1`} priority onClick={() => setLightbox(0)} />
        </div>

        {/* Right top */}
        {images[1] && (
          <div style={{ position: "absolute", top: 0, left: "calc(55% + 4px)", right: 0, bottom: "calc(50% + 4px)" }}>
            <Tile src={images[1]} alt={`${alt} — 2`} priority onClick={() => setLightbox(1)} />
          </div>
        )}

        {/* Right bottom + remaining count */}
        {images[2] && (
          <div style={{ position: "absolute", top: "calc(50% + 4px)", left: "calc(55% + 4px)", right: 0, bottom: 0 }}>
            <Tile src={images[2]} alt={`${alt} — 3`} onClick={() => setLightbox(2)}>
              {remaining > 0 && (
                <div style={{
                  position: "absolute", inset: 0,
                  background: "rgba(5,5,15,0.82)", backdropFilter: "blur(4px)",
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center",
                  pointerEvents: "none", borderRadius: "11px",
                }}>
                  <span style={{ fontSize: "clamp(22px,3vw,36px)", fontWeight: 700, color: "#fff", lineHeight: 1, letterSpacing: "-1px" }}>
                    +{remaining}
                  </span>
                  <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", marginTop: "6px", fontFamily: "ui-monospace,monospace", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    more photos
                  </span>
                </div>
              )}
            </Tile>
          </div>
        )}
      </div>

      {/* ── Lightbox ─────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed", inset: 0, zIndex: 9999,
              background: "rgba(3,3,10,0.96)", backdropFilter: "blur(20px)",
              cursor: "default",
            }}
          >
            {/* Backdrop click-to-close */}
            <div
              style={{ position: "absolute", inset: 0, zIndex: 1, cursor: "default" }}
              onClick={() => setLightbox(null)}
            />

            {/* Top bar */}
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: "52px", zIndex: 10002,
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "0 20px", borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}>
              <span style={{ fontSize: "11px", fontFamily: "ui-monospace,monospace", color: "rgba(255,255,255,0.35)" }}>
                {String(lightbox + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
              <button
                onClick={() => setLightbox(null)}
                aria-label="Close gallery"
                style={{
                  zIndex: 10002, background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)", borderRadius: "50%",
                  padding: "8px", cursor: "pointer", display: "flex",
                  alignItems: "center", color: "rgba(255,255,255,0.7)",
                }}
              >
                <FiX size={16} />
              </button>
            </div>

            {/* Image */}
            <div style={{
              position: "absolute", inset: 0, zIndex: 10000,
              display: "flex", alignItems: "center", justifyContent: "center",
              padding: "60px 80px",
              pointerEvents: "none",
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                key={lightbox}
                src={ikLoader({ src: images[lightbox], width: 1400, quality: 85 })}
                alt={`${alt} — ${lightbox + 1}`}
                style={{
                  maxWidth: "100%", maxHeight: "100%",
                  objectFit: "contain", display: "block",
                  borderRadius: "8px",
                }}
              />
            </div>

            {/* Prev arrow */}
            {total > 1 && (
              <button
                aria-label="Previous screenshot"
                onClick={e => { e.stopPropagation(); setLightbox(i => i === null ? 0 : (i - 1 + total) % total) }}
                style={{
                  position: "absolute", left: "16px", top: "50%",
                  transform: "translateY(-50%)", zIndex: 10001,
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "50%", padding: "12px",
                  cursor: "pointer", display: "flex",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                <FiChevronLeft size={22} />
              </button>
            )}

            {/* Next arrow */}
            {total > 1 && (
              <button
                aria-label="Next screenshot"
                onClick={e => { e.stopPropagation(); setLightbox(i => i === null ? 0 : (i + 1) % total) }}
                style={{
                  position: "absolute", right: "16px", top: "50%",
                  transform: "translateY(-50%)", zIndex: 10001,
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "50%", padding: "12px",
                  cursor: "pointer", display: "flex",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                <FiChevronRight size={22} />
              </button>
            )}

            {/* Dots */}
            {total > 1 && total <= 30 && (
              <div style={{
                position: "absolute", bottom: "16px", left: 0, right: 0,
                zIndex: 10001,
                display: "flex", justifyContent: "center",
                gap: "6px", flexWrap: "wrap", padding: "0 48px",
              }}>
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={e => { e.stopPropagation(); setLightbox(i) }}
                    aria-label={`Go to ${i + 1}`}
                    style={{
                      borderRadius: "9999px", border: "none",
                      cursor: "pointer", padding: 0,
                      width: i === lightbox ? "16px" : "5px", height: "5px",
                      background: i === lightbox ? "rgb(251,191,36)" : "rgba(255,255,255,0.2)",
                      transition: "all 0.2s",
                    }}
                  />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
