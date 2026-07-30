import { test, expect } from '@playwright/test'

const apps = [
  { name: 'main', port: 3001, titlePattern: /Mula Group/i },
  { name: 'construction', port: 3002 },
  { name: 'ai', port: 3003 },
  { name: 'digital', port: 3004 },
  { name: 'ecommerce', port: 3005 },
  { name: 'marketing', port: 3006 },
  { name: 'cyber', port: 3007 },
  { name: 'innovation', port: 3008 },
]

for (const app of apps) {
  test(`${app.name} — loads and has heading`, async ({ page }) => {
    const res = await page.goto(`http://localhost:${app.port}`)
    expect(res?.status()).toBe(200)

    await expect(page.locator('h1, h2').first()).toBeVisible()
  })
}
