import { test, expect } from "@playwright/test"

test.describe("Playground - General UI - Checkboxes", () => {
    test("checkboxes should support multiple selections", async ({ page }) => {
        await page.goto("https://codemo.dev/playground/general/checkboxes/")

        const caseCard = page.getByTestId("playground-case-standard-checks")

        await caseCard.getByLabel("Option 1").check()
        await caseCard.getByLabel("Option 2").check()
        await caseCard.getByLabel("Option 3").check()

        await caseCard.getByLabel("Option 2").uncheck()

        await expect(caseCard).toContainText("Selected: 2")
    })

    test("checkboxes should keep the default option checked", async ({ page }) => {
        await page.goto("https://codemo.dev/playground/general/checkboxes/")

        const caseCard = page.getByTestId("playground-case-default-check")

        await expect(caseCard.getByLabel("Option 1 (Default)")).toBeChecked()
        await expect(caseCard).toContainText("Option 1 checked: Yes")
        await expect(caseCard.getByLabel("Option 2")).not.toBeChecked()
        await expect(caseCard.getByLabel("Option 3")).not.toBeChecked()
    })

    test("disabled checkboxes should stay unchanged", async ({ page }) => {
        await page.goto("https://codemo.dev/playground/general/checkboxes/")

        const caseCard = page.getByTestId("playground-case-disabled-state")

        await expect(caseCard.getByLabel("Option 2 (Checked, Disabled)")).toBeDisabled()
        await expect(caseCard.getByLabel("Option 2 (Checked, Disabled)")).toBeChecked()
        await expect(caseCard).toContainText("Option 2 state: Checked")
    })

    test("checkboxes should store internal values", async ({ page }) => {
        await page.goto("https://codemo.dev/playground/general/checkboxes/")

        const caseCard = page.getByTestId("playground-case-value-check")

        await caseCard.getByLabel("Banana").check()
        await caseCard.getByLabel("Cherry").check()

        await expect(page.getByTestId("playground-case-footer-value-check")).toHaveText("Selected: banana, cherry")
    })
})