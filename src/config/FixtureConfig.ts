import { test as base } from "@playwright/test";
import HomePage from "../pages/HomePage.ts";
import CoffeePage from "../pages/CoffeePage.ts";
import LoginPage from "../pages/LoginPage.ts";

type MyFixtures = {
  homePage: HomePage;
  coffeePage: CoffeePage;
  loginPage: LoginPage;
};

export const test = base.extend<MyFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },

  coffeePage: async ({ page }, use) => {
    const coffeePage = new CoffeePage(page);
    await use(coffeePage);
  },

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
});

export { expect } from "@playwright/test";
