export type RouteConfig = {
  layout: string
  middleware: string | null
  path: string
  code: string
  lineageCode?: string | null
}

export type Routes = Record<string, RouteConfig>
