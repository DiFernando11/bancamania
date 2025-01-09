import { NextRequest, NextResponse } from 'next/server'

const handleVerifyGoogleMiddlewareRoute = (request: NextRequest) => {
  const token = request.cookies.get('next-auth.session-token')
  const tokenId = request.cookies.get('token-session-id')
  if (tokenId) {
    return NextResponse.redirect(new URL('/', request.url))
  }
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export default handleVerifyGoogleMiddlewareRoute
