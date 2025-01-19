import test, { expect } from "@playwright/test"

test('Should login successfully with valid credentials', async ({ page }) => {

    // Go to Codemo.dev - Practice E-commerce site
    await page.goto('https://codemo.dev/practice/shop/products')
    await page.getByRole('link', { name: 'Forgot Password ?' }).click()
    await page.getByLabel('Email address').fill('admin@email.com')
    await expect(page.getByLabel('Forgot Password')).toBeEnabled()
    await page.getByLabel('Forgot Password').click()
    await expect(page.getByText('Forgot password admin@email.com successful')).toBeVisible()

})