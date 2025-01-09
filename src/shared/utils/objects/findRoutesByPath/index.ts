import { clientRoutes } from '@/routes/clientRoutes'

type RouteConfig = {
  enabled: boolean
  layout: string
  middleware: string
  path: string
}

type Routes = Record<string, RouteConfig>

export const findRouteByPath = (pathname: string): RouteConfig | null => {
  const routes: Routes = clientRoutes

  for (const key in routes) {
    if (routes[key].path === pathname) {
      return routes[key]
    }
  }

  return null
}
