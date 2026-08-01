"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, useInView, useScroll, useTransform } from "framer-motion"
import { experiences } from "@/data/portfolio"
import { HiMapPin, HiCalendar, HiCheckCircle, HiChevronDown } from "react-icons/hi2"

function TypeBadge({ type }: { type: string }) {
  const colours: Record<string, string> = {
    Contract: "bg-accent-yellow/15 text-accent-yellow border-accent-yellow/30",
    Freelance: "bg-accent-cyan/15 text-accent-cyan border-accent-cyan/30",
    "Full-time": "bg-emerald-400/15 text-emerald-400 border-emerald-400/30",
    Internship: "bg-purple-400/15 text-purple-400 border-purple-400/30",
    "Part-time": "bg-purple-400/15 text-purple-400 border-purple-400/30",
  }
  return (
    <span className={`text-xs font-medium px-2.5 py-1 rounded-full border shrink-0 ${colours[type] || "bg-border text-text-muted border-border"}`}>
      {type}
    </span>
  )
}

// Animated timeline rail that draws itself on scroll
function AnimatedRail() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end end"] })
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div ref={ref} className="absolute left-4 top-2 bottom-2 w-0.5 overflow-hidden">
      <div className="absolute inset-0 bg-border/50 rounded-full" />
      <motion.div
        style={{
          scaleY,
          originY: 0,
          background: "linear-gradient(180deg, #f59e0b, #22d3ee)",
          boxShadow: "0 0 8px rgba(245,158,11,0.5)",
        }}
        className="absolute inset-0 rounded-full"
      />
    </div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  // All entries start collapsed
  const [openId, setOpenId] = useState<number | null>(null)

  return (
    <section id="experience" className="py-24 bg-surface relative overflow-hidden">
      {/* Animated grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#f59e0b 1px, transparent 1px), linear-gradient(90deg, #f59e0b 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating glow orbs */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 w-72 h-72 bg-accent-yellow/6 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-10 w-80 h-80 bg-accent-cyan/6 rounded-full blur-3xl pointer-events-none"
      />

      <div ref={ref} className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-accent-yellow font-mono text-sm tracking-widest uppercase mb-3">
            Career journey
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-text-primary section-title-underline">
            Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-12">
          <AnimatedRail />

          <div className="flex flex-col gap-3">
            {experiences.map((exp, i) => (
              <ExperienceRow
                key={exp.id}
                exp={exp}
                index={i}
                isOpen={openId === exp.id}
                onToggle={() => setOpenId((cur) => (cur === exp.id ? null : exp.id))}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceRow({
  exp,
  index,
  isOpen,
  onToggle,
}: {
  exp: (typeof experiences)[0]
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  const rowRef = useRef<HTMLDivElement>(null)
  const isRowInView = useInView(rowRef, { once: true, margin: "-40px" })
  const panelId = `experience-panel-${exp.id}`

  // Only scroll if opening (or another row shrinking) pushed this row
  // partly out of view — never scroll when it's already fully visible.
  useEffect(() => {
    if (!isOpen) return
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const timer = setTimeout(() => {
      const el = rowRef.current
      if (!el) return
      const NAV_OFFSET = 96 // matches scroll-mt-24, clears the fixed navbar
      const rect = el.getBoundingClientRect()
      const fullyVisible = rect.top >= NAV_OFFSET && rect.bottom <= window.innerHeight
      if (!fullyVisible) {
        el.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" })
      }
    }, 320)
    return () => clearTimeout(timer)
  }, [isOpen])

  return (
    <motion.div
      ref={rowRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isRowInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      style={{ scrollMarginTop: 96 }}
      className="relative"
    >
      {/* Timeline dot */}
      <div className="absolute -left-12 top-5 flex items-center justify-center w-8 h-8">
        {exp.current ? (
          <>
            <span className="absolute inline-flex w-3 h-3 rounded-full bg-accent-yellow/50 animate-ping" />
            <span className="relative w-3 h-3 rounded-full bg-accent-yellow shadow-[0_0_12px_rgba(245,158,11,0.8)]" />
          </>
        ) : (
          <span className="w-2.5 h-2.5 rounded-full bg-border border-2 border-accent-cyan/50" />
        )}
      </div>

      <div
        className={`bg-card border rounded-2xl overflow-hidden transition-colors duration-300 ${
          isOpen ? "border-accent-yellow/40" : "border-border hover:border-accent-yellow/25"
        }`}
      >
        {/* Collapsed header — always visible, click to expand */}
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="w-full text-left px-5 py-4 flex items-start gap-3 group"
        >
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <h3 className="font-heading font-bold text-text-primary text-base sm:text-lg leading-tight">
                {exp.role}
              </h3>
              <span className="text-accent-yellow font-medium text-sm">{exp.company}</span>
              {exp.current && (
                <span className="text-[11px] font-semibold uppercase tracking-wide text-accent-yellow/90 bg-accent-yellow/10 px-2 py-0.5 rounded-full">
                  Present
                </span>
              )}
            </div>

            <div className="flex flex-wrap gap-3 mt-1.5 mb-2 text-xs text-text-muted">
              <span className="flex items-center gap-1"><HiMapPin className="w-3.5 h-3.5" />{exp.location}</span>
              <span className="flex items-center gap-1 font-mono"><HiCalendar className="w-3.5 h-3.5" />{exp.duration}</span>
              <TypeBadge type={exp.type} />
            </div>

            <p className="text-text-muted text-sm leading-relaxed">{exp.summary}</p>
          </div>

          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            className="mt-1.5 text-text-muted group-hover:text-accent-yellow shrink-0"
          >
            <HiChevronDown className="w-5 h-5" />
          </motion.span>
        </button>

        {/* Expanded detail */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id={panelId}
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-5 pb-5 pt-1 border-t border-border/60">
                <ul className="flex flex-col gap-2 mt-4 mb-4">
                  {exp.description.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-text-muted text-sm leading-relaxed">
                      <HiCheckCircle className="w-4 h-4 text-accent-yellow flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20 rounded-lg"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
