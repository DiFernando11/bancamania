import { NextRequest, NextResponse } from 'next/server'
import { clientRoutes } from '@/routes/clientRoutes'

const onBoardingRedirectMiddleware = (request: NextRequest) => {
  const step = request.cookies.get('onbording-step')?.value
  const token = request.cookies.get('token-session-id')
  const currentUrl = new URL(request.url)
  if (!step) {
    return NextResponse.redirect(
      new URL(
        token ? clientRoutes.consolidada.path : clientRoutes.login.path,
        request.url
      )
    )
  }

  const redirectUrl = new URL(clientRoutes.onBoarding.path, request.url)
  redirectUrl.searchParams.set('step', step)

  if (
    currentUrl.pathname === clientRoutes.onBoarding.path &&
    currentUrl.searchParams.get('step') === step
  ) {
    return null // ⚠️ Devolver null en lugar de NextResponse.next()
  }

  return NextResponse.next()
}
export default onBoardingRedirectMiddleware
