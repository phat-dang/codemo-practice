import { test, expect } from "@playwright/test"

// !NOTE DO NOT DELETE THIS FILE! It is used to test the Playwright snippets kit extension.

test.describe("Playwright snippets kit - sample tests", () => {

    test.beforeEach(async () => {
        console.log("Starting a new Playwright test")
    })

    test("test case 1 - login flow", async () => {
        console.log("Test case: login flow")
    })

    test("test case 2 - registration flow", async () => {
        console.log("Test case: registration flow")
    })

    test("test case 3 - forgot password flow", async () => {
        console.log("Test case: forgot password flow")
    })

    test.fail("test case 4 - expected to fail", async () => {
        console.log("This test is marked to fail")
        expect(1).toBe(2)
    })

    test.fail.only("test case 5 - only fail example", async () => {
        console.log("This test is the only fail-marked test")
        expect(1).toBe(2)
    })

    test.fixme("test case 6 - fixme example", async () => {
        console.log("This test is marked as fixme")
    })

    test.skip("test case 7 - skipped example", async () => {
        console.log("This test is skipped")
    })

    test("test case 8 - slow example", async () => {
        test.slow()
        console.log("This test is marked as slow")
    })

    test("test case 9 - timeout example", async ({ page }) => {
        test.setTimeout(1000)
        console.log("This test uses a custom timeout")
    })
})
