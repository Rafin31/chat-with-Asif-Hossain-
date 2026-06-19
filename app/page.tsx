import dynamic from "next/dynamic"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import { projects, testimonials } from "@/data/portfolio"

// Below-the-fold: defer these to reduce initial JS bundle
const About       = dynamic(() => import("@/components/About"))
const Skills      = dynamic(() => import("@/components/Skills"))
const AISkills    = dynamic(() => import("@/components/AISkills"))
const Experience  = dynamic(() => import("@/components/Experience"))
const ServicesTeaser = dynamic(() => import("@/components/ServicesTeaser"))
const Projects    = dynamic(() => import("@/components/Projects"))
const Testimonials = dynamic(() => import("@/components/Testimonials"))
const Contact     = dynamic(() => import("@/components/Contact"))
const Footer      = dynamic(() => import("@/components/Footer"))

const BASE_URL = "https://asifhossain.dev"

const projectsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Portfolio Projects by Asif Hossain",
  description: "Full-stack web development projects by Asif Hossain, a developer based in Wollongong, Australia.",
  itemListElement: projects.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "SoftwareApplication",
      name: project.title,
      description: project.longDescription,
      applicationCategory: "WebApplication",
      programmingLanguage: project.tech,
      author: {
        "@type": "Person",
        name: "Asif Hossain",
        url: BASE_URL,
      },
      ...(project.demo && project.demo !== "#" ? { url: project.demo } : {}),
    },
  })),
}

// Attaches real Review nodes + AggregateRating to the same #business entity defined in
// layout.tsx. Lives here because the homepage is where these testimonials visibly render
// (Google ignores/flags ratings with no on-page, non-self-authored reviews).
const avgRating =
  testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length

const businessReviewsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${BASE_URL}/#business`,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: avgRating.toFixed(1),
    reviewCount: String(testimonials.length),
    bestRating: "5",
    worstRating: "1",
  },
  review: testimonials.map((t) => ({
    "@type": "Review",
    author: { "@type": "Person", name: t.name },
    reviewBody: t.quote,
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(t.rating),
      bestRating: "5",
      worstRating: "1",
    },
  })),
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessReviewsJsonLd) }}
      />
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <AISkills />
        <Experience />
        <ServicesTeaser />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
