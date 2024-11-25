import { test, expect } from '@playwright/test';

test.describe('Idealist login', async () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://idealistcoffee.com/');
        await page.locator('[data-role="customer-icon"]').click();
        await page.locator('#email').fill('marinamalaa0@gmail.com');
    });

    test('Login with valid credentials for your free account', async ({ page }) => {
        await page.locator('[name="login[password]"]').fill('Testuser1234');
        await page.locator("//button[contains(@class, 'primary')]").click();

        const profileIcon = page.locator("//a[contains(@class, 'customer-action')]");
        await expect(profileIcon).toBeVisible();
    });

    test('Login with invalid credentials for your free account', async ({ page }) => {
        await page.locator('[name="login[password]"]').fill('Testuser12345');
        await page.locator("//button[contains(@class, 'primary')]").click();
        const errorMessage = await page.locator('[data-ui-id="message-error"]').textContent(); 

        await expect(errorMessage).toContain('Вхід в обліковий запис був неправильний');
    });
});