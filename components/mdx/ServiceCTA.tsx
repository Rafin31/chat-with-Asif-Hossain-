import Link from "next/link"
import { getService } from "@/data/services"
import { HiArrowRight } from "react-icons/hi"

// Inline service promo card for use inside MDX blog posts:
//   <ServiceCTA slug="web-development-australia" />
// Renders nothing if the slug doesn't match a service, so a typo can't break a build.
export default function ServiceCTA({ slug }: { slug: string }) {
  const service = getService(slug)
  if (!service) return null

  return (
    <Link
      href={`/services/${service.slug}`}
      className="not-prose group flex items-center gap-4 bg-card border border-border rounded-2xl p-5 my-8 hover:border-accent-cyan/40 transition-colors duration-300 no-underline"
    >
      <span className="text-3xl flex-shrink-0">{service.icon}</span>
      <div className="min-w-0">
        <span className="block text-accent-cyan font-mono text-xs tracking-widest uppercase mb-1">
          Related service
        </span>
        <span className="block font-heading font-semibold text-text-primary text-base group-hover:text-accent-cyan transition-colors duration-300">
          {service.title}
        </span>
        <span className="block text-text-muted text-sm leading-relaxed mt-1">
          {service.tagline}
        </span>
      </div>
      <HiArrowRight className="w-5 h-5 text-text-muted group-hover:text-accent-cyan flex-shrink-0 ml-auto transition-colors duration-300" />
    </Link>
  )
}
