import { NextRequest, NextResponse } from 'next/server'

const guardianHostnames = new Set([
  'guardian.mulagroup.eu',
])

const guardianAppLoginUrl = 'https://app.guardian.mulagroup.eu/login'

export function proxy(request: NextRequest) {
  const host = request.headers.get('host')?.toLowerCase().split(':')[0] ?? ''
  const { pathname } = request.nextUrl

  if (!guardianHostnames.has(host)) {
    return NextResponse.next()
  }

  if (pathname === '/login' || pathname === '/app') {
    return NextResponse.redirect(new URL(guardianAppLoginUrl))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api/cron/health).*)'],
}
