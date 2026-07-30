import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ContactForm } from './ContactForm'

describe('ContactForm', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders all form fields', () => {
    render(<ContactForm />)

    expect(screen.getByLabelText(/^Imię i nazwisko/)).toBeInTheDocument()
    expect(screen.getByLabelText(/^Email/)).toBeInTheDocument()
    expect(screen.getByLabelText(/^Firma/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Wybierz obszar/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Wiadomość/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Wyrażam zgodę/)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Wyślij wiadomość/ })).toBeInTheDocument()
  })

  it('shows validation errors on empty submit', async () => {
    render(<ContactForm />)

    fireEvent.click(screen.getByRole('button', { name: /Wyślij wiadomość/ }))

    await waitFor(() => {
      expect(screen.getByText('Imię i nazwisko jest wymagane')).toBeInTheDocument()
      expect(screen.getByText('Adres email jest wymagany')).toBeInTheDocument()
      expect(screen.getByText('Wiadomość jest wymagana')).toBeInTheDocument()
      expect(screen.getByText('Zgoda na przetwarzanie danych jest wymagana')).toBeInTheDocument()
    })
  })

  it('shows error for invalid email', async () => {
    render(<ContactForm />)

    fireEvent.change(screen.getByLabelText(/^Email/), {
      target: { value: 'not-an-email' },
    })
    fireEvent.click(screen.getByRole('button', { name: /Wyślij wiadomość/ }))

    await waitFor(() => {
      expect(screen.getByText('Podaj prawidłowy adres email')).toBeInTheDocument()
    })
  })

  it('renders with pre-selected competency prop', () => {
    render(<ContactForm competency="Cyberbezpieczeństwo" />)

    const select = screen.getByLabelText(/Wybierz obszar/) as HTMLSelectElement
    expect(select.value).toBe('Cyberbezpieczeństwo')
  })

  it('shows success message after successful submission', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce(
      new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }),
    )

    render(<ContactForm />)

    fireEvent.change(screen.getByLabelText(/^Imię i nazwisko/), {
      target: { value: 'Jan Kowalski' },
    })
    fireEvent.change(screen.getByLabelText(/^Email/), {
      target: { value: 'jan@firma.pl' },
    })
    fireEvent.change(screen.getByLabelText(/Wiadomość/), {
      target: { value: 'To jest testowa wiadomość która ma więcej niż dziesięć znaków.' },
    })
    fireEvent.click(screen.getByLabelText(/Wyrażam zgodę/))
    fireEvent.click(screen.getByRole('button', { name: /Wyślij wiadomość/ }))

    await waitFor(() => {
      expect(screen.getByText('Dziękujemy za wiadomość!')).toBeInTheDocument()
    })
  })

  it('validates GDPR consent is required', async () => {
    render(<ContactForm />)

    fireEvent.change(screen.getByLabelText(/^Imię i nazwisko/), {
      target: { value: 'Jan Kowalski' },
    })
    fireEvent.change(screen.getByLabelText(/^Email/), {
      target: { value: 'jan@firma.pl' },
    })
    fireEvent.change(screen.getByLabelText(/Wiadomość/), {
      target: { value: 'To jest testowa wiadomość która ma więcej niż dziesięć znaków.' },
    })
    fireEvent.click(screen.getByRole('button', { name: /Wyślij wiadomość/ }))

    await waitFor(() => {
      expect(screen.getByText('Zgoda na przetwarzanie danych jest wymagana')).toBeInTheDocument()
    })
  })

  it('clears field error when user types after validation', async () => {
    render(<ContactForm />)

    fireEvent.click(screen.getByRole('button', { name: /Wyślij wiadomość/ }))

    await waitFor(() => {
      expect(screen.getByText('Imię i nazwisko jest wymagane')).toBeInTheDocument()
    })

    fireEvent.change(screen.getByLabelText(/^Imię i nazwisko/), {
      target: { value: 'Jan' },
    })

    await waitFor(() => {
      expect(screen.queryByText('Imię i nazwisko jest wymagane')).not.toBeInTheDocument()
    })
  })
})
