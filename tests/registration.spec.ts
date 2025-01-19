import test, { expect } from "@playwright/test"

test('Should register successfully with valid information', async ({ page }) => {

    // Go to Codemo.dev - Practice E-commerce site
    await page.goto('https://codemo.dev/practice/shop/products')

    // Click Create an account link
    await page.getByRole('link', { name: 'Create an account' }).click()

    // Input necessary information
    await page.getByLabel('Username').fill('user_001')
    await page.getByLabel('Email').fill('user_001@example.com')
    await page.getByLabel('Password').fill('ThisisPassword1')
    await page.getByText('Automation').click()

    //Verify Register button is enabled then click
    await expect(page.getByLabel('Register')).toBeEnabled()
    await page.getByLabel('Register').click()

    //Verify Register successful message is visible
    await expect(page.getByText('Register successful')).toBeVisible()
})
