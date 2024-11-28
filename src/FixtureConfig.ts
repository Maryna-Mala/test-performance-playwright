import {test as base} from '@playwright/test';
import HomePage from './pages/HomePage.ts';
import CoffeePage from './pages/CoffeePage.ts';


type MyFixtures = {
    homePage: HomePage;
    coffeePage: CoffeePage;
};

export const test = base.extend<MyFixtures> ({
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },

    coffeePage: async ({ page }, use) => {
        const coffeePage = new CoffeePage(page);
        await use(coffeePage);
    },
});

export { expect } from '@playwright/test';