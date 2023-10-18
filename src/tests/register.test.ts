import { RegisterSteps } from "../steps/register.step"
import { test } from '@playwright/test';


test('Verify register account successfully', async ({ page }) => {
    const registerSteps = new RegisterSteps(page);
    await registerSteps.registerAccountSuccessfully();
});

test('Verify register account failed by email already exist', async ({ page }) => {
    const registerSteps = new RegisterSteps(page);
    await registerSteps.registerAccountFailedByEmailAlreadyExist();
});