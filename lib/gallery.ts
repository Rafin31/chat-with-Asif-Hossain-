// Derives a human caption from an ImageKit filename.
// "admin-availability-manager" -> "Admin Availability Manager"
// "snapshot1" -> "Snapshot 1"
export function titleCaseFromSlug(name: string): string {
  const withSplitTrailingNumber = name.replace(/^([a-zA-Z]+)(\d+)$/, "$1-$2")
  return withSplitTrailingNumber
    .split(/[-_]/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

export interface NamedImage {
  name: string
  url: string
}

export interface GalleryCategory<T extends NamedImage> {
  category: string
  label: string
  items: T[]
}

// Groups images by the slug before their first hyphen (e.g. "customer-booking-page" -> "customer").
// Only returns a grouping when it's actually useful: 2+ distinct categories, each with 2+ images.
// Otherwise returns null so callers can fall back to an ungrouped gallery.
export function categorizeGalleryImages<T extends NamedImage>(images: T[]): GalleryCategory<T>[] | null {
  const order: string[] = []
  const groups = new Map<string, T[]>()

  for (const image of images) {
    const [prefix] = image.name.split("-")
    if (!groups.has(prefix)) {
      groups.set(prefix, [])
      order.push(prefix)
    }
    groups.get(prefix)!.push(image)
  }

  const qualifying = order.filter((prefix) => groups.get(prefix)!.length >= 2)
  if (qualifying.length < 2) return null

  return qualifying.map((category) => ({
    category,
    label: titleCaseFromSlug(category),
    items: groups.get(category)!,
  }))
}
