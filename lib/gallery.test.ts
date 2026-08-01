import { describe, expect, test } from "vitest"
import { titleCaseFromSlug, categorizeGalleryImages } from "./gallery"

describe("titleCaseFromSlug", () => {
  test("converts hyphenated words to Title Case", () => {
    expect(titleCaseFromSlug("admin-availability-manager")).toBe("Admin Availability Manager")
  })

  test("converts a two-word slug", () => {
    expect(titleCaseFromSlug("mobile-home-page")).toBe("Mobile Home Page")
  })

  test("splits a trailing number off a single word", () => {
    expect(titleCaseFromSlug("snapshot1")).toBe("Snapshot 1")
  })

  test("splits a multi-digit trailing number off a single word", () => {
    expect(titleCaseFromSlug("snapshot10")).toBe("Snapshot 10")
  })
})

describe("categorizeGalleryImages", () => {
  test("groups images by their prefix when 2+ categories each have 2+ images", () => {
    const images = [
      { name: "customer-booking-calendar", url: "a" },
      { name: "customer-booking-option", url: "b" },
      { name: "admin-availability-manager", url: "c" },
      { name: "admin-review-manager", url: "d" },
      { name: "mobile-home-page", url: "e" },
      { name: "mobile-product-page", url: "f" },
    ]

    const result = categorizeGalleryImages(images)

    expect(result).not.toBeNull()
    expect(result!.map((g) => g.category)).toEqual(["customer", "admin", "mobile"])
    expect(result![0].items).toHaveLength(2)
    expect(result![0].label).toBe("Customer")
  })

  test("returns null when images only have generic ungrouped names", () => {
    const images = [
      { name: "snapshot1", url: "a" },
      { name: "snapshot2", url: "b" },
      { name: "snapshot3", url: "c" },
    ]

    expect(categorizeGalleryImages(images)).toBeNull()
  })

  test("returns null when only one category has 2+ images", () => {
    const images = [
      { name: "admin-availability-manager", url: "a" },
      { name: "admin-review-manager", url: "b" },
      { name: "other-thing", url: "c" },
    ]

    expect(categorizeGalleryImages(images)).toBeNull()
  })

  test("returns null when categories exist but each has only 1 image", () => {
    const images = [
      { name: "customer-a", url: "a" },
      { name: "admin-a", url: "b" },
    ]

    expect(categorizeGalleryImages(images)).toBeNull()
  })
})
