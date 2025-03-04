import { clientRoutes } from '@/routes/clientRoutes'
import { RouteConfig, Routes } from './types'

export const findRouteByPath = (pathname: string): RouteConfig | null => {
  const routes: Routes = clientRoutes

  for (const key in routes) {
    const routePath = routes[key].path
    const regexPattern = routePath.replace(/:[a-zA-Z0-9_]+/g, '([^/]+)')
    const regex = new RegExp(`^${regexPattern}$`)

    const match = pathname.match(regex)
    if (match) {
      return routes[key]
    }
  }

  return null
}
