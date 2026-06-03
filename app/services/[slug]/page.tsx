import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { services, getService } from "@/data/services"
import ServiceDetailClient from "@/components/ServiceDetailClient"
import { FiArrowLeft } from "react-icons/fi"

const BASE_URL = "https://asifhossain.dev"

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getService(params.slug)
  if (!service) return {}
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords.join(", "),
    alternates: { canonical: `${BASE_URL}/services/${service.slug}` },
    openGraph: {
      type: "website",
      url: `${BASE_URL}/services/${service.slug}`,
      title: service.metaTitle,
      description: service.metaDescription,
      images: [{ url: `${BASE_URL}/profile.jpg`, width: 400, alt: "Asif Hossain" }],
      locale: "en_AU",
    },
  }
}

export default function ServicePage({ params }: Props) {
  const service = getService(params.slug)
  if (!service) notFound()

  const relatedServices = services.filter((s) => service.relatedSlugs.includes(s.slug))

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services` },
      { "@type": "ListItem", position: 3, name: service.title, item: `${BASE_URL}/services/${service.slug}` },
    ],
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.overview,
    url: `${BASE_URL}/services/${service.slug}`,
    provider: {
      "@type": "Person",
      name: "Asif Hossain",
      url: BASE_URL,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Wollongong",
        addressRegion: "NSW",
        addressCountry: "AU",
      },
    },
    areaServed: { "@type": "Country", name: "Australia" },
    serviceType: service.title,
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />

      {/* ── Hero ── */}
      <section className={`relative bg-gradient-to-br ${service.gradient} pt-28 pb-16 overflow-hidden`}>
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 50%, transparent 20%, rgba(0,0,0,0.45) 100%)" }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/60 text-xs font-mono mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white/90">{service.title}</span>
          </nav>

          <div className="text-5xl mb-6">{service.icon}</div>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 max-w-3xl">
            {service.title}
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed mb-8">
            {service.tagline}
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/hire-me"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-yellow text-background rounded-xl text-sm font-semibold hover:bg-amber-400 transition-colors"
            >
              Get a Quote
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 border border-white/20 rounded-xl text-white text-sm font-medium hover:bg-white/20 transition-colors"
            >
              <FiArrowLeft className="w-4 h-4" />
              All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── Animated main content (client component) ── */}
      <ServiceDetailClient service={service} relatedServices={relatedServices} />

      <Footer />
    </>
  )
}
