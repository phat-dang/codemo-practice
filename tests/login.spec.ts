import test, { expect } from "@playwright/test"

test('Should login successfully with valid credentials', async ({ page }) => {

    // Go to Codemo.dev - Practice E-commerce site
    await page.goto('https://codemo.dev/practice/shop/products')

    // Find Username input field and fill it with 'admin'
    await page.getByLabel('Username').fill('admin')

    // Find Password input field and fill it with 'wowTesting123!'
    await page.getByLabel('Password').fill('wowTesting123!')

    // Expects the Login button to be enabled
    await expect(page.getByRole('button', { name: 'Login' })).toBeEnabled()

    // Click on the Login button
    await page.getByRole('button', { name: 'Login' }).click()

    // Expects the Admin button to be visible
    await expect(page.getByRole('button', { name: 'Admin' })).toBeVisible()
})
