export const runtime = 'edge'

const VALID_COMPETENCIES = [
  'AI i Automatyzacja',
  'Cyberbezpieczeństwo',
  'E-commerce',
  'Marketing',
  'Innowacje i Startupy',
  'Budownictwo',
  'Transformacja cyfrowa',
  'Inne',
] as const

const MAX_NAME_LENGTH = 100
const MAX_EMAIL_LENGTH = 254
const MAX_COMPANY_LENGTH = 200
const MAX_MESSAGE_LENGTH = 5_000
const MIN_MESSAGE_LENGTH = 10

interface ContactBody {
  name: string
  email: string
  company?: string
  competency: string
  message: string
}

interface ValidationError {
  field: string
  message: string
}

function validate(body: ContactBody): ValidationError[] {
  const errors: ValidationError[] = []

  if (!body.name || typeof body.name !== 'string' || !body.name.trim()) {
    errors.push({ field: 'name', message: 'Imię i nazwisko jest wymagane' })
  } else if (body.name.trim().length > MAX_NAME_LENGTH) {
    errors.push({ field: 'name', message: `Imię i nazwisko nie może przekraczać ${MAX_NAME_LENGTH} znaków` })
  }

  if (!body.email || typeof body.email !== 'string' || !body.email.trim()) {
    errors.push({ field: 'email', message: 'Adres email jest wymagany' })
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email.trim())) {
    errors.push({ field: 'email', message: 'Podaj prawidłowy adres email' })
  } else if (body.email.trim().length > MAX_EMAIL_LENGTH) {
    errors.push({ field: 'email', message: 'Adres email jest zbyt długi' })
  }

  if (body.company && typeof body.company === 'string' && body.company.trim().length > MAX_COMPANY_LENGTH) {
    errors.push({ field: 'company', message: `Nazwa firmy nie może przekraczać ${MAX_COMPANY_LENGTH} znaków` })
  }

  if (!body.competency || typeof body.competency !== 'string' || !body.competency.trim()) {
    errors.push({ field: 'competency', message: 'Wybierz obszar' })
  } else if (!(VALID_COMPETENCIES as readonly string[]).includes(body.competency)) {
    errors.push({ field: 'competency', message: 'Nieprawidłowy obszar' })
  }

  if (!body.message || typeof body.message !== 'string' || !body.message.trim()) {
    errors.push({ field: 'message', message: 'Wiadomość jest wymagana' })
  } else if (body.message.trim().length < MIN_MESSAGE_LENGTH) {
    errors.push({ field: 'message', message: `Wiadomość musi mieć co najmniej ${MIN_MESSAGE_LENGTH} znaków` })
  } else if (body.message.trim().length > MAX_MESSAGE_LENGTH) {
    errors.push({ field: 'message', message: `Wiadomość nie może przekraczać ${MAX_MESSAGE_LENGTH} znaków` })
  }

  return errors
}

// Simple in-edge request deduplication to guard against rapid-fire submissions.
// Stateless and scoped to a single edge function instance — not a full rate
// limiter, but catches bots that submit the same payload repeatedly in one burst.
const RECENT_WINDOW_MS = 10_000
const recentSubmissions = new Map<string, number>()

function isRecentDuplicate(fingerprint: string): boolean {
  const now = Date.now()

  // Periodic cleanup of expired entries
  if (recentSubmissions.size > 200) {
    for (const [key, ts] of recentSubmissions) {
      if (now - ts > RECENT_WINDOW_MS) recentSubmissions.delete(key)
    }
  }

  const last = recentSubmissions.get(fingerprint)
  if (last && now - last < RECENT_WINDOW_MS) {
    return true
  }

  recentSubmissions.set(fingerprint, now)
  return false
}

function buildFingerprint(request: Request, body: ContactBody): string {
  const ip = request.headers.get('x-forwarded-for') ?? request.headers.get('x-real-ip') ?? 'unknown'
  return [ip, body.email.trim().toLowerCase(), body.name.trim(), body.message.trim().slice(0, 50)].join('|')
}

const RESEND_API_URL = 'https://api.resend.com/emails'
const CONTACT_TO_EMAIL = 'kontakt@mulagroup.eu'

async function sendContactEmail(body: ContactBody): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey || apiKey === 're_placeholder') {
    console.log('[contact] Email not sent — RESEND_API_KEY is not configured')
    return
  }

  const payload = {
    from: `Mula Group <${CONTACT_TO_EMAIL}>`,
    to: [CONTACT_TO_EMAIL],
    subject: `Nowe zgłoszenie: ${body.competency} — ${body.name.trim()}`,
    reply_to: body.email.trim(),
    html: `<h2>Nowe zgłoszenie kontaktowe</h2>
<p><strong>Imię i nazwisko:</strong> ${body.name.trim()}</p>
<p><strong>Email:</strong> ${body.email.trim()}</p>
<p><strong>Firma:</strong> ${body.company?.trim() || '—'}</p>
<p><strong>Obszar:</strong> ${body.competency}</p>
<p><strong>Wiadomość:</strong></p>
<blockquote>${body.message.trim().replace(/\n/g, '<br>')}</blockquote>
<hr>
<p><small>Wysłano z formularza kontaktowego Mula Group</small></p>`,
  }

  try {
    const response = await fetch(RESEND_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const errorBody = await response.text()
      console.error('[contact] Resend API error %d: %s', response.status, errorBody)
      return
    }

    console.log('[contact] Email sent to %s', CONTACT_TO_EMAIL)
  } catch (error) {
    console.error('[contact] Failed to send email:', error)
  }
}

export async function POST(request: Request) {
  try {
    // Only accept JSON payloads
    const contentType = request.headers.get('content-type') ?? ''
    if (!contentType.includes('application/json')) {
      return Response.json({ success: false, errors: [{ field: 'server', message: 'Nieprawidłowy format żądania' }] }, { status: 415 })
    }

    const body = (await request.json()) as ContactBody & Record<string, unknown>

    // Honeypot anti-spam check — bots fill hidden fields
    if (body.website && typeof body.website === 'string' && body.website.length > 0) {
      return Response.json({ success: true })
    }

    const errors = validate(body)

    if (errors.length > 0) {
      return Response.json({ success: false, errors }, { status: 400 })
    }

    // Guard against rapid duplicate submissions
    const fingerprint = buildFingerprint(request, body)
    if (isRecentDuplicate(fingerprint)) {
      return Response.json({ success: true })
    }

    // TODO: Integrate with email service (e.g. Resend, SendGrid, or SMTP)
    // Email delivery via Resend API (Edge-compatible, no npm deps)
    const ctx = (globalThis as unknown as { waitUntil?: (p: Promise<unknown>) => void })
    if (ctx.waitUntil) {
      ctx.waitUntil(sendContactEmail(body))
    } else {
      sendContactEmail(body).catch(() => {})
    }

    console.log('[contact] New submission from %s (%s) regarding %s',
      body.name.trim(),
      body.email.trim(),
      body.competency,
    )

    return Response.json({ success: true })
  } catch {
    return Response.json(
      { success: false, errors: [{ field: 'server', message: 'Nieprawidłowe dane żądania' }] },
      { status: 400 }
    )
  }
}
