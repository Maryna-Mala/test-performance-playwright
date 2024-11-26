import { test as setup, expect } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);


const authFile = path.join(__dirname, '../playwright/.auth/user.json');


setup('authenticate', async ({ page }) => {
        await page.goto('https://idealistcoffee.com/ua/customer/account/login');
        await page.locator('#email').fill('marinamalaa0@gmail.com');
        await page.locator('[name="login[password]"]').fill('Testuser1234');
        await page.locator("//button[contains(@class, 'primary')]").click();

        await page.waitForURL('https://idealistcoffee.com/ua/sales/order/history/')
        await expect(page.locator("//span[contains(text(), 'Марина')]").first()).toBeVisible()
        
        await page.context().storageState({ path: authFile });
});