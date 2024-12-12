import { clientRoutes } from '@/routes/clientRoutes'
import privateRoutesMiddleware from './privateRoutesMiddleware'
import publicRoutesMiddleware from './publicRoutesMiddleware'
import googleVerifyRoutesMiddleware from './verifyGoogleMiddleware'

export const stackMiddleware = [
  {
    middleware: googleVerifyRoutesMiddleware,
    matcher: [clientRoutes.verifyGoogle],
  },
  {
    middleware: privateRoutesMiddleware,
    matcher: [clientRoutes.home],
  },
  {
    middleware: publicRoutesMiddleware,
    matcher: [
      `${clientRoutes.login}/:path*`,
      `${clientRoutes.register}/:path*`,
    ],
  },
]
