import { clientRoutes } from '@/routes/clientRoutes'
import { DropDown } from '@/ui/molecules'
import { BuildOptionProps } from './types'

const { tarjetas } = clientRoutes
export const buildTarjetasOption = ({
  t,
  handleClick,
  textClass,
}: BuildOptionProps) => ({
  label: (
    <DropDown.Content
      nameIcon='Tarjetas'
      text={t('option.misTarjetas')}
      textClassName={textClass(tarjetas.path, false)}
      iconClassName='w-10 h-10'
    />
  ),
  ...tarjetas,
  children: [
    {
      label: (
        <DropDown.Content
          text={t('option.tarjetas')}
          textClassName={textClass(tarjetas.path)}
        />
      ),
      onClick: () => handleClick(tarjetas.path),
      ...tarjetas,
    },
  ],
})
