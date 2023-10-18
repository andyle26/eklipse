import { Page } from "@playwright/test";
import { Actions } from "./actions";
import { Assertion } from "./assertions";
import Logger from "./logger";

export class BasePage {
    private action: Actions;
    private assertion: Assertion;
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public get Action() {
        this.action = new Actions(this.page);
        return this.action;
    }

    public get Assertion() {
        this.assertion = new Assertion(this.page);
        return this.assertion;
    }

}