import { test, expect } from '../sharedFixture.js';

test.beforeEach(async ({ page }) => {
  // Force maximize for all browsers, including WebKit and Chromium
  await page.setViewportSize({ width: 1920, height: 1080 });
});

test('SauceDemo valid login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await expect(page).toHaveURL(/inventory.html/);
  await expect(page.locator('.title')).toHaveText('Products');
});
