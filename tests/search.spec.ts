import { test, expect } from "@playwright/test";

  test("Search products using the search feature", async ({ page }) => {
    await page.goto('/');
    await page.locator("//*[contains(@class, 'search-toggle')]/div[@class='icon-block']").click();
    await page.locator("#search.input-text").fill("coffee");
    await page.locator("//button[contains(@class, 'search')]").click();
    const searchResult = page.locator("//span[contains(text(), 'coffee')]").first()
    await searchResult.waitFor()
    await expect(searchResult).toBeVisible();
  });
