import { test, expect } from "@playwright/test"

test.describe("Playground - General UI - Select Dropdown", () => {
    test("dropdown should register a standard selection", async ({ page }) => {
        await page.goto("https://codemo.dev/playground/general/select-dropdown/")

        await page.getByRole("combobox", { name: "Choose an option" }).click()
        await page.getByRole("option", { name: "Banana" }).click()

        await expect(page.getByRole("option", { name: "Banana", selected: true })).toBeVisible()
        await expect(page.getByText("Selected: Banana")).toBeVisible()
    })

    test("dropdown should support multiple selections", async ({ page }) => {
        await page.goto("https://codemo.dev/playground/general/select-dropdown/")

        await page.getByRole("combobox", { name: "Choose options" }).click()
        await page.getByRole("option", { name: "Red" }).click()
        await page.getByRole("option", { name: "Blue" }).click()

        await expect(page.getByRole("option", { name: "Red", selected: true })).toBeVisible()
        await expect(page.getByRole("option", { name: "Blue", selected: true })).toBeVisible()
        await expect(page.getByText("Selected: Red, Blue")).toBeVisible()
    })

    test("dropdown should keep its default selection", async ({ page }) => {
        await page.goto("https://codemo.dev/playground/general/select-dropdown/")

        await page.getByRole("combobox", { name: "Default select" }).click()

        await expect(page.getByRole("option", { name: "Option 1 (Default)", selected: true })).toBeVisible()
        await expect(page.getByRole("option", { name: "Option 2", selected: false })).toBeVisible()
        await expect(page.getByRole("option", { name: "Option 3", selected: false })).toBeVisible()
        await expect(page.getByText("Default value: Option 1 (Default)")).toBeVisible()
    })

    test("dropdown should handle a long list", async ({ page }) => {
        await page.goto("https://codemo.dev/playground/general/select-dropdown/")

        await page.getByRole("combobox", { name: "Choose from many" }).click()
        await page.getByRole("option", { name: "Item 50" }).click()

        await expect(page.getByRole("combobox", { name: "Choose from many" })).toHaveText("Item 50")
        await expect(page.getByText("Selected: Item 50")).toBeVisible()

    })

    test("dropdown should filter searchable options", async ({ page }) => {
        await page.goto("https://codemo.dev/playground/general/select-dropdown/")

        await page.getByRole("button", { name: "Type to search" }).click()
        await page.getByPlaceholder("Search").fill("java")
        await page.getByRole("option", { name: "Java", exact: true }).click()

        await expect(page.getByRole("button", { name: "Java" })).toBeVisible()
        await expect(page.getByText("Selected: Java")).toBeVisible()
    })

    test("dropdown should clear the selected value", async ({ page }) => {
        await page.goto("https://codemo.dev/playground/general/select-dropdown/")

        await page.getByRole("button", { name: "Option A" }).locator(".clear-icon").click()

        await expect(page.getByRole("button", { name: "Choose and clear" })).toBeVisible()
        await expect(page.getByText("Selected: (cleared)")).toBeVisible()
    })
})
