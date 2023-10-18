import { Page, expect } from "@playwright/test";
import { BasePage } from "../../core/basePage";
import Logger from "../../core/logger";
const xpath = require('./xpath');

export class HomePage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    public async navigateToStreamPage() {
        Logger.info('Navigate to Stream page');
        await this.Action.waitForSelector(xpath.streamLink);
        await this.Action.click(xpath.streamLink);
        await this.Action.waitForLoadState();
    }

    public async navigateToCovertTiktokPage() {
        Logger.info('Navigate to Convert Tiktok page');
        await this.Action.waitForSelector(xpath.convertToTiktok);
        await this.Action.click(xpath.convertToTiktok);
        await this.Action.waitForLoadState();
    }

    public async navigateToPremiumClipsPage() {
        Logger.info('Navigate to Premium Clips page');
        await this.Action.waitForSelector(xpath.premiumClips);
        await this.Action.click(xpath.premiumClips);
        await this.Action.waitForLoadState();
    }

    public async assertNavigateToStreamPageSuccessfully() {
        Logger.info('Assert navigate to Stream page successfully');
        await this.Assertion.assertURL('/video-library/streams');
    }

    public async assertNavigateToCovertTiktokPageSuccessfully() {
        Logger.info('Assert navigate to Convert Tiktok page successfully');
        await this.Assertion.assertURL('/edited-clip/convert-to-tiktok');
    }

    public async assertNavigateToPremiumClipsPageSuccessfully() {
        Logger.info('Assert navigate to Premium Clips page successfully');
        await this.Assertion.assertURL('/premium-clips');
    }
}