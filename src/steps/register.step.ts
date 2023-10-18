import { Page } from "@playwright/test";
import { LandingPage } from "../pages/landing/landing.page";
import { RegisterPage } from "../pages/register/register.page";
import { AccountRegistration } from "../type/account-registration.type";
import registerDataJson from "../../data/register.json";
export class RegisterSteps {

    private landingPage: LandingPage;
    private registerPage: RegisterPage;

    constructor(page: Page) {
        const {
            landingPage,
            registerPage
        } = this.initializePages(page);
        this.landingPage = landingPage;
        this.registerPage = registerPage;
    }

    private initializePages(page: Page) {
        const landingPage = new LandingPage(page);
        const registerPage = new RegisterPage(page);
        return {landingPage, registerPage};
    }

    public async registerAccountSuccessfully() {

        const accountRegistration = registerDataJson as AccountRegistration;
        accountRegistration.email = `${accountRegistration.email}${Date.now()}@yopmail.com`;

        await this.landingPage.goToSignUpPage();
        await this.registerPage.registerAccount(accountRegistration);
        await this.registerPage.assertRegisterAccountSuccessfully();
    }

    public async registerAccountFailedByEmailAlreadyExist() {

        const accountRegistration = registerDataJson as AccountRegistration;
        accountRegistration.email = `trile-eklipse@yopmail.com`;
        
        await this.landingPage.goToSignUpPage();
        await this.registerPage.registerAccount(accountRegistration);
        await this.registerPage.assertRegisterAccountFailedByEmailAlreadyExist();
    }
}