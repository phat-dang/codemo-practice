import { test, expect } from "@playwright/test"

test.describe("Playground - General UI - Input", () => {

    test("input should accept standard typing", async ({ page }) => {
        await page.goto("/playground/general/input/")

        const input = page.getByPlaceholder("Type something...")
        await input.fill("Playwright")

        await expect(input).toHaveValue("Playwright")
        await expect(page.getByText("Current value: Playwright")).toBeVisible()
    })

    test("input should clear the field", async ({ page }) => {
        await page.goto("/playground/general/input/")

        const input = page.getByPlaceholder("Clear this field")
        await input.clear()

        await expect(input).toHaveValue("")
        await expect(page.getByTestId("playground-case-footer-clear-field")).toHaveText("Current value: (empty)")
    })

    test("input should stay disabled", async ({ page }) => {
        await page.goto("/playground/general/input/")

        const input = page.getByPlaceholder("This field is disabled")

        await expect(input).toBeDisabled()
        await expect(input).toHaveValue("Locked Value")
    })

    test("input should keep its read-only value", async ({ page }) => {
        await page.goto("/playground/general/input/")

        const input = page.getByPlaceholder("This field is read-only")

        await expect(input).toHaveAttribute("readonly", "")
        await expect(input).toHaveValue("Read-only Value")
    })

    test("input should respect the character limit", async ({ page }) => {
        await page.goto("/playground/general/input/")

        const input = page.getByPlaceholder("Max 10 characters")
        await input.fill("12345678901")

        await expect(input).toHaveValue("1234567890")
        await expect(page.getByTestId("playground-case-footer-character-limit")).toHaveText("10/10 characters")
    })

    test("input should accept numeric values", async ({ page }) => {
        await page.goto("/playground/general/input/")

        const input = page.getByPlaceholder("Enter numbers only")
        await input.fill("42")

        await expect(input).toHaveValue("42")
        await expect(page.getByTestId("playground-case-footer-numerical-only")).toContainText("Current value: 42")
    })

    test("input should update placeholder visibility", async ({ page }) => {
        await page.goto("/playground/general/input/")

        const input = page.getByPlaceholder("I am the placeholder")

        await expect(page.getByTestId("playground-case-footer-placeholder-text")).toHaveText("Placeholder visible: Yes")
        await input.fill("Hello")

        await expect(input).toHaveValue("Hello")
        await expect(page.getByTestId("playground-case-footer-placeholder-text")).toHaveText("Placeholder visible: No")
    })

    test("input should submit on Enter", async ({ page }) => {
        await page.goto("/playground/general/input/")

        const input = page.getByPlaceholder("Type and press Enter")
        await input.fill("Playwright")
        await input.press("Enter")

        await expect(page.getByTestId("playground-case-footer-enter-key-action")).toHaveText("Submitted values: 1")
    })

    test("input should show required validation", async ({ page }) => {
        await page.goto("/playground/general/input/")

        const input = page.getByPlaceholder("Enter something...")
        const validateButton = page.getByTestId("playground-case-button-required-validation-validate")

        await validateButton.click()
        await expect(page.getByTestId("playground-case-footer-required-validation")).toContainText("This field is required")

        await input.fill("Valid input")
        await validateButton.click()

        await expect(page.getByTestId("playground-case-footer-required-validation")).toContainText("Status: Valid")
    })

    test("input should use password masking", async ({ page }) => {
        await page.goto("/playground/general/input/")

        const input = page.getByPlaceholder("Enter password")

        await expect(input).toHaveAttribute("type", "password")
        await input.fill("secret")
        await expect(input).toHaveValue("secret")
    })

    test("input should detect leading and trailing spaces", async ({ page }) => {
        await page.goto("/playground/general/input/")

        const input = page.getByPlaceholder("Try spaces at start/end")
        await input.fill("  Playwright  ")

        await expect(input).toHaveValue("  Playwright  ")
        await expect(page.getByText("Trimmed value: Playwright")).toBeVisible()
        await expect(page.getByText("Has leading/trailing spaces")).toBeVisible()

        await page.getByTestId("playground-case-button-leading/trailing-spaces-validate").click()
        await expect(page.getByRole("button", { name: "1/11 Done" })).toBeVisible()
    })

    test("input assertions", async ({ page }) => {
        await page.goto("/playground/general/input/")

        const input = page.getByPlaceholder("Type something...")

        await expect(input).toBeVisible()
        await expect(input).toBeEnabled()
        await expect(input).toHaveAttribute("placeholder", "Type something...")
        await expect(page.getByPlaceholder("This field is disabled")).toBeDisabled()
        await expect(page.getByPlaceholder("Enter password")).toHaveAttribute("type", "password")
    })

})
