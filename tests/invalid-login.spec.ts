import { test, expect } from "@playwright/test";

test("Login with invalid credentials for your free account", async ({ page }) => {
    await page.goto("/customer/account/login");
    await page.locator("#email").fill(process.env.LOGIN_EMAIL);
    await page.locator('[name="login[password]"]').fill(process.env.INVALID_PASSWORD);
    await page.locator("//button[contains(@class, 'primary')]").click();
    const errorMessage = await page.locator('[data-ui-id="message-error"]').textContent();

    expect(errorMessage).toContain("Вхід в обліковий запис був неправильний");
});

