import { defineConfig, devices } from '@playwright/test'

const APPS = [
  { name: 'main', port: 3001 },
  { name: 'construction', port: 3002 },
  { name: 'ai', port: 3003 },
  { name: 'digital', port: 3004 },
  { name: 'ecommerce', port: 3005 },
  { name: 'marketing', port: 3006 },
  { name: 'cyber', port: 3007 },
  { name: 'innovation', port: 3008 },
]

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'list',
  use: {
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: APPS.map(({ name, port }) => ({
    command: `cd apps/${name} && npx next dev --port ${port}`,
    url: `http://localhost:${port}`,
    reuseExistingServer: !process.env.CI,
    timeout: 60000,
  })),
})
