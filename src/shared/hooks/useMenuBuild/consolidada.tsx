import { clientRoutes } from '@/routes/clientRoutes'
import { DropDown } from '@/ui/molecules'
import { BuildOptionProps } from './types'

const { consolidada } = clientRoutes
export const buildConsolidadaOption = ({
  t,
  handleClick,
  textClass,
}: BuildOptionProps) => ({
  label: (
    <DropDown.Content
      text={t('option.consolidada')}
      textClassName={textClass(consolidada.path)}
      nameIcon='Home'
      iconClassName='w-10 h-10'
    />
  ),
  onClick: () => handleClick(consolidada.path),
  ...consolidada,
})
