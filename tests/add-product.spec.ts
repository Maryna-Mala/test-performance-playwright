import { test, expect } from '@playwright/test';

//test.only('Login with valid credentials for your free account', async () => {

    test('Add Brazil Espresso 250 grams to the cart', async ({ page }) => {
        await page.goto('https://idealistcoffee.com/');
        //click on header on the home page
        await page.locator("//li[contains(@class, 'nav-1')]").click()
        //the first item on the page is visible
        await expect(page.locator("//li[contains(@class, 'product-item')]").first()).toContainText('Coffee Tonic')
        //adding it to the cart
        await page.locator('//form[contains(@data-role, "tocart-form")]').first().click()
        //check the cart visibility
        await expect(page.locator('#minicart-content-wrapper')).toBeVisible()
    });

//});