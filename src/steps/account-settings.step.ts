import { Page } from "@playwright/test";
import { CommonElement } from "../common/element.common";
import { LandingPage } from "../pages/landing/landing.page";
import { LoginPage } from "../pages/login/login.page";
import { AccountSettingsPage } from "../pages/account-settings/account-setting.page";

export class AccountSettingsSteps {

    private commonElement: CommonElement;
    private landingPage: LandingPage;
    private loginPage: LoginPage;
    private accountSettingsPage: AccountSettingsPage;

    constructor(page: Page) {
        const {
            commonElement,
            landingPage,
            loginPage,
            accountSettingsPage
        } = this.initializePages(page);
        this.commonElement = commonElement;
        this.landingPage = landingPage;
        this.loginPage = loginPage;
        this.accountSettingsPage = accountSettingsPage;
    }

    private initializePages(page: Page) {
        const commonElement = new CommonElement(page);
        const landingPage = new LandingPage(page);
        const loginPage = new LoginPage(page);
        const accountSettingsPage = new AccountSettingsPage(page);
        return {commonElement, landingPage, loginPage, accountSettingsPage};
    }

    public async updateProfileSuccessfully() {
        const name = `newEklipseName-${Date.now()}`;
        await this.landingPage.goToSignInPage();
        await this.loginPage.login(process.env.EMAIL as string, process.env.PASSWORD as string);
        await this.commonElement.navigateToAccountSettingsPage();
        await this.accountSettingsPage.updateProfileSettings(name);
        await this.accountSettingsPage.assertUpdateProfileSuccessfully();
    }

    public async updateProfileFailedByMissingName() {
        await this.landingPage.goToSignInPage();
        await this.loginPage.login(process.env.EMAIL as string, process.env.PASSWORD as string);
        await this.commonElement.navigateToAccountSettingsPage();
        await this.accountSettingsPage.updateProfileSettings(' ');
        await this.accountSettingsPage.assertUpdateProfileFailed();
    }

    public async updatePasswordSuccessfully() {
        const password = process.env.PASSWORD as string;
        await this.landingPage.goToSignInPage();
        await this.loginPage.login(process.env.EMAIL as string, process.env.PASSWORD as string);
        await this.commonElement.navigateToAccountSettingsPage();
        await this.accountSettingsPage.updatePassword(password, password, password);
        await this.accountSettingsPage.assertUpdateProfileSuccessfully();
    }

    public async updatePasswordFailedByWrongCurrentPassword() {
        const password = process.env.PASSWORD as string;
        await this.landingPage.goToSignInPage();
        await this.loginPage.login(process.env.EMAIL as string, process.env.PASSWORD as string);
        await this.commonElement.navigateToAccountSettingsPage();
        await this.accountSettingsPage.updatePassword("Demo@123123", password, password);
        await this.accountSettingsPage.assertUpdateProfileFailed();
    }

    public async updatePasswordFailedByConfirmPasswordDoesNotMatch() {
        const password = process.env.PASSWORD as string;
        await this.landingPage.goToSignInPage();
        await this.loginPage.login(process.env.EMAIL as string, process.env.PASSWORD as string);
        await this.commonElement.navigateToAccountSettingsPage();
        await this.accountSettingsPage.updatePassword(password, password, "Demo@123123");
        await this.accountSettingsPage.assertUpdateProfileFailed();
    }
}