import { Page } from "@playwright/test";

export default class CartModal {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    //Locators
    miniCartContent = () => this.page.locator('#minicart-content-wrapper')
}