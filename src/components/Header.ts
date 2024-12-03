import { Page } from "@playwright/test";
import BaseComponent from "../base/BaseComponent.ts";

export default class Header extends BaseComponent {
  page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }
  //Locators
  catalogContainerFirstElement = () =>
    this.page.locator('//li[contains(@class, "nav-1")]');

  public async clickOnFirstElement(): Promise<void> {
    await this.catalogContainerFirstElement().click();
  }
}
