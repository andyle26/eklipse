import { Page } from "@playwright/test";
import { LoginPage } from "../pages/login/login.page";
import { LandingPage } from "../pages/landing/landing.page";
import accountData from "../../data/account.json";

export class LoginSteps {
    private landingPage: LandingPage;
    private loginPage: LoginPage;

    constructor(page: Page) {
        const {
             landingPage, 
             loginPage 
        } = this.initializePages(page);
        this.landingPage = landingPage;
        this.loginPage = loginPage;
    }

    private initializePages(page: Page) {
        const landingPage = new LandingPage(page);
        const loginPage = new LoginPage(page);
        return { landingPage, loginPage };
    }

    public async LoginToSystemSuccessfully() {
        await this.landingPage.goToSignInPage();
        await this.loginPage.login(process.env.EMAIL as string, process.env.PASSWORD as string);
        await this.loginPage.assertLoginSuccessfully();
    }

    public async LoginToSystemFailedByEmailDoseNotExist() {
        const email = accountData.account_failed_by_wrong_email.email;
        const password = accountData.account_failed_by_wrong_password.password;

        await this.landingPage.goToSignInPage();
        await this.loginPage.login(email, password);
        await this.loginPage.assertLoginFailedByWrongCredentials();
    }

    public async LoginToSystemFailedByWrongPassword() {
        const email = accountData.account_failed_by_wrong_password.email;
        const password = accountData.account_failed_by_wrong_password.password;

        await this.landingPage.goToSignInPage();
        await this.loginPage.login(email, password);
        await this.loginPage.assertLoginFailedByWrongCredentials();
    }
}
