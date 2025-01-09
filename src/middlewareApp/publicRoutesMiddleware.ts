import { NextRequest, NextResponse } from 'next/server'
import { clientRoutes } from '@/routes/clientRoutes'

const handlePublicMiddlewareRoute = (request: NextRequest) => {
  const token = request.cookies.get('token-session-id')

  if (token) {
    return NextResponse.redirect(
      new URL(clientRoutes.consolidada.path, request.url)
    )
  }

  return NextResponse.next()
}

export default handlePublicMiddlewareRoute
