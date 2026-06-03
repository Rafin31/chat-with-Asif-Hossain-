"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { FiGithub, FiExternalLink, FiArrowLeft, FiArrowRight } from "react-icons/fi"
import { HiSparkles } from "react-icons/hi2"
import ProjectGallery from "@/components/ProjectGallery"
import ImageViewer from "@/components/ImageViewer"
import type { Project } from "@/data/portfolio"
import type { ProjectDetail } from "@/data/projectDetails"

const CATEGORY_LABEL: Record<string, string> = {
  fullstack: "Full Stack",
  frontend: "Frontend",
  backend: "Backend",
  blockchain: "Blockchain",
  freelance: "Freelance",
}

const ICON_COLORS = [
  "bg-amber-500/10 text-amber-300 border border-amber-500/20",
  "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
  "bg-purple-500/10 text-purple-300 border border-purple-500/20",
  "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
  "bg-pink-500/10 text-pink-300 border border-pink-500/20",
  "bg-orange-500/10 text-orange-300 border border-orange-500/20",
]

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface Props {
  project: Project
  detail: ProjectDetail | null
  galleryImages: string[]
  prevProject: Project | null
  nextProject: Project | null
}

export default function ProjectDetailClient({
  project,
  detail,
  galleryImages,
  prevProject,
  nextProject,
}: Props) {
  const projectStatus = project.ongoing
    ? "Ongoing"
    : project.category.includes("freelance")
    ? "Freelance"
    : "Personal"

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#07070f] pt-28 pb-20 overflow-hidden">
        {/* Floating gradient orbs */}
        <motion.div
          animate={{ y: [0, -28, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute w-[560px] h-[560px] rounded-full bg-gradient-to-br ${project.gradient} opacity-[0.11] blur-[100px] -top-40 -left-40 pointer-events-none`}
        />
        <motion.div
          animate={{ y: [0, 22, 0], scale: [1, 0.94, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className={`absolute w-[380px] h-[380px] rounded-full bg-gradient-to-br ${project.gradient} opacity-[0.07] blur-[80px] -bottom-24 right-0 pointer-events-none`}
        />

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-text-muted hover:text-accent-yellow text-sm mb-10 transition-colors group"
            >
              <FiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              All Projects
            </Link>
          </motion.div>

          {/* Pills row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="flex flex-wrap gap-2 mb-5"
          >
            {project.category.map((cat) => (
              <span
                key={cat}
                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-text-muted text-xs font-medium"
              >
                {CATEGORY_LABEL[cat] ?? cat}
              </span>
            ))}
            {project.ongoing && (
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-medium flex items-center gap-1.5">
                Live
              </span>
            )}
            {project.featured && (
              <span className="px-3 py-1 rounded-full bg-accent-yellow/10 border border-accent-yellow/25 text-accent-yellow text-xs font-medium flex items-center gap-1">
                <HiSparkles className="w-3 h-3" />
                Featured
              </span>
            )}
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.14 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold text-white leading-[1.08] tracking-tight mb-6 max-w-4xl"
          >
            {project.title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="text-text-muted text-base sm:text-lg max-w-2xl leading-relaxed mb-9"
          >
            {project.description}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34 }}
            className="flex flex-wrap gap-3"
          >
            {project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <FiGithub className="w-4 h-4" />
                Source Code
              </a>
            )}
            {project.demo !== "#" && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-yellow text-background rounded-xl text-sm font-semibold hover:bg-amber-400 transition-colors"
              >
                <FiExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── MAIN ──────────────────────────────────────────────────────────────── */}
      <main className="bg-background pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Gallery */}
          {(galleryImages.length > 0 || detail?.coverImage) && (
            <div className="-mt-6 mb-12">
              {galleryImages.length > 0 ? (
                <ProjectGallery images={galleryImages} alt={detail?.imageAlt ?? project.title} />
              ) : (
                <ImageViewer
                  images={[detail!.coverImage]}
                  alt={detail!.imageAlt}
                  credit={detail!.imageCredit}
                />
              )}
            </div>
          )}

          {/* ── Metrics strip ── */}
          <Reveal className="mb-14">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
              {project.highlight && (
                <div className="bg-card p-5 sm:p-6 flex flex-col gap-1.5 col-span-2 sm:col-span-1">
                  <span className="text-[10px] font-mono text-text-muted uppercase tracking-[0.12em]">Impact</span>
                  <div className="flex items-start gap-2 mt-0.5">
                    <HiSparkles className="w-4 h-4 text-accent-yellow shrink-0 mt-0.5" />
                    <span className="text-text-primary font-bold text-base leading-snug">{project.highlight}</span>
                  </div>
                </div>
              )}
              <div className="bg-card p-5 sm:p-6 flex flex-col gap-1">
                <span className="text-[10px] font-mono text-text-muted uppercase tracking-[0.12em]">Stack size</span>
                <span className="text-accent-cyan font-bold text-4xl leading-none mt-1">{project.tech.length}</span>
                <span className="text-text-muted text-xs mt-0.5">technologies</span>
              </div>
              <div className="bg-card p-5 sm:p-6 flex flex-col gap-1">
                <span className="text-[10px] font-mono text-text-muted uppercase tracking-[0.12em]">Type</span>
                <span className="text-accent-yellow font-bold text-xl leading-none mt-1">{projectStatus}</span>
                <span className="text-text-muted text-xs mt-0.5">project</span>
              </div>
            </div>
          </Reveal>

          {/* ── Two-column layout ── */}
          <div className="grid lg:grid-cols-3 gap-12 items-start">

            {/* Left: content */}
            <div className="lg:col-span-2 flex flex-col gap-14">

              {/* Overview */}
              <Reveal>
                <section>
                  <SectionHeading>Overview</SectionHeading>
                  <p className="text-text-muted leading-relaxed text-base">
                    {detail?.overview ?? project.longDescription}
                  </p>
                </section>
              </Reveal>

              {/* Features */}
              {detail?.features && detail.features.length > 0 && (
                <section>
                  <Reveal>
                    <SectionHeading>Key Features</SectionHeading>
                  </Reveal>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {detail.features.map((feature, i) => (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 22 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.42, delay: i * 0.06 }}
                        className="bg-card border border-border rounded-xl p-5 flex gap-4 hover:border-accent-yellow/20 transition-colors duration-300 group"
                      >
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center text-base shrink-0 ${ICON_COLORS[i % ICON_COLORS.length]}`}
                        >
                          {feature.icon}
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-semibold text-text-primary text-sm mb-1.5 group-hover:text-accent-yellow transition-colors duration-200">
                            {feature.title}
                          </h3>
                          <p className="text-text-muted text-xs leading-relaxed">{feature.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </section>
              )}

              {/* Challenge */}
              {detail?.challenge && (
                <Reveal>
                  <section>
                    <SectionHeading>The Challenge</SectionHeading>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/[0.04] to-transparent rounded-xl pointer-events-none" />
                      <div className="relative border border-accent-cyan/20 rounded-xl p-6 pl-7">
                        <div className="absolute left-0 top-4 bottom-4 w-[3px] bg-gradient-to-b from-accent-cyan/60 to-accent-cyan/20 rounded-full" />
                        <p className="text-text-muted leading-relaxed text-base">{detail.challenge}</p>
                      </div>
                    </div>
                  </section>
                </Reveal>
              )}

              {/* Outcome */}
              {detail?.outcome && (
                <Reveal>
                  <section>
                    <SectionHeading>Outcome</SectionHeading>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-accent-yellow/[0.04] to-transparent rounded-xl pointer-events-none" />
                      <div className="relative border border-accent-yellow/20 rounded-xl p-6 pl-7">
                        <div className="absolute left-0 top-4 bottom-4 w-[3px] bg-gradient-to-b from-accent-yellow/70 to-accent-yellow/20 rounded-full" />
                        <p className="text-text-muted leading-relaxed text-base">{detail.outcome}</p>
                      </div>
                    </div>
                  </section>
                </Reveal>
              )}
            </div>

            {/* Right: sticky sidebar */}
            <aside className="lg:sticky lg:top-24 h-fit">
              <Reveal>
                <div className="bg-card border border-border rounded-2xl overflow-hidden divide-y divide-border">

                  {/* Tech stack */}
                  <div className="p-6">
                    <p className="text-[10px] font-mono text-text-muted uppercase tracking-[0.12em] mb-4">Tech Stack</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] px-2.5 py-1 bg-surface text-accent-cyan border border-accent-cyan/15 rounded-lg font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="p-6 flex flex-col gap-3.5">
                    <p className="text-[10px] font-mono text-text-muted uppercase tracking-[0.12em] mb-1">Links</p>
                    {project.github !== "#" ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-text-muted hover:text-accent-yellow transition-colors text-sm group"
                      >
                        <FiGithub className="w-4 h-4 shrink-0 opacity-70" />
                        <span className="group-hover:underline underline-offset-2">Source Code</span>
                      </a>
                    ) : (
                      <span className="flex items-center gap-3 text-text-muted/35 text-sm select-none">
                        <FiGithub className="w-4 h-4 shrink-0" />
                        Private Repository
                      </span>
                    )}
                    {project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-text-muted hover:text-accent-cyan transition-colors text-sm group"
                      >
                        <FiExternalLink className="w-4 h-4 shrink-0 opacity-70" />
                        <span className="group-hover:underline underline-offset-2">Live Demo</span>
                      </a>
                    )}
                  </div>

                  {/* Categories */}
                  <div className="p-6">
                    <p className="text-[10px] font-mono text-text-muted uppercase tracking-[0.12em] mb-4">Categories</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.category.map((cat) => (
                        <span
                          key={cat}
                          className="text-[11px] px-2.5 py-1 bg-surface text-accent-yellow border border-accent-yellow/15 rounded-lg capitalize"
                        >
                          {CATEGORY_LABEL[cat] ?? cat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>

        {/* ── Next / Prev navigation ─────────────────────────────────────────── */}
        {(prevProject || nextProject) && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
            <Reveal>
              <div className="border-t border-border pt-10">
                <p className="text-[10px] font-mono text-text-muted uppercase tracking-[0.12em] mb-6">
                  More Projects
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {prevProject ? (
                    <Link href={`/projects/${prevProject.slug}`} className="group">
                      <div className="relative overflow-hidden rounded-2xl border border-border bg-card hover:border-accent-yellow/35 transition-all duration-300 p-6">
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${prevProject.gradient} opacity-0 group-hover:opacity-[0.07] transition-opacity duration-300 pointer-events-none`}
                        />
                        <p className="flex items-center gap-1.5 text-[11px] text-text-muted mb-3 font-mono">
                          <FiArrowLeft className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform" />
                          Previous
                        </p>
                        <h3 className="font-heading font-bold text-text-primary group-hover:text-accent-yellow transition-colors duration-200 text-sm leading-snug">
                          {prevProject.title}
                        </h3>
                        {prevProject.highlight && (
                          <p className="text-text-muted/60 text-xs mt-1.5 font-mono">{prevProject.highlight}</p>
                        )}
                      </div>
                    </Link>
                  ) : (
                    <div />
                  )}

                  {nextProject ? (
                    <Link href={`/projects/${nextProject.slug}`} className="group">
                      <div className="relative overflow-hidden rounded-2xl border border-border bg-card hover:border-accent-cyan/35 transition-all duration-300 p-6 text-right">
                        <div
                          className={`absolute inset-0 bg-gradient-to-bl ${nextProject.gradient} opacity-0 group-hover:opacity-[0.07] transition-opacity duration-300 pointer-events-none`}
                        />
                        <p className="flex items-center justify-end gap-1.5 text-[11px] text-text-muted mb-3 font-mono">
                          Next
                          <FiArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                        </p>
                        <h3 className="font-heading font-bold text-text-primary group-hover:text-accent-cyan transition-colors duration-200 text-sm leading-snug">
                          {nextProject.title}
                        </h3>
                        {nextProject.highlight && (
                          <p className="text-text-muted/60 text-xs mt-1.5 font-mono">{nextProject.highlight}</p>
                        )}
                      </div>
                    </Link>
                  ) : (
                    <div />
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        )}

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <Reveal>
            <div className="relative overflow-hidden bg-card border border-border rounded-2xl p-10 text-center">
              <div
                className="absolute inset-0 opacity-[0.025] pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-[0.04] pointer-events-none`} />
              <h2 className="font-heading text-2xl font-bold text-text-primary mb-3 relative z-10">
                Interested in working together?
              </h2>
              <p className="text-text-muted mb-8 relative z-10 max-w-md mx-auto text-sm leading-relaxed">
                I build projects like this for clients across Australia and globally. Get in touch to discuss your idea.
              </p>
              <div className="flex flex-wrap justify-center gap-3 relative z-10">
                <Link
                  href="/hire-me"
                  className="px-6 py-2.5 bg-accent-yellow text-background font-semibold rounded-xl hover:bg-amber-400 transition-colors text-sm"
                >
                  View Services
                </Link>
                <Link
                  href="/#contact"
                  className="px-6 py-2.5 bg-surface border border-border text-text-primary font-semibold rounded-xl hover:border-accent-cyan/40 transition-colors text-sm"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/#projects"
                  className="px-6 py-2.5 bg-surface border border-border text-text-muted font-medium rounded-xl hover:border-border/80 transition-colors text-sm"
                >
                  All Projects
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </main>
    </>
  )
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-heading text-xl font-bold text-text-primary mb-5 flex items-center gap-3">
      <span className="w-5 h-px bg-accent-yellow shrink-0" />
      {children}
    </h2>
  )
}
