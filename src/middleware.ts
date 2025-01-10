import { NextRequest, NextResponse } from 'next/server'
import { clientRoutes } from '@/routes/clientRoutes'
import { findRouteByPath } from '@/shared/utils'
import { getCurrentMiddleware } from './middlewareApp'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const currentPath = findRouteByPath(pathname)

  if (!currentPath || !currentPath?.enabled) {
    return NextResponse.redirect(
      new URL(clientRoutes.notFound.path, request.url)
    )
  }

  const middleware = getCurrentMiddleware(currentPath?.middleware)

  if (!middleware) return NextResponse.next()

  return middleware(request)
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|api|mockServiceWorker|theme).*)'],
}
