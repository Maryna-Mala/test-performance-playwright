import { Page } from "@playwright/test";
import BasePage from "../base/BasePage.ts";
import Header from "../components/Header.ts";

export default class HomePage extends BasePage{
    public header: Header = new Header(this.page);

    constructor(page: Page) {
       super(page, 'Home Page') 
    }
}