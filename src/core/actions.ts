import { Page } from '@playwright/test';
import Logger from './logger';

export class Actions {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async click(selector: string, delay: number = 0) {
        Logger.debug(`Click to ${selector}`)
        if(await this.findElement(selector))
            await this.page.click(selector);
        else
            throw new Error(`Element with selector ${selector} was not found.`)
    }

    public async fill(selector: string, text: string, _force: boolean = false) {
        Logger.debug(`Fill to ${selector}`)
        if(await this.findElement(selector)) {
            await this.page.focus(selector);
            await this.page.fill(selector, text, {force: _force});
        }
        else
            throw new Error(`Element with selector ${selector} was not found.`)
       
    }

    public async waitForSelector(selector: string, timeout: number = 5000) {
        Logger.debug(`Wait ${selector} to be visible`)
        await this.page.waitForSelector(selector, { state: 'visible', timeout: timeout })
    }

    public async getLocator(selector: string) {
        Logger.debug(`Get ${selector} locator`)
        if(await this.findElement(selector))
            return await this.page.locator(selector);
        else
            throw new Error(`Locator with selector ${selector} was not found.`)
    }

    public async findElement(selector: string) {
        Logger.debug(`Find element with ${selector} selector`)
        const element = await this.page.$(selector);
        return element == null ? null : element;
    }

    public async waitForLoadState() {
        Logger.debug(`Wait for load state`)
        await this.page.waitForLoadState('load');
    }

    public async gotoURL(url: string) {
        Logger.debug(`Navigate to ${url}`)
        await this.page.goto(url);
        await this.page.waitForLoadState('load');
    }

    public async waitForTimeout(timeout: number) {
        Logger.debug(`Wait for timeout: ${timeout}`)
        await this.page.waitForTimeout(timeout);
    }

    public async $(selector: string) {
        Logger.debug(`Find element with ${selector} selector`)
        return await this.page.$(selector)
    }
}