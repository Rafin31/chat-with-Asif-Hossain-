"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { FiArrowRight, FiCheck } from "react-icons/fi"
import ServicePageClient from "@/components/ServicePageClient"
import type { Service } from "@/data/services"
import type { BlogPostMeta } from "@/lib/blog"

const ICON_COLORS = [
  "bg-amber-500/10 text-amber-300 border border-amber-500/20",
  "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
  "bg-purple-500/10 text-purple-300 border border-purple-500/20",
  "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
  "bg-pink-500/10 text-pink-300 border border-pink-500/20",
  "bg-orange-500/10 text-orange-300 border border-orange-500/20",
]

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  return (
    <motion.div
      ref={ref}
      initial={{ y: 28 }}
      animate={inView ? { y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], delay }}
      className={className}
    >
      {children}
    </motion.div>
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

interface Props {
  service: Service
  relatedServices: Service[]
  relatedPosts?: BlogPostMeta[]
}

export default function ServiceDetailClient({ service, relatedServices, relatedPosts = [] }: Props) {
  return (
    <main className="bg-background pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Timeline strip (no price) */}
        <Reveal className="mt-10 mb-14">
          <div className="grid grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            <div className="bg-card p-5 sm:p-6">
              <p className="text-[10px] font-mono text-text-muted uppercase tracking-[0.12em] mb-1.5">Timeline</p>
              <p className="text-accent-cyan font-bold text-xl leading-tight">{service.timeline}</p>
            </div>
            <div className="bg-card p-5 sm:p-6">
              <p className="text-[10px] font-mono text-text-muted uppercase tracking-[0.12em] mb-1.5">Location</p>
              <p className="text-text-primary font-bold text-xl leading-tight">Australia-Wide</p>
            </div>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-12 items-start">

          {/* Left: main content */}
          <div className="lg:col-span-2 flex flex-col gap-14">

            {/* Overview */}
            <Reveal>
              <section>
                <SectionHeading>Overview</SectionHeading>
                <p className="text-text-muted leading-relaxed text-base">{service.overview}</p>
                {service.overviewExtended?.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="text-text-muted leading-relaxed text-base mt-4">
                    {paragraph}
                  </p>
                ))}
              </section>
            </Reveal>

            {/* What's included */}
            <Reveal>
              <section>
                <SectionHeading>What&apos;s Included</SectionHeading>
                <ul className="flex flex-col gap-3">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-text-muted text-sm leading-relaxed">
                      <FiCheck className="w-4 h-4 text-accent-yellow shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>

            {/* Key features */}
            <section>
              <Reveal>
                <SectionHeading>Key Features</SectionHeading>
              </Reveal>
              <div className="grid sm:grid-cols-2 gap-3">
                {service.features.map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    initial={{ y: 22 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.42, delay: i * 0.07 }}
                    className="bg-card border border-border rounded-xl p-5 flex gap-4 hover:border-accent-yellow/20 transition-colors duration-300"
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-base shrink-0 ${ICON_COLORS[i % ICON_COLORS.length]}`}>
                      {feature.icon}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-text-primary text-sm mb-1.5">{feature.title}</h3>
                      <p className="text-text-muted text-xs leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* How I work */}
            {service.processSteps && service.processSteps.length > 0 && (
              <Reveal>
                <section>
                  <SectionHeading>How I Work</SectionHeading>
                  <ol className="flex flex-col gap-4">
                    {service.processSteps.map((step, i) => (
                      <li key={step.title} className="flex gap-4">
                        <span className="w-8 h-8 rounded-lg bg-accent-yellow/10 border border-accent-yellow/20 text-accent-yellow font-mono text-sm flex items-center justify-center shrink-0">
                          {i + 1}
                        </span>
                        <div className="min-w-0">
                          <h3 className="font-semibold text-text-primary text-sm mb-1">{step.title}</h3>
                          <p className="text-text-muted text-sm leading-relaxed">{step.description}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </section>
              </Reveal>
            )}

            {/* Ways to work together (no prices) */}
            {service.engagementModels && service.engagementModels.length > 0 && (
              <Reveal>
                <section>
                  <SectionHeading>Ways to Work Together</SectionHeading>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {service.engagementModels.map((model) => (
                      <div key={model.title} className="bg-card border border-border rounded-xl p-5 flex flex-col">
                        <h3 className="font-semibold text-text-primary text-sm mb-2">{model.title}</h3>
                        <p className="text-text-muted text-xs leading-relaxed flex-1">{model.description}</p>
                        <p className="text-accent-cyan text-xs mt-3 leading-relaxed">
                          <span className="font-semibold">Best for:</span> {model.bestFor}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </Reveal>
            )}

            {/* Case study */}
            {service.caseStudy && (
              <Reveal>
                <section>
                  <SectionHeading>Real Project Example</SectionHeading>
                  <div className="bg-card border border-border rounded-2xl p-6">
                    <h3 className="font-heading font-bold text-text-primary text-base mb-3">
                      {service.caseStudy.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed mb-4">{service.caseStudy.summary}</p>
                    <ul className="flex flex-col gap-2 mb-4">
                      {service.caseStudy.results.map((result) => (
                        <li key={result} className="flex items-start gap-3 text-text-muted text-sm leading-relaxed">
                          <FiCheck className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                          {result}
                        </li>
                      ))}
                    </ul>
                    {service.caseStudy.projectSlug && (
                      <Link
                        href={`/projects/${service.caseStudy.projectSlug}`}
                        className="inline-flex items-center gap-1.5 text-accent-yellow text-sm font-medium hover:gap-2.5 transition-all"
                      >
                        View the full project <FiArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                </section>
              </Reveal>
            )}

            {/* Local areas served */}
            {service.localAreas && service.localAreas.length > 0 && (
              <Reveal>
                <section>
                  <SectionHeading>Serving Clients Across Australia</SectionHeading>
                  {service.localAreas.map((paragraph, i) => (
                    <p key={paragraph.slice(0, 40)} className={`text-text-muted leading-relaxed text-base ${i > 0 ? "mt-4" : ""}`}>
                      {paragraph}
                    </p>
                  ))}
                </section>
              </Reveal>
            )}

            {/* FAQ */}
            <Reveal>
              <section>
                <SectionHeading>Frequently Asked Questions</SectionHeading>
                <ServicePageClient faqs={service.faqs} />
              </section>
            </Reveal>
          </div>

          {/* Right: sticky sidebar */}
          <Reveal delay={0.1}>
            <aside className="lg:sticky lg:top-24 h-fit">
              <div className="bg-card border border-border rounded-2xl overflow-hidden divide-y divide-border">

                {/* Tech stack */}
                <div className="p-6">
                  <p className="text-[10px] font-mono text-text-muted uppercase tracking-[0.12em] mb-4">Tech Stack</p>
                  <div className="flex flex-wrap gap-1.5">
                    {service.tech.map((t) => (
                      <span key={t} className="text-[11px] px-2.5 py-1 bg-surface text-accent-cyan border border-accent-cyan/15 rounded-lg font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="p-6">
                  <p className="text-[10px] font-mono text-text-muted uppercase tracking-[0.12em] mb-4">Ready to Start?</p>
                  <Link
                    href="/hire-me"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-accent-yellow text-background rounded-xl text-sm font-semibold hover:bg-amber-400 transition-colors"
                  >
                    Get a Quote
                    <FiArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/#contact"
                    className="flex items-center justify-center gap-2 w-full px-4 py-2.5 mt-2 border border-border text-text-muted rounded-xl text-sm font-medium hover:border-accent-cyan/40 hover:text-text-primary transition-colors"
                  >
                    Ask a Question
                  </Link>
                </div>

                {/* Timeline only */}
                <div className="p-6">
                  <p className="text-[10px] font-mono text-text-muted uppercase tracking-[0.12em] mb-2">Typical Timeline</p>
                  <p className="text-accent-cyan font-bold text-lg">{service.timeline}</p>
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>

      {/* Further reading related blog posts */}
      {relatedPosts.length > 0 && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <Reveal>
            <div className="border-t border-border pt-10">
              <p className="text-[10px] font-mono text-text-muted uppercase tracking-[0.12em] mb-6">Further Reading</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {relatedPosts.map((post, i) => (
                  <motion.div
                    key={post.slug}
                    initial={{ y: 20 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group bg-card border border-border rounded-2xl p-5 hover:border-accent-cyan/30 transition-all duration-300 flex flex-col h-full"
                    >
                      <span className="text-accent-cyan font-mono text-[10px] tracking-widest uppercase mb-2">
                        {post.category} · {post.readTime}
                      </span>
                      <h3 className="font-heading font-bold text-text-primary text-sm leading-snug group-hover:text-accent-cyan transition-colors mb-1.5">
                        {post.title}
                      </h3>
                      <p className="text-text-muted text-xs leading-relaxed line-clamp-2 flex-1">{post.description}</p>
                      <p className="flex items-center gap-1 text-accent-cyan text-xs mt-3 font-medium">
                        Read article <FiArrowRight className="w-3 h-3" />
                      </p>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      )}

      {/* Related services */}
      {relatedServices.length > 0 && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <Reveal>
            <div className="border-t border-border pt-10">
              <p className="text-[10px] font-mono text-text-muted uppercase tracking-[0.12em] mb-6">Related Services</p>
              <div className="grid sm:grid-cols-3 gap-4">
                {relatedServices.map((s, i) => (
                  <motion.div
                    key={s.slug}
                    initial={{ y: 20 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                  >
                    <Link
                      href={`/services/${s.slug}`}
                      className="group relative overflow-hidden bg-card border border-border rounded-2xl p-5 hover:border-accent-yellow/30 transition-all duration-300 flex flex-col h-full"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-[0.05] transition-opacity pointer-events-none`} />
                      <div className="text-2xl mb-3">{s.icon}</div>
                      <h3 className="font-heading font-bold text-text-primary text-sm leading-snug group-hover:text-accent-yellow transition-colors mb-1">
                        {s.title}
                      </h3>
                      <p className="text-text-muted text-xs leading-relaxed flex-1">{s.tagline}</p>
                      <p className="flex items-center gap-1 text-accent-yellow text-xs mt-3 font-medium">
                        Learn more <FiArrowRight className="w-3 h-3" />
                      </p>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      )}

      {/* CTA */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <Reveal>
          <div className={`relative overflow-hidden bg-card border border-border rounded-2xl p-10 text-center`}>
            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-[0.04] pointer-events-none`} />
            <h2 className="font-heading text-2xl font-bold text-text-primary mb-3 relative z-10">
              Ready to get started?
            </h2>
            <p className="text-text-muted mb-8 relative z-10 max-w-md mx-auto text-sm leading-relaxed">
              Tell me about your project and I will get back to you within 24 hours with a plan and quote.
            </p>
            <div className="flex flex-wrap justify-center gap-3 relative z-10">
              <Link
                href="/hire-me"
                className="px-6 py-2.5 bg-accent-yellow text-background font-semibold rounded-xl hover:bg-amber-400 transition-colors text-sm"
              >
                Start a Project
              </Link>
              <Link
                href="/services"
                className="px-6 py-2.5 bg-surface border border-border text-text-muted font-medium rounded-xl hover:border-border/80 transition-colors text-sm"
              >
                View All Services
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </main>
  )
}
