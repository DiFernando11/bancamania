import { routesAuth } from './authentication'
import { routesHome } from './home'

export const clientRoutes = {
  ...routesAuth,
  ...routesHome,
}
