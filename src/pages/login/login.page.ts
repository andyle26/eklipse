import { Page } from "@playwright/test";
import { BasePage } from "../../core/basePage";
import Logger from "../../core/logger";
const xpath = require('./xpath');

export class LoginPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    public async login(email: string, password: string) {
        Logger.info(`Login to system with account ${email}`);
        await this.Action.fill(xpath.formLogin.email, email);
        await this.Action.fill(xpath.formLogin.password, password);
        await this.Action.click(xpath.formLogin.signInButton);
        await this.Action.waitForLoadState();
    }

    public async assertLoginSuccessfully() {
        Logger.info('Assert Login to home page successfully')
        await this.Assertion.assertURL('/home');
    }

    public async assertLoginFailedByWrongCredentials() {
        Logger.info('Assert Login Failed popup is displayed');
        await this.Action.waitForSelector(xpath.popup.loginFailed);
        const locator = await this.Action.getLocator(xpath.popup.loginFailed);
        await this.Assertion.assertElementIsDisplay(locator);
    }
}