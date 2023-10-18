import { Page } from "@playwright/test";
import { BasePage } from "../core/basePage";
import Logger from "../core/logger";
const xpath = require('./xpath');

export class CommonElement extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    public async navigateToAccountSettingsPage() {
        Logger.info('Navigate to Account Settings page');
        await this.Action.waitForSelector(xpath.header.profile);
        await this.Action.click(xpath.header.profile);
        await this.Action.click(xpath.header.accountSettings);
        await this.Action.waitForLoadState();
    }

}