import { clientRoutes } from '@/routes/clientRoutes'

type RouteConfig = {
  layout: string
  middleware: string | null
  path: string
  code: string
  lineageCode?: string | null
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
