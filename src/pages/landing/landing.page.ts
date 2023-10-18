import { Page } from "@playwright/test";
import { BasePage } from "../../core/basePage";
import Logger from "../../core/logger";
const xpath = require('./xpath');


export class LandingPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    public async goToSignInPage() {
        Logger.info('Go to Sign In page')
        await this.Action.gotoURL(process.env.URL as string);
        await this.Action.click(xpath.header.signIn);
        await this.Action.waitForLoadState();
    }

    public async goToSignUpPage() {
        Logger.info('Go to Sign Up page')
        await this.Action.gotoURL(process.env.URL as string);
        await this.Action.click(xpath.header.signUp);
        await this.Action.waitForLoadState();
    }
}