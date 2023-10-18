import { test } from '@playwright/test';
import { AccountSettingsSteps } from '../steps/account-settings.step';

test('Verify update profile successfully', async ({page}) => {
    const accountSettingsSteps = new AccountSettingsSteps(page);
    await accountSettingsSteps.updateProfileSuccessfully();
})

test('Verify update profile failed by missing name', async ({page}) => {
    const accountSettingsSteps = new AccountSettingsSteps(page);
    await accountSettingsSteps.updateProfileFailedByMissingName();
})

test('Verify update password successfully', async ({page}) => {
    const accountSettingsSteps = new AccountSettingsSteps(page);
    await accountSettingsSteps.updatePasswordSuccessfully();
})

test('Verify update password failed by wrong current password', async ({page}) => {
    const accountSettingsSteps = new AccountSettingsSteps(page);
    await accountSettingsSteps.updatePasswordFailedByWrongCurrentPassword();
})

test('Verify update password failed by confirm password does not match', async ({page}) => {
    const accountSettingsSteps = new AccountSettingsSteps(page);
    await accountSettingsSteps.updatePasswordFailedByConfirmPasswordDoesNotMatch();
})