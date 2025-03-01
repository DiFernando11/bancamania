import { clientRoutes } from '@/routes/clientRoutes'
import { DropDown } from '@/ui/molecules'
import { BuildOptionProps } from './types'

const { account } = clientRoutes
export const buildCuentasOption = ({
  t,
  handleClick,
  textClass,
}: BuildOptionProps) => ({
  label: (
    <DropDown.Content
      text={t('option.misCuentas')}
      nameIcon='Account'
      textClassName={textClass(account.path, false)}
      iconClassName='w-10 h-10'
    />
  ),
  onClick: () => handleClick(account.path),
  ...account,
})
