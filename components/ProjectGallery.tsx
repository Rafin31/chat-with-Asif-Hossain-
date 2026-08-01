"use client"

import { useState, useEffect, useRef, type ReactNode } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { ikLoader } from "@/lib/imagekit"
import { shimmerDataURL } from "@/lib/shimmer"
import { categorizeGalleryImages, titleCaseFromSlug, type NamedImage } from "@/lib/gallery"

const blur = shimmerDataURL(800, 500)

// ── Tile ────────────────────────────────────────────────────────────────────
function Tile({ src, alt, priority = false, onClick }: {
  src: string; alt: string; priority?: boolean
  onClick: () => void
}) {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={alt}
      className="absolute inset-0 overflow-hidden rounded-xl border border-white/[0.06] bg-[#07070f] cursor-pointer p-0"
    >
      <Image
        src={src} loader={ikLoader} alt={alt}
        fill sizes="(max-width: 768px) 70vw, 320px"
        className="object-cover"
        style={{
          transform: hovered ? "scale(1.04)" : "scale(1)",
          transition: "transform 0.45s ease",
        }}
        placeholder="blur" blurDataURL={blur} priority={priority}
      />
      <div
        className="absolute inset-0 bg-black/20 pointer-events-none transition-opacity duration-200"
        style={{ opacity: hovered ? 1 : 0 }}
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 pt-6 pb-2">
        <span className="font-mono text-[10px] tracking-wide text-white/80">{alt}</span>
      </div>
    </button>
  )
}

interface GalleryImage extends NamedImage {
  width?: number
  height?: number
}

interface Props {
  /** Pre-fetched image URLs from the server (ImageKit API). Any filename, any count. */
  images: GalleryImage[]
  alt: string
}

// Native aspect ratio per shot: mobile screenshots stay portrait, everything
// else defaults to a landscape app-screenshot ratio.
function tileAspect(image: GalleryImage): string {
  if (image.width && image.height) return `${image.width} / ${image.height}`
  return image.name.startsWith("mobile") ? "9 / 19.5" : "16 / 10"
}

export default function ProjectGallery({ images, alt }: Props) {
  const categories = categorizeGalleryImages(images)
  const [activeCategory, setActiveCategory] = useState(categories?.[0]?.category ?? null)
  const [lightbox, setLightbox] = useState<number | null>(null)

  if (images.length === 0) return null

  const visibleImages = categories
    ? categories.find((c) => c.category === activeCategory)?.items ?? categories[0].items
    : images

  const captionFor = (image: GalleryImage, indexInAll: number) =>
    categories ? titleCaseFromSlug(image.name).replace(/^\S+\s/, "") : `${alt} — screenshot ${indexInAll + 1}`

  return (
    <>
      {categories && (
        <div role="tablist" aria-label="Screenshot category" className="flex flex-wrap gap-2 mb-4">
          {categories.map((cat) => (
            <button
              key={cat.category}
              role="tab"
              aria-selected={activeCategory === cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                activeCategory === cat.category
                  ? "bg-accent-yellow/15 text-accent-yellow border-accent-yellow/40"
                  : "bg-card text-text-muted border-border hover:border-accent-yellow/25"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}

      {/* ── Filmstrip ───────────────────────────────────────────────────────── */}
      <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory scroll-px-4">
        {visibleImages.map((image, i) => {
          const globalIndex = images.indexOf(image)
          return (
            <div
              key={image.name}
              className="relative shrink-0 snap-start h-64"
              style={{ aspectRatio: tileAspect(image) }}
            >
              <Tile
                src={image.url}
                alt={captionFor(image, globalIndex)}
                priority={i === 0}
                onClick={() => setLightbox(globalIndex)}
              />
            </div>
          )
        })}
      </div>

      {/* ── Lightbox ─────────────────────────────────────────────────────────── */}
      <Lightbox
        images={images}
        alt={alt}
        categories={categories}
        captionFor={captionFor}
        index={lightbox}
        onClose={() => setLightbox(null)}
        onNavigate={setLightbox}
      />
    </>
  )
}

function Lightbox({
  images,
  categories,
  captionFor,
  index,
  onClose,
  onNavigate,
}: {
  images: GalleryImage[]
  alt: string
  categories: ReturnType<typeof categorizeGalleryImages>
  captionFor: (image: GalleryImage, i: number) => string
  index: number | null
  onClose: () => void
  onNavigate: (i: number) => void
}) {
  const total = images.length
  const touchStartX = useRef<number | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (index === null) return
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowRight") onNavigate((index + 1) % total)
      if (e.key === "ArrowLeft") onNavigate((index - 1 + total) % total)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [index, total, onClose, onNavigate])

  useEffect(() => {
    document.body.style.overflow = index !== null ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [index])

  if (index === null) return null
  const image = images[index]

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[9999] bg-[rgba(3,3,10,0.96)] backdrop-blur-xl"
        onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX }}
        onTouchEnd={(e) => {
          if (touchStartX.current === null) return
          const delta = e.changedTouches[0].clientX - touchStartX.current
          if (Math.abs(delta) > 50) {
            onNavigate(delta < 0 ? (index + 1) % total : (index - 1 + total) % total)
          }
          touchStartX.current = null
        }}
      >
        <div className="absolute inset-0 z-[1]" onClick={onClose} />

        <div className="absolute top-0 left-0 right-0 h-[52px] z-[10002] flex items-center justify-between px-5 border-b border-white/5">
          <span className="font-mono text-[11px] text-white/60">{captionFor(image, index)}</span>
          <button onClick={onClose} aria-label="Close gallery" className="z-[10002] bg-white/5 border border-white/10 rounded-full p-2 flex items-center text-white/70">
            <FiX size={16} />
          </button>
        </div>

        <div className="absolute inset-0 z-[10000] flex items-center justify-center px-20 py-16 pointer-events-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={index}
            src={ikLoader({ src: image.url, width: 1400, quality: 85 })}
            alt={captionFor(image, index)}
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>

        {total > 1 && (
          <>
            <button
              aria-label="Previous screenshot"
              onClick={(e) => { e.stopPropagation(); onNavigate((index - 1 + total) % total) }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-[10001] bg-white/[0.07] border border-white/10 rounded-full p-3 flex text-white/70"
            >
              <FiChevronLeft size={22} />
            </button>
            <button
              aria-label="Next screenshot"
              onClick={(e) => { e.stopPropagation(); onNavigate((index + 1) % total) }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-[10001] bg-white/[0.07] border border-white/10 rounded-full p-3 flex text-white/70"
            >
              <FiChevronRight size={22} />
            </button>
          </>
        )}

        {/* Thumbnail filmstrip replaces the old dot row — scales to any count */}
        {total > 1 && (
          <div className="absolute bottom-0 left-0 right-0 z-[10001] flex gap-2 overflow-x-auto px-4 py-3 bg-gradient-to-t from-black/60 to-transparent">
            {images.map((thumb, i) => (
              <button
                key={thumb.name}
                onClick={(e) => { e.stopPropagation(); onNavigate(i) }}
                aria-label={`Go to ${captionFor(thumb, i)}`}
                className={`relative shrink-0 w-14 h-10 rounded-md overflow-hidden border transition-opacity ${
                  i === index ? "border-accent-yellow opacity-100" : "border-white/10 opacity-50 hover:opacity-80"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ikLoader({ src: thumb.url, width: 100, quality: 60 })}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}
