import { test } from '@playwright/test';
import { LoginSteps } from '../steps/login.step';

test('Login to system successfully', async ({ page }) => {
    const loginSteps = new LoginSteps(page);
    await loginSteps.LoginToSystemSuccessfully();
});

test('Login to system failed by email dose not exist', async ({ page }) => {
    const loginSteps = new LoginSteps(page);
    await loginSteps.LoginToSystemFailedByEmailDoseNotExist();
});

test('Login to system failed by wrong password', async ({ page }) => {
    const loginSteps = new LoginSteps(page);
    await loginSteps.LoginToSystemFailedByWrongPassword();
});
