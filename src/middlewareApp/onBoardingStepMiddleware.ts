import { NextRequest, NextResponse } from 'next/server'
import { clientRoutes } from '@/routes/clientRoutes'

const onBoardingStepMiddleware = (request: NextRequest) => {
  const step = request.cookies.get('onbording-step')?.value
  const currentUrl = new URL(request.url)

  if (!step) return null

  const redirectUrl = new URL(clientRoutes.onBoarding.path, request.url)
  redirectUrl.searchParams.set('step', step)

  if (
    currentUrl.pathname === clientRoutes.onBoarding.path &&
    currentUrl.searchParams.get('step') === step
  )
    return null

  return NextResponse.redirect(redirectUrl)
}
export default onBoardingStepMiddleware
