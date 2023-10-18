import { Page } from "@playwright/test";
import { BasePage } from "../../core/basePage";
import Logger from "../../core/logger";
const xpath = require('./xpath');

export class AccountSettingsPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    public async updateProfileSettings(name: string) {
        Logger.info(`Update Name: ${name}`)
        await this.Action.waitForTimeout(1000);
        await this.Action.fill(xpath.personalDetail.profileSetting.name, name);
        await this.Action.click(xpath.personalDetail.profileSetting.saveChanges);
    }

    public async updatePassword(curPassword: string, newPassword: string, confPassword) {
        Logger.info(`Change Password from ${curPassword} to ${newPassword}`)
        await this.Action.click(xpath.personalDetail.password.changePassword);
        await this.Action.waitForSelector(xpath.personalDetail.password.modalChangePassword);
        await this.Action.fill(xpath.personalDetail.password.currentPassword, curPassword);
        await this.Action.fill(xpath.personalDetail.password.newPassword, newPassword);
        await this.Action.fill(xpath.personalDetail.password.confirmPassword, confPassword);
        await this.Action.click(xpath.personalDetail.password.saveChange, 500);
    }

    public async assertUpdateProfileSuccessfully() {
        Logger.info('Assert update profile successfully')
        await this.Action.waitForSelector(xpath.popupUpdateProfile.success.content);
        const locator = await this.Action.getLocator(xpath.popupUpdateProfile.success.content);
        await this.Assertion.assertElementIsDisplay(locator);
    }

    public async assertUpdateProfileFailed() {
        Logger.info('Assert update profile successfully')
        await this.Action.waitForSelector(xpath.popupUpdateProfile.failed.content);
        const locator = await this.Action.getLocator(xpath.popupUpdateProfile.failed.content);
        await this.Assertion.assertElementIsDisplay(locator);
    }
}