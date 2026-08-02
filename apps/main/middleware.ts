import createMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'
import { routing } from '@/i18n/routing'

export const runtime = 'edge'

const intlMiddleware = createMiddleware(routing)

const guardianHostnames = new Set([
  'guardian.mulagroup.eu',
])

const guardianAppLoginUrl = 'https://app.guardian.mulagroup.eu/login'

function proxyMiddleware(request: NextRequest) {
  const host = request.headers.get('host')?.toLowerCase().split(':')[0] ?? ''
  const { pathname } = request.nextUrl

  if (!guardianHostnames.has(host)) {
    return null
  }

  if (pathname === '/login' || pathname === '/app') {
    return NextResponse.redirect(new URL(guardianAppLoginUrl))
  }

  return NextResponse.next()
}

export default function middleware(request: NextRequest) {
  const proxyResult = proxyMiddleware(request)
  if (proxyResult) return proxyResult

  return intlMiddleware(request)
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|images|guardian|polityka-prywatnosci|audyt-nis2|.*\\.svg|.*\\.png).*)',
  ],
}
