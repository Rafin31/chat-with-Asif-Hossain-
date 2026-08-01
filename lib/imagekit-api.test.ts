import { describe, expect, test } from "vitest"
import { stripExtension } from "./imagekit-api"

describe("stripExtension", () => {
  test("removes a file extension", () => {
    expect(stripExtension("admin-availability-manager.png")).toBe("admin-availability-manager")
  })

  test("leaves a name with no extension untouched", () => {
    expect(stripExtension("snapshot1")).toBe("snapshot1")
  })
})
