import { betterFetch } from '@better-fetch/fetch'
import { type NextRequest, NextResponse } from 'next/server'

import type { auth } from '@/lib/auth'

type Session = typeof auth.$Infer.Session

export default async function authMiddleware(request: NextRequest) {
  const { data: session } = await betterFetch<Session>(
    '/api/auth/get-session',
    {
      baseURL: process.env.BETTER_AUTH_URL,
      headers: {
        // get the cookie from the request
        cookie: request.headers.get('cookie') || '',
      },
    },
  )

  const pathName = request.nextUrl.pathname
  const isOnPublicPages = pathName.startsWith('/auth')
  const isOnWebhooks = pathName.startsWith('/api/webhooks')
  const isOnPublicAPIRoutes = pathName.startsWith('/api/auth')
  const isOnAPIRoutes = pathName.startsWith('/api')
  const isOnPrivatePages = !isOnPublicPages

  if (isOnWebhooks || isOnPublicAPIRoutes) {
    return NextResponse.next()
  }

  if (isOnPublicPages && session) {
    return NextResponse.redirect(
      new URL('/dashboard', process.env.BETTER_AUTH_URL).toString(),
    )
  }

  if (isOnAPIRoutes && !session) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      {
        status: 401,
      },
    )
  }

  if (isOnPrivatePages && !session) {
    return NextResponse.redirect(
      new URL('/auth/sign-in', process.env.BETTER_AUTH_URL).toString(),
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
