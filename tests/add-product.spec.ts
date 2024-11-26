import { test, expect } from '@playwright/test';

test.describe('Login with valid credentials for your free account', async () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://idealistcoffee.com/');
        await page.locator('[data-role="customer-icon"]').click();
        await page.locator('#email').fill('marinamalaa0@gmail.com');
        await page.locator('[name="login[password]"]').fill('Testuser1234');
        await page.locator("//button[contains(@class, 'primary')]").click();
    });

    test('Add Brazil Espresso 250 grams to the cart', async ({ page }) => {
        //click on header on the home page
        await page.locator("//li[contains(@class, 'nav-1')]").click()
        //the first item on the page is visible
        await expect(page.locator("//li[contains(@class, 'product-item')]").first()).toContainText('Coffee Tonic')
        //adding it to the cart
        await page.locator('//form[contains(@data-role, "tocart-form")]').first().click()
        //check the cart visibility
        await expect(page.locator('#minicart-content-wrapper')).toBeVisible()
    });

});