import { test, expect } from '@playwright/test';

test.describe('Login with valid credentials for your free account', async () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://idealistcoffee.com/');
        await page.locator('[data-role="customer-icon"]').click();
        await page.locator('#email').fill('marinamalaa0@gmail.com');
        await page.locator('[name="login[password]"]').fill('Testuser1234');
        await page.locator("//button[contains(@class, 'primary')]").click();
    });

    test('Search products using the search feature', async ({ page }) => {
        await page.locator("//*[contains(@class, 'search-toggle')]/div[@class='icon-block']").click()
        await page.locator("#search.input-text").fill('coffee')
        await page.locator("//button[contains(@class, 'search')]").click()
        await expect(page.locator("//span[contains(text(), 'coffee')]").nth(0)).toBeVisible()
    });

});