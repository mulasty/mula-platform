import createMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'
import { routing } from '@/i18n/routing'

export const runtime = 'edge'

const intlMiddleware = createMiddleware(routing)
const guardianAppLoginUrl = 'https://app.guardian.mulagroup.eu/login'

export default function middleware(request: NextRequest) {
  const host = request.headers.get('host')?.toLowerCase().split(':')[0] ?? ''
  const { pathname } = request.nextUrl

  if (host === 'guardian.mulagroup.eu') {
    if (pathname === '/login' || pathname === '/app') {
      return NextResponse.redirect(guardianAppLoginUrl)
    }
    if (pathname === '/') {
      return NextResponse.rewrite(new URL(`/${routing.defaultLocale}`, request.url))
    }
    return NextResponse.next()
  }

  return intlMiddleware(request)
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|images|guardian|polityka-prywatnosci|audyt-nis2|.*\\.svg|.*\\.png).*)',
  ],
}
