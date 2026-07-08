import { test, expect } from "@playwright/test"

test.describe("Playground - General UI - Button", () => {

    test("button should register a single click", async ({ page }) => {
        await page.goto("/playground/general/button/")

        await page.getByTestId("playground-case-button-single-click-reset").click()
        await page.getByRole("button", { name: "Single Click" }).click()

        await expect(page.getByTestId("playground-case-footer-single-click")).toHaveText("Single Clicks: 1")
    })

    test("button should register a double click", async ({ page }) => {
        await page.goto("/playground/general/button/")

        await page.getByTestId("playground-case-button-double-click-reset").click()
        await page.getByRole("button", { name: "Double Click" }).dblclick()

        await expect(page.getByTestId("playground-case-footer-double-click")).toHaveText("Double Clicks: 1")
    })

    test("button should register a right click", async ({ page }) => {
        await page.goto("/playground/general/button/")

        await page.getByTestId("playground-case-button-right-click-reset").click()
        await page.getByRole("button", { name: "Right Click" }).click({ button: "right" })

        await expect(page.getByTestId("playground-case-footer-right-click")).toHaveText("Right Clicks: 1")
    })

    test("button should register a middle click", async ({ page }) => {
        await page.goto("/playground/general/button/")

        await page.getByTestId("playground-case-button-middle-click-reset").click()
        await page.getByRole("button", { name: "Middle Click" }).click({ button: "middle" })

        await expect(page.getByTestId("playground-case-footer-middle-click")).toHaveText("Middle Clicks: 1")
    })

    test("button should register a long press", async ({ page }) => {
        await page.goto("/playground/general/button/")

        await page.getByRole("button", { name: "Long Press" }).click({ delay: 2500 })

        await expect(page.getByTestId("playground-case-footer-long-press")).toHaveText("Long Presses: 1")
    })

    test("button should be clickable when enabled", async ({ page }) => {
        await page.goto("/playground/general/button/")

        await expect(page.getByRole("button", { name: "Disabled" })).toBeDisabled()
        await page.getByTestId("playground-case-button-enabled-reset").click()
        await expect(page.getByRole("button", { name: "Enabled" })).toBeVisible({ timeout: 6000 })
        await page.getByRole("button", { name: "Enabled" }).click()

        await expect(page.getByTestId("playground-case-footer-enabled")).toHaveText("Enabled Clicks: 1")
    })

    test("button assertions", async ({ page }) => {
        await page.goto("/playground/general/button/")

        const button = page.getByRole("button", { name: "Single Click" })

        await expect(button).toBeVisible()
        await expect(button).toBeEnabled()
        await expect(button).toContainText("Click")
        await expect(button).toHaveAttribute("type", "button")
    })
})
