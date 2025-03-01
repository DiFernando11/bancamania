import { codesEnabled } from '@/routes/access'
import { MenuOption } from '@/shared/types'

export const buildContextMenu = (
  options: MenuOption[],
  currentPath: string | null,
  t?: unknown
): MenuOption[] => {
  return options
    .filter(option => {
      if (option.alwaysShow) return true

      return (
        option.code &&
        codesEnabled[option.code as keyof typeof codesEnabled] &&
        (!option.lineageCode ||
          codesEnabled[option.lineageCode as keyof typeof codesEnabled])
      )
    })
    .map(option => {
      const children = option.children
        ? buildContextMenu(option.children, currentPath)
        : []

      return {
        isActive: option?.path === currentPath && !option?.children?.length,
        isDefaultOpen: option.isDefaultOpen ?? false,
        label: option.label,
        onClick: option?.onClick,
        path: option.path,
        ...(children.length > 0 ? { children } : {}),
      }
    })
}
