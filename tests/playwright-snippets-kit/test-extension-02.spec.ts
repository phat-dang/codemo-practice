import { test, expect } from "@playwright/test"

// !NOTE DO NOT DELETE THIS FILE! It is used to test the Playwright snippets kit extension.

test.describe("Playwright snippets kit - simple sample tests", () => {
    test.beforeEach(async () => {
        console.log("Starting a new Playwright test")
    })

    test("test case 1 - login flow", async () => {
        console.log("Test case: login flow")
    })

    test("test case 2 - registration flow", async () => {
        console.log("Test case: registration flow")
    })

    test.fixme("test case 3 - forgot password flow - fixme", async () => {
        console.log("Test case: forgot password flow")
    })

    test.skip("test case 4 - skipped example", async () => {
        console.log("This test is skipped")
    })
})
