import { Page } from "@playwright/test";

export default class ProductItem {
    page: Page;

    constructor(page: Page) {
        this.page = page
    }

    //Locators
    productItemList = () => this.page.locator("//li[contains(@class, 'product-item')]").first()
    addToCartButton = () => this.page.locator('//form[contains(@data-role, "tocart-form")]').first()

    public async clickAddToCartButton(): Promise<void>{
        await this.addToCartButton().click()
    } 


}