import createMiddleware from 'next-intl/middleware'
import { routing } from '@/i18n/routing'

export const runtime = 'edge'

export default createMiddleware(routing)

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|images|guardian|polityka-prywatnosci|audyt-nis2|.*\\.svg|.*\\.png).*)',
  ],
}
