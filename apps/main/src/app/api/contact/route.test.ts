import { describe, it, expect } from 'vitest'
import { POST } from './route'

function contactRequest(body: Record<string, unknown>) {
  return new Request('https://mulagroup.eu/api/contact', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  })
}

describe('POST /api/contact', () => {
  it('returns validation errors for empty body', async () => {
    const res = await POST(contactRequest({}))
    const data = await res.json()

    expect(res.status).toBe(400)
    expect(data.success).toBe(false)
    expect(data.errors.length).toBeGreaterThan(0)
  })

  it('accepts valid submission', async () => {
    const res = await POST(
      contactRequest({
        name: 'Jan Kowalski',
        email: 'jan@example.com',
        competency: 'AI i Automatyzacja',
        message: 'To jest testowa wiadomość kontaktowa.',
      }),
    )
    const data = await res.json()

    expect(res.status).toBe(200)
    expect(data.success).toBe(true)
  })

  it('rejects invalid competency value', async () => {
    const res = await POST(
      contactRequest({
        name: 'Jan Kowalski',
        email: 'jan@example.com',
        competency: 'Nieprawidłowy obszar',
        message: 'To jest testowa wiadomość kontaktowa.',
      }),
    )
    const data = await res.json()

    expect(data.success).toBe(false)
    expect(data.errors.some((e: { field: string }) => e.field === 'competency')).toBe(true)
  })

  it('rejects message shorter than 10 characters', async () => {
    const res = await POST(
      contactRequest({
        name: 'Jan Kowalski',
        email: 'jan@example.com',
        competency: 'Inne',
        message: 'Krótka',
      }),
    )
    const data = await res.json()

    expect(data.success).toBe(false)
    expect(data.errors.some((e: { field: string }) => e.field === 'message')).toBe(true)
  })

  it('rejects invalid email format', async () => {
    const res = await POST(
      contactRequest({
        name: 'Jan Kowalski',
        email: 'not-an-email',
        competency: 'Inne',
        message: 'To jest testowa wiadomość kontaktowa.',
      }),
    )
    const data = await res.json()

    expect(data.success).toBe(false)
    expect(data.errors.some((e: { field: string }) => e.field === 'email')).toBe(true)
  })

  it('silently accepts honeypot fill', async () => {
    const res = await POST(
      contactRequest({
        name: 'Bot',
        email: 'bot@spam.com',
        competency: 'Inne',
        message: 'Spam message here.',
        website: 'http://evil.com',
      }),
    )
    const data = await res.json()

    expect(data.success).toBe(true)
  })

  it('rejects non-JSON request body gracefully', async () => {
    const req = new Request('https://mulagroup.eu/api/contact', {
      method: 'POST',
      headers: { 'content-type': 'text/plain' },
      body: 'not json',
    })
    const res = await POST(req)
    const data = await res.json()

    // Currently returns 400 from the catch block when JSON.parse fails
    expect(data.success).toBe(false)
  })
})
