import { Page } from "@playwright/test";
import { BasePage } from "../../core/basePage";
import { AccountRegistration } from "../../type/account-registration.type";
import Logger from "../../core/logger";
const xpath = require('./xpath');

export class RegisterPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    public async registerAccount(account: AccountRegistration) {
        Logger.info(`Register account: ${account.email}`);
        await this.Action.fill(xpath.registerForm.name, account.name);
        await this.Action.fill(xpath.registerForm.email, account.email);
        await this.Action.fill(xpath.registerForm.password, account.password);
        await this.Action.fill(xpath.registerForm.confirmPassword, account.confirmPassword);
        await this.Action.click(xpath.registerForm.submit);
        await this.Action.waitForLoadState();
    }

    public async assertRegisterAccountSuccessfully() {
        Logger.info(`Assert register account successfully`);
        await this.Assertion.assertURL('/home');
    }

    public async assertRegisterAccountFailedByEmailAlreadyExist() {
        Logger.info(`Assert show error message after register failed by email already exist`);
        await this.Action.waitForSelector(xpath.errorMessage.emailDoseExist);
        const locator = await this.Action.getLocator(xpath.errorMessage.emailDoseExist);
        await this.Assertion.assertElementIsDisplay(locator);
    }
}