import { test, expect } from '@playwright/test';

test('Verify Microsoft Homepage', async ({ page }) => {

  await page.goto('https://www.microsoft.com');

  await expect(page).toHaveTitle(/Microsoft/);

  console.log('Microsoft homepage loaded successfully');

});

test('Verify Playwright Website', async ({ page }) => {

  await page.goto('https://playwright.dev');

  await expect(page).toHaveTitle(/Playwright/);

  console.log('Playwright website opened successfully');

});