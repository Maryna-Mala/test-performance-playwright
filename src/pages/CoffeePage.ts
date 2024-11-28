import { Page } from "@playwright/test";
import BasePage from "../base/BasePage.ts";
import ProductItem from "../components/ProductItem.ts";
import CartModal from "../modals/CartModal.ts";

export default class CoffeePage extends BasePage {
    public productItem:ProductItem  = new ProductItem(this.page);
    public cartModal:CartModal  = new CartModal(this.page);

    constructor(page: Page) {
        super(page, 'Coffee Page', 'coffee.html')
    }
}