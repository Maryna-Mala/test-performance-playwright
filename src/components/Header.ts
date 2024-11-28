import { Page, Locator } from "@playwright/test";
import BaseComponent from '../base/BaseComponent.ts';


export default class Header extends BaseComponent{
    page: Page;

    constructor(page: Page) {
        super(page)
        this.page = page;
    }
    //Locators
    catalogContainerFirstElement = () => this.page.locator('//li[contains(@class, "nav-1")]')
    

    public async clickOnFirstElement(): Promise<void>{
        await this.catalogContainerFirstElement().click()
    }

}








/* export default class Header extends BaseComponent{
    //public readonly headerContainerLocator: Locator;
    public readonly catalogContainerFirstElement: Locator;

    //private readonly headerContainerLocator = '.page-header';
    //private readonly catalogContainerFirstElement = this.page.ger(`${this.headerContainerLocator}[class="nav-1"]`);

    constructor(page: Page) {
        super(page)
        //this.headerContainerLocator = page.locator('.page-header')
        //this.catalogContainerFirstElement = page.locator('[class="nav-1"]');
    }

    public async clickOnFirstElement(): Promise<void>{
        await this.catalogContainerFirstElement.click()
    }
} */

