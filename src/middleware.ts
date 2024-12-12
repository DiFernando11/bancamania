import { NextRequest, NextResponse, URLPattern } from 'next/server'
import { stackMiddleware } from './middlewareApp'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  for (const { middleware: mwFunction, matcher } of stackMiddleware) {
    for (const pattern of matcher) {
      const urlPattern = new URLPattern({ pathname: pattern })
      if (urlPattern.test({ pathname })) {
        const response = mwFunction(request)
        if (response) {
          return response
        }
      }
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/home', '/login/:path*', '/register/:path*'],
}
