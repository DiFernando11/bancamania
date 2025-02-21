import { clientRoutes } from '@/routes/clientRoutes'
import { DropDown } from '@/ui/molecules'
import { BuildOptionProps } from './types'

const { cuentas } = clientRoutes
export const buildCuentasOption = ({
  t,
  handleClick,
  textClass,
}: BuildOptionProps) => ({
  label: (
    <DropDown.Content
      text={t('option.misCuentas')}
      nameIcon='Account'
      textClassName={textClass(cuentas.path, false)}
      iconClassName='w-10 h-10'
    />
  ),
  ...cuentas,
  children: [
    {
      label: (
        <DropDown.Content
          text={t('option.cuentas')}
          textClassName={textClass(cuentas.path)}
        />
      ),
      onClick: () => handleClick(cuentas.path),
      ...cuentas,
    },
  ],
})
