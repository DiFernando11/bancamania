import { codesEnabled } from '@/routes/access'
import { MenuOption } from '@/shared/types'

export const buildMenu = (
  options: MenuOption[],
  currentPath: string | null
): MenuOption[] => {
  return options
    .filter(
      option =>
        option.code &&
        codesEnabled[option.code as keyof typeof codesEnabled] &&
        (!option.lineageCode ||
          codesEnabled[option.lineageCode as keyof typeof codesEnabled])
    )
    .map(option => {
      const children = option.children
        ? buildMenu(option.children, currentPath)
        : []

      const isChildrenActive = option?.children?.some(child => {
        return child.path === currentPath
      })

      return {
        isActive: option?.path === currentPath && !option?.children?.length,
        isChildrenActive,
        label: option.label,
        onClick: option?.onClick,
        path: option.path,
        ...(children.length > 0 ? { children } : {}),
      }
    })
}
