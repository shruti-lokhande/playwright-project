import { test as base, expect } from '@playwright/test';

export const test = base.extend({
  context: async ({ browser }, use) => {
    // Create one shared browser context with full HD viewport
    const context = await browser.newContext({
      viewport: { width: 1920, height: 1080 }, // full screen size
      deviceScaleFactor: 1, // compatible with all browsers
    });
    await use(context);
    await context.close();
  },
  page: async ({ context }, use) => {
    const page = await context.newPage();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await use(page);
  },
});

export { expect };
