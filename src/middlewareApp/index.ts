import { clientRoutes } from '@/routes/clientRoutes'
import privateRoutesMiddleware from './privateRoutesMiddleware'
import publicRoutesMiddleware from './publicRoutesMiddleware'
import googleVerifyRoutesMiddleware from './verifyGoogleMiddleware'

export const stackMiddleware = [
  {
    matcher: [clientRoutes.verifyGoogle],
    middleware: googleVerifyRoutesMiddleware,
  },
  {
    matcher: [clientRoutes.home],
    middleware: privateRoutesMiddleware,
  },
  {
    matcher: [
      `${clientRoutes.login}/:path*`,
      `${clientRoutes.register}/:path*`,
    ],
    middleware: publicRoutesMiddleware,
  },
]
