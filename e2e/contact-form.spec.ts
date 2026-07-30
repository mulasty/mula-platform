import { test, expect } from '@playwright/test'

test.describe('Contact form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3001')
  })

  test('renders contact form with all fields and submit button', async ({ page }) => {
    await expect(page.locator('#contact-name')).toBeVisible()
    await expect(page.locator('#contact-email')).toBeVisible()
    await expect(page.locator('#contact-company')).toBeVisible()
    await expect(page.locator('#contact-competency')).toBeVisible()
    await expect(page.locator('#contact-message')).toBeVisible()
    await expect(page.locator('#contact-consent')).toBeVisible()
    await expect(page.getByRole('button', { name: /Wyślij wiadomość/ })).toBeVisible()
  })

  test('shows validation errors on empty submit', async ({ page }) => {
    await page.getByRole('button', { name: /Wyślij wiadomość/ }).click()

    await expect(page.getByText('Imię i nazwisko jest wymagane')).toBeVisible()
    await expect(page.getByText('Adres email jest wymagany')).toBeVisible()
    await expect(page.getByText('Wiadomość jest wymagana')).toBeVisible()
    await expect(page.getByText('Zgoda na przetwarzanie danych jest wymagana')).toBeVisible()
  })

  test('shows error for invalid email', async ({ page }) => {
    await page.locator('#contact-email').fill('not-an-email')
    await page.getByRole('button', { name: /Wyślij wiadomość/ }).click()

    await expect(page.getByText('Podaj prawidłowy adres email')).toBeVisible()
  })

  test('validates GDPR consent is required', async ({ page }) => {
    await page.locator('#contact-name').fill('Jan Kowalski')
    await page.locator('#contact-email').fill('jan@firma.pl')
    await page.locator('#contact-message').fill('To jest testowa wiadomość która ma więcej niż dziesięć znaków.')

    await page.getByRole('button', { name: /Wyślij wiadomość/ }).click()

    await expect(page.getByText('Zgoda na przetwarzanie danych jest wymagana')).toBeVisible()
  })

  test('submits successfully with valid data', async ({ page }) => {
    await page.route('**/api/contact', (route) => {
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ success: true }),
      })
    })

    await page.locator('#contact-name').fill('Jan Kowalski')
    await page.locator('#contact-email').fill('jan@firma.pl')
    await page.locator('#contact-company').fill('Firma XYZ')
    await page.locator('#contact-competency').selectOption('AI i Automatyzacja')
    await page.locator('#contact-message').fill('To jest testowa wiadomość która ma więcej niż dziesięć znaków.')
    await page.locator('#contact-consent').check()

    await page.getByRole('button', { name: /Wyślij wiadomość/ }).click()

    await expect(page.getByText('Dziękujemy za wiadomość!')).toBeVisible()
  })

  test('clears field error when user corrects input', async ({ page }) => {
    await page.getByRole('button', { name: /Wyślij wiadomość/ }).click()
    await expect(page.getByText('Imię i nazwisko jest wymagane')).toBeVisible()

    await page.locator('#contact-name').fill('Jan Kowalski')
    await expect(page.getByText('Imię i nazwisko jest wymagane')).not.toBeVisible()
  })
})
