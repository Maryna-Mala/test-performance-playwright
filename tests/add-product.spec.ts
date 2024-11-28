import { expect, test } from '../src/FixtureConfig.ts'

test.only('Add the first product item to the cart', async ({ page, homePage, coffeePage }) => {
    await homePage.open();
    expect(page.url()).toContain(await homePage.getPageUrl());
    await homePage.header.clickOnFirstElement();
    await expect (coffeePage.productItem.productItemList()).toContainText('Coffee Tonic');
    await coffeePage.productItem.clickAddToCartButton();
    await expect(coffeePage.cartModal.miniCartContent()).toBeVisible();
});
