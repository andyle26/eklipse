import { Locator, Page, expect } from "@playwright/test";
import { Actions } from './actions';
import Logger from "./logger";

export class Assertion {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async assertURL(expected: string) {
        Logger.debug('Assert URL')
        await expect(this.page).toHaveURL(expected);
    }

    public async assertElementIsDisplay(locator: Locator) {
        Logger.debug(`Assert ${locator} is display`);
        await expect(locator).toBeVisible()  
    }
}