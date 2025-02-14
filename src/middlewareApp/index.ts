import onBoardingRedirectMiddleware from './onBoardingRedirectMiddleware'
import privateRoutesMiddleware from './privateRoutesMiddleware'
import publicRoutesMiddleware from './publicRoutesMiddleware'
import googleVerifyRoutesMiddleware from './verifyGoogleMiddleware'

export const middlewares = {
  googleVerify: googleVerifyRoutesMiddleware,
  onBoarding: onBoardingRedirectMiddleware,
  private: privateRoutesMiddleware,
  public: publicRoutesMiddleware,
}

export const getCurrentMiddleware = (middleware: string | null) => {
  return middlewares[middleware as keyof typeof middlewares] ?? null
}
