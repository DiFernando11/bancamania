import { NextRequest, NextResponse } from 'next/server'
import { clientRoutes } from '@/routes/clientRoutes'
import { findRouteByPath } from '@/shared/utils'
import { getCurrentMiddleware } from './middlewareApp'
import onBoardingStepMiddleware from './middlewareApp/onBoardingStepMiddleware'
import { codesEnabled } from './routes/access'

export function middleware(request: NextRequest) {
  const onBoardingResponse = onBoardingStepMiddleware(request)
  if (onBoardingResponse) {
    return onBoardingResponse
  }

  const pathname = request.nextUrl.pathname
  const currentPath = findRouteByPath(pathname)

  const { code, lineageCode } = currentPath ?? {}

  const isCodeEnabled = codesEnabled[code as string] ?? false
  const isLineageEnabled = lineageCode
    ? (codesEnabled[lineageCode] ?? false)
    : true

  if (!currentPath || !isCodeEnabled || !isLineageEnabled) {
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
