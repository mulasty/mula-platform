import { afterEach, describe, it, expect, vi } from 'vitest'
import { POST } from './route'

function contactRequest(body: Record<string, unknown>) {
  return new Request('https://mulagroup.eu/api/contact', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  })
}

const ORIGINAL_API_KEY = process.env.RESEND_API_KEY

afterEach(() => {
  vi.unstubAllGlobals()
  if (ORIGINAL_API_KEY === undefined) {
    delete process.env.RESEND_API_KEY
  } else {
    process.env.RESEND_API_KEY = ORIGINAL_API_KEY
  }
})

describe('POST /api/contact', () => {
  it('returns validation errors for empty body', async () => {
    const res = await POST(contactRequest({}))
    const data = await res.json()

    expect(res.status).toBe(400)
    expect(data.success).toBe(false)
    expect(data.errors.length).toBeGreaterThan(0)
  })

  it('accepts valid submission', async () => {
    process.env.RESEND_API_KEY = 're_test_123'
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue(
        new Response('{}', {
          status: 200,
          headers: { 'content-type': 'application/json' },
        }),
      ),
    )

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

  it('reports delivery failure to the visitor', async () => {
    delete process.env.RESEND_API_KEY

    const res = await POST(
      contactRequest({
        name: 'Anna Nowak',
        email: 'anna.nowak@example.com',
        competency: 'Inne',
        message: 'To jest odrębna testowa wiadomość o innym treści fingerprint.',
      }),
    )
    const data = await res.json()

    expect(res.status).toBe(502)
    expect(data.success).toBe(false)
  })

  it('allows a retry after delivery failure (fingerprint is not suppressed)', async () => {
    delete process.env.RESEND_API_KEY

    const body = {
      name: 'Maria Wiśniewska',
      email: 'maria.wisniewska@example.com',
      competency: 'Cyberbezpieczeństwo',
      message: 'Pierwsza próba wysyłki, która nie powinna się powtórzyć jako duplikat.',
    }

    const first = await POST(contactRequest(body))
    expect(first.status).toBe(502)

    // Fresh Request — a consumed body would otherwise throw on the retry.
    const retry = await POST(contactRequest(body))
    const data = await retry.json()

    // The retry must reach delivery again (still failing due to missing key),
    // not short-circuit through the duplicate guard with a fake success.
    expect(retry.status).toBe(502)
    expect(data.success).toBe(false)
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
