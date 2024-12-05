import { test, expect } from "@playwright/test";

test("Add the first product item to the cart", async ({ page }) => {
  await page.goto('/');
  await page.locator('//li[contains(@class, "nav-1")]').click();
  await expect(page.locator("//li[contains(@class, 'product-item')]").first()).toBeVisible();
  await page.locator("//li[contains(@class, 'product-item')]").first().click();
  await expect(page.locator('#minicart-content-wrapper')).toBeVisible();

})
