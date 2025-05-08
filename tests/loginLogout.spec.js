const { test, expect } = require('@playwright/test');

test.describe('Login and Logout Flow', () => {
  const baseURL = 'https://example.com'; // Ganti dengan URL aplikasi kamu

  test('should log in with valid credentials and log out', async ({ page }) => {
    await page.goto(`${baseURL}/login`);
    await page.fill('input[name="email"]', 'testuser@example.com');
    await page.fill('input[name="password"]', 'securepassword123');
    await page.click('button[type="submit"]');

    await expect(page).toHaveURL(`${baseURL}/dashboard`);
    await expect(page.locator('h1')).toContainText('Welcome');

    await page.click('#logout');
    await expect(page).toHaveURL(`${baseURL}/login`);
  });
});
