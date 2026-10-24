import { test, expect } from "@playwright/test"

test.describe("Playground - General UI - Radio Buttons", () => {

    test("radio button should register a standard selection", async ({ page }) => {
        await page.goto("https://codemo.dev/playground/general/radio-buttons/")

        await page.getByRole('radio', { name: 'Beta' }).check()

        await expect(page.getByRole('radio', { name: 'Beta' })).toBeChecked()
    })

    test("radio group should keep the default option selected", async ({ page }) => {
        await page.goto("https://codemo.dev/playground/general/radio-buttons/")

        await expect(page.getByRole('radio', { name: 'Default' })).toBeChecked()
        await expect(page.getByRole('radio', { name: 'Option 2' })).not.toBeChecked()
        await expect(page.getByRole('radio', { name: 'Option 3' })).not.toBeChecked()
    })

    test("disabled radio buttons should stay unchanged", async ({ page }) => {
        await page.goto("https://codemo.dev/playground/general/radio-buttons/")

        await expect(page.getByRole('radio', { name: 'Closed' })).toBeDisabled()
        await expect(page.getByRole('radio', { name: 'Open' })).toBeDisabled()
        await expect(page.getByRole('radio', { name: 'Closed' })).not.toBeChecked()
        await expect(page.getByRole('radio', { name: 'Open' })).toBeChecked()
    })

    test("radio group should store the internal value", async ({ page }) => {
        await page.goto("https://codemo.dev/playground/general/radio-buttons/")

        await page.getByRole('radio', { name: 'Cherry' }).check()

        await expect(page.getByRole('radio', { name: 'Cherry' })).toHaveId(/cherry/i)
        await expect(page.getByText('Selected value: cherry')).toBeVisible()
    })
})
