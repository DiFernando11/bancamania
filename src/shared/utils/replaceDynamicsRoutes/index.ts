export function replaceDynamicsRoutes<T extends Record<string, string>>(
  route: string,
  params: T
): string {
  return route.replace(/:([a-zA-Z0-9_]+)/g, (_, key) => {
    if (!(key in params)) {
      throw new Error(`Falta el parámetro requerido: ${key}`)
    }

    return encodeURIComponent(params[key])
  })
}
