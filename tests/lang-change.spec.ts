import { test, expect } from "@playwright/test";

  test("Change the website language to English", async ({ page }) => {
  await page.goto('/');
  await page.locator("//li[contains(@class, 'view-en')]").click();
  const languageChanged = page.locator("#switcher-language-trigger");
  await languageChanged.waitFor()
  await expect(languageChanged).toHaveText("EN");
});
