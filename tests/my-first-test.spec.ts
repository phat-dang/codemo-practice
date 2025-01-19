import test, { expect } from "@playwright/test"
import chance from 'chance'


/**
 * TODO: Add more test steps
 * ? How to fix 
 * * Just info message
 * ! IMPORTANT: Need to check the link before click
 * ! DON'T PUSH TO PRODUCTION 
 */
test('Email should be visible', async ({ page }) => {

    // Go to Codemo.dev
    await page.goto('https://codemo.dev/')

    // Click on the About link
    await page.getByLabel('About').getByRole('link', { name: 'About' }).click()

    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('link', { name: 'codemo.dev@gmail.com' })).toBeVisible()
})