const IK_FOLDER_ROOT = "Portfolio Projects Images"
const IK_PRIVATE_KEY = process.env.IMAGEKIT_PRIVATE_KEY ?? ""

interface IKFile {
  url: string
  name: string
  fileType: string
  width?: number
  height?: number
}

export interface GalleryImage {
  name: string
  url: string
  width?: number
  height?: number
}

/**
 * Server-only: lists all image files in a given ImageKit subfolder.
 * Results are cached and revalidated every hour (ISR).
 * Upload any image with any filename → it appears within 60 min.
 */
export async function listFolderImages(folder: string): Promise<GalleryImage[]> {
  if (!IK_PRIVATE_KEY) {
    console.warn("[imagekit-api] IMAGEKIT_PRIVATE_KEY not set  skipping image fetch")
    return []
  }

  const path = `/${IK_FOLDER_ROOT}/${folder}`
  const auth = Buffer.from(`${IK_PRIVATE_KEY}:`).toString("base64")

  try {
    const res = await fetch(
      `https://api.imagekit.io/v1/files?${new URLSearchParams({ path, fileType: "image", limit: "100" })}`,
      {
        headers: { Authorization: `Basic ${auth}` },
        next: { revalidate: 3600 },
      }
    )

    if (!res.ok) {
      console.error(`[imagekit-api] API error ${res.status} for folder "${folder}"`)
      return []
    }

    const files: IKFile[] = await res.json()

    // Sort numerically by filename so snapshot1 < snapshot2 < ... < snapshot10
    files.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }))

    return files.map(f => ({ name: stripExtension(f.name), url: f.url, width: f.width, height: f.height }))
  } catch (err) {
    console.error("[imagekit-api] fetch failed:", err)
    return []
  }
}

export function stripExtension(filename: string): string {
  return filename.replace(/\.[a-zA-Z0-9]+$/, "")
}

