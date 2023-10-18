import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 * 
 */

const DEFAULT_BROWSER = {

  browserName: `chromium`,
  channel: `chrome`,
  headless: true,
  ignoreHTTPSErrors: true,
  acceptDownloads: true,
  screenshot: `on`,
  video: 'on',
  trace: `on`,
  args: ["--start-fullscreen"],
  launchOptions: {
    slowMo: 200,
  },
} as any;

export default  ({

  timeout: 120000,
  globalSetup: './global-setup',
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 2 : 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html'],
    ['allure-playwright']
  ] ,
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'eklipse',
      testDir: './src/tests/',
      testMatch: '/*.test.ts',
      
      use: { 
        ...devices['Desktop Chrome'],
        ...DEFAULT_BROWSER,
        baseURL: 'https://app.eklipse.gg/'
     },
    },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
