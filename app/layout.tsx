import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import CustomCursor from "@/components/CustomCursor"
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
    default: "Website Developer Wollongong | Asif Hossain | Web Developer NSW Australia",
    template: "%s | Asif Hossain – Website Developer Wollongong",
  },
  description:
    "Professional website developer in Wollongong, NSW. Asif Hossain builds websites and web apps for Australian businesses. React, Next.js, Node.js expert. 50+ projects delivered, 100% client satisfaction.",
  keywords: [
    // Customer-facing (what people actually search)
    "website developer wollongong",
    "web developer wollongong",
    "website developer australia",
    "web developer australia",
    "website design wollongong",
    "website developer nsw",
    "hire website developer wollongong",
    "small business website developer australia",
    "website developer near me wollongong",
    "affordable website developer wollongong",
    "professional web developer wollongong nsw",
    "business website developer australia",
    "website builder wollongong",
    "web design wollongong",
    "website developer illawarra",
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
    "React developer Wollongong",
    "Next.js Developer Australia",
    "Node.js Developer",
    "Freelance Web Developer Australia",
    "TypeScript Developer",
    "Web Developer Wollongong",
  ],
  authors: [{ name: "Asif Hossain", url: BASE_URL }],
  creator: "Asif Hossain",
  publisher: "Asif Hossain",
  category: "technology",

  // ── Canonical URL ─────────────────────────────────────────
  alternates: {
    canonical: BASE_URL,
  },

  // ── Open Graph ────────────────────────────────────────────
  openGraph: {
    type: "website",
    url: BASE_URL,
    title: "Website Developer Wollongong | Asif Hossain | Web Developer NSW",
    description:
      "Professional website developer in Wollongong, NSW. Building websites and web apps for Australian businesses. 50+ projects, 5-star rated.",
    siteName: "Asif Hossain – Website Developer Wollongong",
    images: [
      {
        url: "/profile.jpg",
        width: 400,
        height: 400,
        alt: "Asif Hossain, Website Developer Wollongong NSW",
      },
    ],
    locale: "en_AU",
  },

  // ── Twitter / X ───────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Website Developer Wollongong | Asif Hossain",
    description:
      "Professional website developer based in Wollongong, NSW. Websites and web apps for Australian businesses.",
    images: ["/profile.jpg"],
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

  // ── Icons ─────────────────────────────────────────────────
  icons: {
    icon: "/profile.jpg",
    apple: "/profile.jpg",
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
    "Full-Stack Developer and AI Automation Engineer based in Wollongong, NSW, Australia. Building custom websites, AI-powered web applications, and n8n workflow automation for Australian businesses.",
  email: "contact@asifhossain.dev",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Wollongong",
    addressRegion: "NSW",
    postalCode: "2500",
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

// ── JSON-LD: LocalBusiness (critical for "website developer wollongong") ──
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${BASE_URL}/#business`,
  name: "Asif Hossain – Web Developer & AI Automation Engineer Wollongong",
  url: BASE_URL,
  image: `${BASE_URL}/profile.jpg`,
  description:
    "Full-Stack Developer and AI Automation Engineer based in Wollongong, NSW. Building custom websites, AI-powered web applications, n8n workflow automation, and cloud infrastructure for Australian businesses.",
  telephone: "",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Wollongong",
    addressLocality: "Wollongong",
    addressRegion: "NSW",
    postalCode: "2500",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -34.4278,
    longitude: 150.8931,
  },
  areaServed: [
    { "@type": "City", "name": "Wollongong" },
    { "@type": "City", "name": "Sydney" },
    { "@type": "City", "name": "Melbourne" },
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
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "50",
    bestRating: "5",
    worstRating: "1",
  },
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
  name: "Asif Hossain – Website Developer Wollongong",
  url: BASE_URL,
  description: "Portfolio and blog of Asif Hossain, professional website developer in Wollongong, NSW.",
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
    <html lang="en" className="scroll-smooth">
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
        <CustomCursor />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
