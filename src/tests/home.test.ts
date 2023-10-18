import { test } from '@playwright/test';
import { HomeSteps } from '../steps/home.steps';
import { HomePage } from '../pages/home/home.page';

test('Verify navigate to Stream page successfully', async ({page}) =>{
    const homeSteps = new HomeSteps(page)
    await homeSteps.NavigateToStreamPageSuccessfully();
})

test('Verify navigate to Convert Tiktok page successfully', async ({page}) =>{
    const homeSteps = new HomeSteps(page)
    await homeSteps.NavigateToConvertTiktokPageSuccessfully();
})

test('Verify navigate to Premium Clips page successfully', async ({page}) =>{
    const homeSteps = new HomeSteps(page)
    await homeSteps.NavigateToPremiumClipsPageSuccessfully();
})