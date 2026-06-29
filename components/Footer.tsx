import Link from "next/link"
import { navLinks, personalInfo } from "@/data/portfolio"
import { services } from "@/data/services"
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi"
import BackToTopButton from "@/components/BackToTopButton"

// Key blog posts surfaced sitewide for internal linking (matches HIGH_PRIORITY_SLUGS in app/sitemap.ts)
const featuredPosts = [
  { slug: "website-cost-australia-2026", label: "Website Cost in Australia" },
  { slug: "do-i-need-a-website-for-my-small-business", label: "Does My Business Need a Website?" },
  { slug: "fullstack-developer-wollongong-nsw", label: "Full-Stack Developer in Australia" },
  { slug: "typescript-vs-javascript-2026", label: "TypeScript vs JavaScript" },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-surface border-t border-border relative overflow-hidden">
      {/* Subtle gradient top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-yellow/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 items-start">
          {/* Brand, tagline & social */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-left">
              <span className="font-heading font-bold text-2xl">
                <span className="text-accent-yellow">Asif </span>
                <span className="text-accent-cyan">Hossain</span>
              </span>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              Full-Stack Developer and AI Automation Engineer specialising in React.js, Next.js, Node.js, and n8n.
              Building scalable web apps and intelligent automation systems that ship.
            </p>
            {/* Social icons */}
            <div className="flex gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-text-muted hover:text-accent-yellow hover:border-accent-yellow/40 transition-all duration-200"
                aria-label="GitHub"
              >
                <FiGithub className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-text-muted hover:text-accent-cyan hover:border-accent-cyan/40 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-text-muted hover:text-accent-yellow hover:border-accent-yellow/40 transition-all duration-200"
                aria-label="Email"
              >
                <FiMail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading font-semibold text-text-primary text-sm mb-4 tracking-wide">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={`/${link.href}`}
                  className="text-text-muted text-sm hover:text-accent-yellow transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-text-primary text-sm mb-4 tracking-wide">
              Services
            </h4>
            <nav className="flex flex-col gap-2">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="text-text-muted text-sm hover:text-accent-cyan transition-colors duration-200"
                >
                  {service.shortTitle}
                </Link>
              ))}
              <Link
                href="/services"
                className="text-accent-cyan text-sm hover:text-accent-yellow transition-colors duration-200"
              >
                All Services →
              </Link>
            </nav>
          </div>

          {/* Resources & contact */}
          <div>
            <h4 className="font-heading font-semibold text-text-primary text-sm mb-4 tracking-wide">
              Resources
            </h4>
            <nav className="flex flex-col gap-2">
              {featuredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="text-text-muted text-sm hover:text-accent-yellow transition-colors duration-200"
                >
                  {post.label}
                </Link>
              ))}
              <Link
                href="/blog"
                className="text-text-muted text-sm hover:text-accent-yellow transition-colors duration-200"
              >
                Blog
              </Link>
              <Link
                href="/hire-me"
                className="text-text-muted text-sm hover:text-accent-yellow transition-colors duration-200"
              >
                Hire Me
              </Link>
            </nav>
            {/* Contact */}
            <div className="flex flex-col gap-2 mt-5">
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-text-muted text-sm hover:text-accent-yellow transition-colors duration-200"
              >
                {personalInfo.email}
              </a>
              <span className="text-text-muted text-sm">{personalInfo.location}</span>
            </div>
            {/* Availability */}
            <div className="relative overflow-hidden mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <div className="pointer-events-none absolute inset-0 -skew-x-12">
                <div className="animate-shimmer-sweep absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-emerald-400/15 to-transparent" />
              </div>
              <span className="text-emerald-400 font-mono text-[10px] relative z-10">◆</span>
              <span className="text-emerald-400 text-xs font-medium relative z-10">Open to opportunities</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm text-center sm:text-left">
            © {year} Asif Hossain. All rights reserved.
          </p>
          <BackToTopButton />
        </div>
      </div>
    </footer>
  )
}
