import type { Metadata } from "next"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { services } from "@/data/services"
import { FiArrowRight } from "react-icons/fi"
import { HiSparkles } from "react-icons/hi2"

const BASE_URL = "https://asifhossain.dev"

export const metadata: Metadata = {
  // `absolute` bypasses the layout title template (which would push this past ~95 chars).
  title: { absolute: "Web Development & AI Automation Services | Wollongong AU" },
  description:
    "Full-stack web development, n8n automation, AI integration & cloud services for Australian businesses. Wollongong NSW. 50+ projects, 5-star rated.",
  keywords: [
    "web development services Australia",
    "AI automation services Australia",
    "n8n automation Australia",
    "freelance developer Australia",
    "web developer Wollongong",
    "AI integration Australia",
    "full-stack developer Australia",
    "Next.js developer Australia",
    "ecommerce development Australia",
    "cloud devops Australia",
  ].join(", "),
  alternates: { canonical: `${BASE_URL}/services` },
  openGraph: {
    type: "website",
    url: `${BASE_URL}/services`,
    title: "Web Development & AI Automation Services Australia",
    description:
      "Custom websites, AI-powered applications, n8n workflow automation, and cloud infrastructure for Australian businesses.",
    locale: "en_AU",
    // og:image served by app/services/opengraph-image.tsx (auto-wired by Next.js)
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development & AI Automation Services Australia",
    description:
      "Custom websites, AI apps, n8n automation & cloud infrastructure for Australian businesses. Wollongong NSW.",
  },
}

const trustSignals = [
  { value: "50+", label: "Projects Delivered" },
  { value: "5★", label: "Average Rating" },
  { value: "3+", label: "Years Experience" },
  { value: "AU", label: "Based in Australia" },
]

export default function ServicesPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Web Development & AI Automation Services",
    description: "Professional web development, AI integration, and automation services for Australian businesses",
    url: `${BASE_URL}/services`,
    numberOfItems: services.length,
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      url: `${BASE_URL}/services/${s.slug}`,
      description: s.metaDescription,
    })),
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Asif Hossain  Web Development & AI Automation",
    url: BASE_URL,
    image: `${BASE_URL}/profile.jpg`,
    email: "contact@asifhossain.dev",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Wollongong",
      addressRegion: "NSW",
      postalCode: "2500",
      addressCountry: "AU",
    },
    areaServed: ["Australia", "Wollongong", "Sydney", "Melbourne"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          url: `${BASE_URL}/services/${s.slug}`,
          description: s.tagline,
        },
      })),
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative bg-background pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-yellow/4 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <HiSparkles className="w-4 h-4 text-accent-yellow" />
            <span className="text-accent-yellow font-mono text-sm tracking-widest uppercase">
              Services
            </span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-5 section-title-underline">
            Web Development &amp; AI Automation Services Australia
          </h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Custom websites, AI-powered applications, n8n workflow automation, and cloud infrastructure delivered by a Wollongong-based developer with 50+ projects and 5-star results.
          </p>

          {/* Trust strip */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {trustSignals.map((t) => (
              <div key={t.label} className="text-center">
                <div className="text-2xl font-bold text-accent-yellow font-heading">{t.value}</div>
                <div className="text-text-muted text-xs font-mono">{t.label}</div>
              </div>
            ))}
          </div>

          <Link
            href="/hire-me"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent-yellow text-background font-semibold rounded-xl hover:bg-amber-400 transition-colors text-sm"
          >
            Get a Quote
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── Services grid ── */}
      <main className="bg-surface py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-text-primary mb-3 text-center">
            All Services
          </h2>
          <p className="text-text-muted text-center text-sm mb-12 max-w-xl mx-auto">
            Each service page includes full details, deliverables, pricing, and FAQs  click any card to learn more.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative overflow-hidden bg-card border border-border rounded-2xl p-6 hover:border-accent-yellow/30 transition-all duration-300 hover:shadow-xl hover:shadow-black/20 flex flex-col gap-4"
              >
                {/* Gradient tint on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300 pointer-events-none`}
                />

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-br ${service.gradient} bg-opacity-10 shrink-0`}
                  style={{ background: "rgba(255,255,255,0.05)" }}
                >
                  {service.icon}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="font-heading font-bold text-text-primary text-base leading-snug group-hover:text-accent-yellow transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-text-muted text-xs leading-relaxed">{service.tagline}</p>
                </div>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-1.5">
                  {service.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-surface text-accent-cyan border border-accent-cyan/15 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                  {service.tech.length > 3 && (
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-surface text-text-muted border border-border font-mono">
                      +{service.tech.length - 3}
                    </span>
                  )}
                </div>

                {/* Arrow */}
                <div className="flex items-center justify-end pt-1 border-t border-border">
                  <span className="text-accent-yellow text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more <FiArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* ── Why Asif ── */}
      <section className="bg-background py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl font-bold text-text-primary mb-10 section-title-underline inline-block">
            Why Work With Me
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
            {[
              { icon: "🇦🇺", title: "Australia-Based", desc: "Wollongong, NSW. No timezone headaches, clear communication, ABN-registered." },
              { icon: "⭐", title: "5-Star Rated", desc: "50+ projects delivered with 100% client satisfaction across Fiverr and direct clients." },
              { icon: "🚀", title: "Fast Delivery", desc: "Clear scoping, no scope creep, and milestone-based delivery that keeps projects moving." },
              { icon: "🔧", title: "Full-Stack Capable", desc: "Design to deployment  frontend, backend, AI, DevOps. One developer, not a team of freelancers." },
            ].map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-2xl p-5 text-left">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-heading font-semibold text-text-primary text-sm mb-2">{item.title}</h3>
                <p className="text-text-muted text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-surface py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl font-bold text-text-primary mb-3">
            Not sure which service you need?
          </h2>
          <p className="text-text-muted text-sm mb-8">
            Book a free 20-minute discovery call and I will recommend the right approach for your project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/hire-me"
              className="px-6 py-3 bg-accent-yellow text-background font-semibold rounded-xl hover:bg-amber-400 transition-colors text-sm"
            >
              Start a Project
            </Link>
            <Link
              href="/#contact"
              className="px-6 py-3 bg-card border border-border text-text-primary font-semibold rounded-xl hover:border-accent-cyan/40 transition-colors text-sm"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
