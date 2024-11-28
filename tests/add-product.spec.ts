import { test, expect } from '@playwright/test';
import HomePage from '../src/pages/HomePage';

    test.only('Add Brazil Espresso 250 grams to the cart', async ({ page }) => {
        const homePage = new HomePage (page)

        await page.goto('')
        await expect(await page.url()).toContain(await homePage.getPageUrl());
        await homePage.header.clickOnFirstElement()
        //the first item on the page is visible
        await expect(page.locator("//li[contains(@class, 'product-item')]").first()).toContainText('Coffee Tonic')
        //adding it to the cart
        await page.locator('//form[contains(@data-role, "tocart-form")]').first().click()
        //check the cart visibility
        await expect(page.locator('#minicart-content-wrapper')).toBeVisible()
    });
