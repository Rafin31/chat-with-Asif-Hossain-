import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { projects } from "@/data/portfolio"
import { getProjectDetail } from "@/data/projectDetails"
import { listFolderImages } from "@/lib/imagekit-api"
import ProjectDetailClient from "@/components/ProjectDetailClient"

export const revalidate = 300 // ISR: refresh image list every 5 minutes

const BASE_URL = "https://asifhossain.dev"

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return {}
  const detail = getProjectDetail(params.slug)
  return {
    title: project.title,
    description: detail?.overview.slice(0, 155) ?? project.longDescription.slice(0, 155),
    alternates: { canonical: `${BASE_URL}/projects/${params.slug}` },
    openGraph: {
      type: "website",
      url: `${BASE_URL}/projects/${params.slug}`,
      title: `${project.title} | Asif Hossain`,
      description: project.longDescription,
      // Fall back to the auto-generated /opengraph-image when a project has no cover
      ...(detail?.coverImage
        ? { images: [{ url: detail.coverImage, width: 1400, alt: detail.imageAlt }] }
        : {}),
    },
  }
}

export default async function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) notFound()

  const detail = getProjectDetail(params.slug)
  const galleryImages = project.imagekitFolder
    ? await listFolderImages(project.imagekitFolder)
    : []

  const idx = projects.findIndex((p) => p.slug === params.slug)
  const prevProject = idx > 0 ? projects[idx - 1] : null
  const nextProject = idx < projects.length - 1 ? projects[idx + 1] : null

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: detail?.overview ?? project.longDescription,
    applicationCategory: "WebApplication",
    programmingLanguage: project.tech,
    author: { "@type": "Person", name: "Asif Hossain", url: BASE_URL },
    url: project.demo !== "#" ? project.demo : undefined,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <Navbar />
      <ProjectDetailClient
        project={project}
        detail={detail}
        galleryImages={galleryImages}
        prevProject={prevProject}
        nextProject={nextProject}
      />
      <Footer />
    </>
  )
}
