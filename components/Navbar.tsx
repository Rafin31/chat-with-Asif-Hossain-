"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { navLinks, pageLinks } from "@/data/portfolio"

// ── Logo ──────────────────────────────────────────────────────────────────────
function LogoMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="group flex items-baseline font-mono tracking-tight select-none">
      <span
        className={`text-accent-cyan/70 font-bold group-hover:text-accent-cyan transition-colors ${
          compact ? "text-sm" : "text-base"
        }`}
      >
        &lt;
      </span>
      <span
        className={`font-heading font-black text-text-primary ${compact ? "text-base" : "text-lg"}`}
      >
        Rafin
      </span>
      <span
        className={`text-accent-yellow font-bold group-hover:text-accent-cyan transition-colors ${
          compact ? "text-sm" : "text-base"
        }`}
      >
        /&gt;
      </span>
    </span>
  )
}

// ── Animated hamburger → X ────────────────────────────────────────────────────
function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <div className="relative w-6 h-5">
      <motion.span
        animate={{ rotate: open ? 45 : 0, y: open ? 9 : 0 }}
        transition={{ duration: 0.28, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full h-[2px] bg-current rounded-full"
      />
      <motion.span
        animate={{ opacity: open ? 0 : 1, scaleX: open ? 0 : 0.8 }}
        transition={{ duration: 0.18 }}
        className="absolute top-[9px] left-0 h-[2px] bg-current rounded-full"
        style={{ width: "80%" }}
      />
      <motion.span
        animate={{ rotate: open ? -45 : 0, y: open ? -9 : 0 }}
        transition={{ duration: 0.28, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-full h-[2px] bg-current rounded-full"
      />
    </div>
  )
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function Navbar() {
  const [scrolled, setScrolled]       = useState(false)
  const [mobileOpen, setMobileOpen]   = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const pathname = usePathname()
  const isHome   = pathname === "/"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!isHome) return
    const ids = navLinks.map((l) => l.href.replace("#", ""))
    const observers: IntersectionObserver[] = []
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActiveSection(id) },
        { threshold: 0, rootMargin: "-40% 0px -55% 0px" }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [isHome])

  // Lock scroll when mobile overlay open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    if (isHome) {
      const id = href.replace("#", "")
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 300)
    } else {
      window.location.href = `/${href}`
    }
  }

  const allLinks = [...navLinks, ...pageLinks]

  return (
    <>
      {/* ── Nav bar ─────────────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 pointer-events-none px-4 sm:px-6">
        <motion.div
          className="pointer-events-auto mx-auto"
          animate={
            scrolled
              ? {
                  maxWidth: 980,
                  marginTop: 12,
                  borderRadius: 9999,
                  backgroundColor: "rgba(9,9,18,0.94)",
                  boxShadow:
                    "0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.07)",
                  paddingLeft: 12,
                  paddingRight: 12,
                  overflow: "hidden",
                }
              : {
                  maxWidth: 2000,
                  marginTop: 0,
                  borderRadius: 0,
                  backgroundColor: "transparent",
                  boxShadow: "none",
                  paddingLeft: 0,
                  paddingRight: 0,
                }
          }
          transition={{ duration: 0.48, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ backdropFilter: scrolled ? "blur(24px)" : "none" }}
        >
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              scrolled
                ? "h-[46px]"
                : "h-16 px-2 sm:px-4 lg:px-6 max-w-7xl mx-auto"
            }`}
          >
            {/* Logo */}
            {isHome ? (
              <button onClick={() => handleNavClick("#home")} className="shrink-0">
                <LogoMark compact={scrolled} />
              </button>
            ) : (
              <Link href="/" className="shrink-0">
                <LogoMark compact={scrolled} />
              </Link>
            )}

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) => {
                const isActive =
                  isHome && activeSection === link.href.replace("#", "")
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`relative px-2.5 py-1 text-sm font-medium rounded-full transition-all duration-200 ${
                      isActive
                        ? "text-accent-yellow bg-accent-yellow/10"
                        : "text-text-muted hover:text-text-primary hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </button>
                )
              })}

              {pageLinks.map((link) => {
                const isActive  = pathname === link.href
                const isHireMe  = link.href === "/hire-me"

                if (isHireMe) {
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`ml-2 whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
                        isActive
                          ? "bg-accent-yellow text-background border-accent-yellow"
                          : "border-accent-yellow/60 text-accent-yellow hover:bg-accent-yellow hover:text-background"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                }
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-1 text-sm font-medium rounded-full transition-all duration-200 ${
                      isActive
                        ? "text-accent-yellow bg-accent-yellow/10"
                        : "text-text-muted hover:text-text-primary hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-text-muted hover:text-text-primary transition-colors"
              aria-label="Toggle menu"
            >
              <HamburgerIcon open={mobileOpen} />
            </button>
          </div>
        </motion.div>
      </nav>

      {/* ── Mobile fullscreen overlay ────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[99] flex flex-col"
            style={{
              background:
                "linear-gradient(150deg, rgba(7,7,16,0.99) 0%, rgba(11,11,22,0.99) 100%)",
              backdropFilter: "blur(20px)",
            }}
          >
            {/* Background dot grid */}
            <div
              className="absolute inset-0 opacity-[0.035] pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
            {/* Ambient glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-accent-yellow/[0.025] blur-3xl pointer-events-none" />

            {/* Top bar */}
            <div className="relative z-10 flex items-center justify-between px-6 h-16 border-b border-white/[0.06]">
              <LogoMark />
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-text-muted hover:text-text-primary transition-colors"
                aria-label="Close menu"
              >
                <HamburgerIcon open />
              </button>
            </div>

            {/* Nav links */}
            <nav className="relative z-10 flex-1 flex flex-col justify-center px-8 gap-0.5 overflow-y-auto py-8">
              {allLinks.map((link, i) => {
                const isHireMe = link.href === "/hire-me"
                const isAnchor = link.href.startsWith("#")
                const isActive = isAnchor
                  ? isHome && activeSection === link.href.replace("#", "")
                  : pathname === link.href

                const label = (
                  <span
                    className={`font-heading font-bold text-[2rem] leading-none tracking-tight transition-colors duration-200 ${
                      isHireMe
                        ? "text-accent-yellow"
                        : isActive
                        ? "text-accent-yellow"
                        : "text-white/30 group-hover:text-text-primary"
                    }`}
                  >
                    {link.label}
                  </span>
                )

                const prefix = (
                  <span className="text-[10px] font-mono text-white/15 w-6 shrink-0 group-hover:text-accent-yellow/40 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                )

                const badge = isHireMe ? (
                  <span className="ml-3 text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                    available
                  </span>
                ) : null

                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.28, delay: 0.04 + i * 0.05 }}
                  >
                    {isAnchor ? (
                      <button
                        onClick={() => handleNavClick(link.href)}
                        className="group flex items-center gap-4 w-full py-3.5"
                      >
                        {prefix}
                        {label}
                        {badge}
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="group flex items-center gap-4 w-full py-3.5"
                      >
                        {prefix}
                        {label}
                        {badge}
                      </Link>
                    )}
                  </motion.div>
                )
              })}
            </nav>

            {/* Bottom bar */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.3 }}
              className="relative z-10 px-8 py-6 border-t border-white/[0.06]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-emerald-400 font-mono">
                  ◆ Available for freelance<span className="animate-blink ml-0.5 font-bold">_</span>
                </div>
                <span className="text-[11px] text-white/20 font-mono">rafinh.dev</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
