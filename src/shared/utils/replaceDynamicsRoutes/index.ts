export const replaceDynamicParams = (
  route: string,
  params: Record<string, string | number>
): string => {
  return route.replace(/\$(\w+)\$/g, (_, key) => {
    if (key in params) {
      return String(params[key])
    }

    return `$${key}$`
  })
}
