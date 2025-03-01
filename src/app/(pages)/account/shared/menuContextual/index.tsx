import { clientRoutes } from '@/routes/clientRoutes'
import { MenuContextualProps, MenuOption } from '@/shared'
import { DropDown } from '@/ui/molecules'

const { movementsAccount } = clientRoutes

export const menuContextual = ({
  t,
  route,
}: MenuContextualProps): MenuOption[] => {
  return [
    {
      alwaysShow: true,
      label: <DropDown.Content text={t('movements')} />,
      onClick: () => {
        route.push(movementsAccount.path)
      },
    },
  ]
}
