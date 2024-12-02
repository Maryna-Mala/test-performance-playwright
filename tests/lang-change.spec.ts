import { test, expect } from '@playwright/test';

test.describe('Login with valid credentials for your free account', async () => {

    test('Change the website language to English', async ({ page }) => {
        await page.goto('https://idealistcoffee.com/');
        await page.locator("//li[contains(@class, 'view-en')]").click()
        await expect(page.locator("//div[@class='section-title-container']").first()).toHaveText('We create something unique for you')
    });
});