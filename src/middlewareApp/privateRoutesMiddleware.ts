import { NextRequest, NextResponse } from 'next/server'
import { clientRoutes } from '@/routes/clientRoutes'

const handlePrivateMiddlewareRoute = (request: NextRequest) => {
  const token = request.cookies.get('token-session-id')

  if (!token) {
    return NextResponse.redirect(new URL(clientRoutes.login.path, request.url))
  }

  return NextResponse.next()
}

export default handlePrivateMiddlewareRoute
