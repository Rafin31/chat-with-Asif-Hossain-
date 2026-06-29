import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GoogleAnalytics } from "@next/third-parties/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const BASE_URL = "https://asifhossain.dev"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#09090f",
}

export const metadata: Metadata = {
  // ── Core ──────────────────────────────────────────────────
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Website Developer Australia | Asif Hossain",
    template: "%s | Asif Hossain – Australian Website Developer",
  },
  description:
    "Professional website developer in Australia. Asif Hossain builds websites and web apps for Australian businesses. React, Next.js, Node.js expert. 50+ projects delivered, 100% client satisfaction.",
  keywords: [
    // Customer-facing (what people actually search)
    "website developer australia",
    "web developer australia",
    "website developer sydney",
    "web developer sydney",
    "website developer melbourne",
    "web developer melbourne",
    "website developer nsw",
    "hire website developer australia",
    "small business website developer australia",
    "affordable website developer australia",
    "professional web developer australia",
    "business website developer australia",
    "website design australia",
    "web design australia",
    "freelance web developer australia",
    // AI & automation
    "n8n automation australia",
    "n8n consultant australia",
    "AI developer australia",
    "AI automation engineer australia",
    "AI integration developer australia",
    "workflow automation australia",
    "LangChain developer australia",
    "Claude API developer",
    // Technical / professional
    "Asif Hossain",
    "Full-Stack Developer Australia",
    "AI Automation Engineer Australia",
    "React developer australia",
    "Next.js Developer Australia",
    "Node.js Developer",
    "TypeScript Developer",
  ],
  authors: [{ name: "Asif Hossain", url: BASE_URL }],
  creator: "Asif Hossain",
  publisher: "Asif Hossain",
  category: "technology",

  // ── Canonical URL ─────────────────────────────────────────
  alternates: {
    canonical: BASE_URL,
  },

  // Icons auto-wired by Next.js from app/favicon.ico, app/icon.png, app/apple-icon.png

  // ── Open Graph ────────────────────────────────────────────
  openGraph: {
    type: "website",
    url: BASE_URL,
    title: "Website Developer Australia | Asif Hossain | Web Developer",
    description:
      "Professional website developer in Australia. Building websites and web apps for Australian businesses. 50+ projects, 5-star rated.",
    siteName: "Asif Hossain – Australian Website Developer",
    // og:image comes from app/opengraph-image.tsx (1200x630, auto-wired by Next.js)
    locale: "en_AU",
  },

  // ── Twitter / X ───────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Website Developer Australia | Asif Hossain",
    description:
      "Professional Australian website developer. Websites and web apps for businesses across Australia.",
    creator: "@Rafin31",
  },

  // ── Robots ────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
}

// ── JSON-LD: Person ────────────────────────────────────────────────────────
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Asif Hossain",
  url: BASE_URL,
  image: `${BASE_URL}/profile.jpg`,
  jobTitle: "Full-Stack Developer & AI Automation Engineer",
  description:
    "Full-Stack Developer and AI Automation Engineer based in Australia. Building custom websites, AI-powered web applications, and n8n workflow automation for Australian businesses.",
  email: "contact@asifhossain.dev",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sydney",
    addressRegion: "NSW",
    addressCountry: "AU",
  },
  sameAs: [
    "https://github.com/Rafin31",
    "https://www.linkedin.com/in/asif-hossain-6982b81ba/",
    "https://www.fiverr.com/rafin_31",
  ],
  knowsAbout: [
    "Website Development", "Web Design", "React.js", "Next.js",
    "Node.js", "TypeScript", "JavaScript", "MongoDB", "PostgreSQL",
    "TailwindCSS", "AWS", "E-Commerce Development",
    "n8n Automation", "Workflow Automation", "AI Integration",
    "LangChain", "Anthropic API", "OpenAI API", "AI Agents",
    "RAG Systems", "Prompt Engineering",
  ],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "University of Wollongong",
      url: "https://www.uow.edu.au",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "American International University – Bangladesh",
    },
  ],
}

// ── JSON-LD: LocalBusiness (critical for "website developer australia") ──
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${BASE_URL}/#business`,
  name: "Asif Hossain – Australian Web Developer & AI Automation Engineer",
  url: BASE_URL,
  image: `${BASE_URL}/profile.jpg`,
  description:
    "Full-Stack Developer and AI Automation Engineer based in Australia. Building custom websites, AI-powered web applications, n8n workflow automation, and cloud infrastructure for Australian businesses.",
  areaServed: [
    { "@type": "City", "name": "Sydney" },
    { "@type": "City", "name": "Melbourne" },
    { "@type": "City", "name": "Brisbane" },
    { "@type": "City", "name": "Perth" },
    { "@type": "State", "name": "New South Wales" },
    { "@type": "Country", "name": "Australia" },
  ],
  serviceType: [
    "Website Development",
    "Web Design",
    "E-Commerce Development",
    "Web Application Development",
    "React and Next.js Development",
    "n8n Workflow Automation",
    "AI Integration Development",
    "AI-Powered Web Applications",
    "API Development",
    "Cloud and DevOps Services",
  ],
  priceRange: "$$",
  // aggregateRating + Review nodes live on the homepage (app/page.tsx), the only page
  // that visibly renders the testimonials — keeps the rating off pages with no reviews.
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Development & AI Automation Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development Services Australia", url: `${BASE_URL}/services/web-development-australia` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Next.js & React Developer Australia", url: `${BASE_URL}/services/nextjs-react-developer-australia` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "n8n Workflow Automation Australia", url: `${BASE_URL}/services/n8n-automation-australia` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Integration Developer Australia", url: `${BASE_URL}/services/ai-integration-developer` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI-Powered Web Application Development", url: `${BASE_URL}/services/ai-powered-web-applications` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "E-Commerce Development Australia", url: `${BASE_URL}/services/ecommerce-development-australia` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "API Development & Integration Services", url: `${BASE_URL}/services/api-development-integrations` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cloud & DevOps Services Australia", url: `${BASE_URL}/services/cloud-devops-australia` } },
    ],
  },
}

// ── JSON-LD: WebSite with SearchAction ────────────────────────────────────
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: "Asif Hossain – Australian Website Developer",
  url: BASE_URL,
  description: "Portfolio and blog of Asif Hossain, professional website developer in Australia.",
  inLanguage: "en-AU",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/blog?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-AU" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-background text-text-primary antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics gaId="G-K8Q0FQS7QB" />
      </body>
    </html>
  )
}
