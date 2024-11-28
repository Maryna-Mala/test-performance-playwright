import { Page } from "@playwright/test";
import BasePage from "../base/BasePage.ts";

export default class CoffeePage extends BasePage {
    constructor(page: Page) {
        super(page, 'coffee.html')
    }
}