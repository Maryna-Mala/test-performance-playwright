import { test, expect } from '@playwright/test';

test.describe('Idealist login', async () => {
    test('Login with invalid credentials for your free account', async ({ page }) => {
        await page.goto('https://idealistcoffee.com/ua/sales/order/history/');
        await page.locator("//li[contains(@class, 'nav item')]//a[text()='Вихід']").click() 
        await page.goto('https://idealistcoffee.com/ua/customer/account/login');
        await page.locator('#email').fill('marinamalaa0@gmail.com');
        await page.locator('[name="login[password]"]').fill('Testuser12345');
        await page.locator("//button[contains(@class, 'primary')]").click();
        const errorMessage = await page.locator('[data-ui-id="message-error"]').textContent(); 

        await expect(errorMessage).toContain('Вхід в обліковий запис був неправильний');
    });
});