import test, { expect } from "@playwright/test"

test('Email should visible', async ({ page }) => {

    //Go to Codemo.dev
    await page.goto('https://codemo.dev/')

    //Click on About link
    await page.getByLabel('About').getByRole('link', { name: 'About' }).click()
    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('link', { name: 'codemo.dev@gmail.com' })).toBeVisible()
})
