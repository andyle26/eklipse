import { Page } from "@playwright/test";
import { LandingPage } from "../pages/landing/landing.page";
import { LoginPage } from "../pages/login/login.page";
import { HomePage } from "../pages/home/home.page";

export class HomeSteps {

    private landingPage: LandingPage;
    private loginPage: LoginPage;
    private homePage: HomePage;

    constructor(page: Page) {
        const {
            landingPage,
            loginPage,
            homePage
        } = this.initializePages(page)        
        this.landingPage = landingPage;
        this.loginPage = loginPage;
        this.homePage = homePage;
    }

    private initializePages(page: Page) {
        const landingPage = new LandingPage(page);
        const loginPage = new LoginPage(page);
        const homePage = new HomePage(page);
        return {landingPage, loginPage, homePage};
    }

    public async NavigateToStreamPageSuccessfully() {
        await this.landingPage.goToSignInPage();
        await this.loginPage.login(process.env.EMAIL as string, process.env.PASSWORD as string);
        await this.homePage.navigateToStreamPage();
        await this.homePage.assertNavigateToStreamPageSuccessfully();
    }

    public async NavigateToConvertTiktokPageSuccessfully() {
        await this.landingPage.goToSignInPage();
        await this.loginPage.login(process.env.EMAIL as string, process.env.PASSWORD as string);
        await this.homePage.navigateToCovertTiktokPage();
        await this.homePage.assertNavigateToCovertTiktokPageSuccessfully();
    }

    public async NavigateToPremiumClipsPageSuccessfully() {
        await this.landingPage.goToSignInPage();
        await this.loginPage.login(process.env.EMAIL as string, process.env.PASSWORD as string);
        await this.homePage.navigateToPremiumClipsPage();
        await this.homePage.assertNavigateToPremiumClipsPageSuccessfully();
    }
}