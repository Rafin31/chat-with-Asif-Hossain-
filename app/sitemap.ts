import { MetadataRoute } from "next"
import { getAllPosts } from "@/lib/blog"
import { projects } from "@/data/portfolio"
import { services } from "@/data/services"

const BASE_URL = "https://rafinh.dev"

// Bump this date whenever the homepage content meaningfully changes.
// Using a fixed date (not new Date()) so the sitemap doesn't claim a fresh
// homepage on every deploy Google distrusts sitemaps that always say "today".
const HOMEPAGE_UPDATED = new Date("2026-06-13")

// Customer-intent posts get higher priority (they drive conversions)
const HIGH_PRIORITY_SLUGS = new Set([
  "website-cost-australia-2026",
  "do-i-need-a-website-for-my-small-business",
  "fullstack-developer-wollongong-nsw",
  "typescript-vs-javascript-2026",
  "n8n-linkedin-automation-openrouter-google-sheets"
])

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    // Prefer the explicit "updated" frontmatter date when a post has been revised
    lastModified: new Date(post.updated ?? post.date),
    changeFrequency: "monthly" as const,
    priority: HIGH_PRIORITY_SLUGS.has(post.slug) ? 0.9 : 0.7,
  }))

  const projectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${BASE_URL}/projects/${project.slug}`,
    lastModified: new Date("2025-11-01"),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  const serviceEntries: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    lastModified: new Date(s.lastUpdated),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }))

  // The services listing page is as fresh as its most recently updated service
  const latestServiceUpdate = services
    .map((s) => new Date(s.lastUpdated).getTime())
    .reduce((latest, time) => Math.max(latest, time), 0)

  // The blog listing page is as fresh as the newest post (posts are sorted newest first)
  const latestPostDate = posts.length > 0 ? new Date(posts[0].date) : HOMEPAGE_UPDATED

  return [
    {
      url: BASE_URL,
      lastModified: HOMEPAGE_UPDATED,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(latestServiceUpdate),
      changeFrequency: "monthly" as const,
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/hire-me`,
      lastModified: new Date("2025-11-01"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: latestPostDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    ...serviceEntries,
    ...blogEntries,
    ...projectEntries,
  ]
}
