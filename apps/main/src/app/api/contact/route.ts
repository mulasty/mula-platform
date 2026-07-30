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
  }

  if (!body.email || typeof body.email !== 'string' || !body.email.trim()) {
    errors.push({ field: 'email', message: 'Adres email jest wymagany' })
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email.trim())) {
    errors.push({ field: 'email', message: 'Podaj prawidłowy adres email' })
  }

  if (!body.competency || typeof body.competency !== 'string' || !body.competency.trim()) {
    errors.push({ field: 'competency', message: 'Wybierz obszar' })
  } else if (!(VALID_COMPETENCIES as readonly string[]).includes(body.competency)) {
    errors.push({ field: 'competency', message: 'Nieprawidłowy obszar' })
  }

  if (!body.message || typeof body.message !== 'string' || !body.message.trim()) {
    errors.push({ field: 'message', message: 'Wiadomość jest wymagana' })
  } else if (body.message.trim().length < 10) {
    errors.push({ field: 'message', message: 'Wiadomość musi mieć co najmniej 10 znaków' })
  }

  return errors
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody & Record<string, unknown>

    // Honeypot anti-spam check — bots fill hidden fields
    if (body.website && typeof body.website === 'string' && body.website.length > 0) {
      // Silently accept to not reveal the honeypot
      return Response.json({ success: true })
    }

    const errors = validate(body)

    if (errors.length > 0) {
      return Response.json({ success: false, errors }, { status: 400 })
    }

    // TODO: Integrate with email service (e.g. Resend, SendGrid, or SMTP)
    // TODO: Add rate limiting (e.g. 5 submissions per IP per hour using Vercel KV or Upstash)

    console.log('[contact] Nowa wiadomość:', {
      name: body.name.trim(),
      email: body.email.trim(),
      company: body.company?.trim() || '(nie podano)',
      competency: body.competency,
      message: body.message.trim(),
      timestamp: new Date().toISOString(),
    })

    return Response.json({ success: true })
  } catch {
    return Response.json(
      { success: false, errors: [{ field: 'server', message: 'Nieprawidłowe dane żądania' }] },
      { status: 400 }
    )
  }
}
