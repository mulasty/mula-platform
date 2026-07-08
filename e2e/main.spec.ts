import { test, expect } from '@playwright/test'

test.describe('Mula Group landing page', () => {
  test('homepage renders with main heading and navigation', async ({ page }) => {
    await page.goto('/')

    await expect(page).toHaveTitle(/Mula Group/)
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
    await expect(page.getByRole('link', { name: /Kontakt/i })).toBeVisible()
  })

  test('privacy policy page is reachable', async ({ page }) => {
    await page.goto('/polityka-prywatnosci')

    await expect(page.getByRole('heading', { name: 'Polityka prywatności' })).toBeVisible()
  })
})
