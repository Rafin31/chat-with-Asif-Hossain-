import { describe, expect, test, vi } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import ProjectGallery from "./ProjectGallery"

vi.mock("next/image", () => ({
  default: (props: Record<string, unknown>) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img alt={props.alt as string} src={props.src as string} />
  },
}))

const categorizedImages = [
  { name: "customer-booking-calendar", url: "https://cdn.test/customer-booking-calendar" },
  { name: "customer-booking-option", url: "https://cdn.test/customer-booking-option" },
  { name: "admin-availability-manager", url: "https://cdn.test/admin-availability-manager" },
  { name: "admin-review-manager", url: "https://cdn.test/admin-review-manager" },
  { name: "mobile-home-page", url: "https://cdn.test/mobile-home-page" },
  { name: "mobile-product-page", url: "https://cdn.test/mobile-product-page" },
]

const ungroupedImages = [
  { name: "snapshot1", url: "https://cdn.test/snapshot1" },
  { name: "snapshot2", url: "https://cdn.test/snapshot2" },
  { name: "snapshot3", url: "https://cdn.test/snapshot3" },
]

describe("ProjectGallery", () => {
  test("renders a tab per category and shows the first category's images by default", () => {
    render(<ProjectGallery images={categorizedImages} alt="TourHill" />)

    expect(screen.getByRole("tab", { name: "Customer" })).toBeInTheDocument()
    expect(screen.getByRole("tab", { name: "Admin" })).toBeInTheDocument()
    expect(screen.getByRole("tab", { name: "Mobile" })).toBeInTheDocument()

    expect(screen.getByAltText("Booking Calendar")).toBeInTheDocument()
    expect(screen.queryByAltText("Availability Manager")).not.toBeInTheDocument()
  })

  test("switching tabs swaps which category's images are shown", () => {
    render(<ProjectGallery images={categorizedImages} alt="TourHill" />)

    fireEvent.click(screen.getByRole("tab", { name: "Admin" }))

    expect(screen.getByAltText("Availability Manager")).toBeInTheDocument()
    expect(screen.queryByAltText("Booking Calendar")).not.toBeInTheDocument()
  })

  test("renders no tabs and shows a flat filmstrip when images can't be categorized", () => {
    render(<ProjectGallery images={ungroupedImages} alt="Auto Parts" />)

    expect(screen.queryByRole("tab")).not.toBeInTheDocument()
    expect(screen.getByAltText("Auto Parts — screenshot 1")).toBeInTheDocument()
    expect(screen.getByAltText("Auto Parts — screenshot 2")).toBeInTheDocument()
    expect(screen.getByAltText("Auto Parts — screenshot 3")).toBeInTheDocument()
  })

  test("renders nothing when there are no images", () => {
    const { container } = render(<ProjectGallery images={[]} alt="Empty" />)
    expect(container).toBeEmptyDOMElement()
  })

  test("each tile fills its aspect-ratio wrapper instead of collapsing to zero size", () => {
    render(<ProjectGallery images={ungroupedImages} alt="Auto Parts" />)

    const tile = screen.getByRole("button", { name: "Auto Parts — screenshot 1" })
    expect(tile.className).toMatch(/\babsolute\b/)
    expect(tile.className).toMatch(/\binset-0\b/)
  })
})
