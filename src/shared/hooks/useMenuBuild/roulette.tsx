import { clientRoutes } from '@/routes/clientRoutes'
import { DropDown } from '@/ui/molecules'
import { BuildOptionProps } from './types'

const { roulette } = clientRoutes
export const buildRouletteOption = ({
  t,
  handleClick,
  textClass,
}: BuildOptionProps) => ({
  label: (
    <DropDown.Content
      text={t('option.roulette')}
      nameIcon='Roulette'
      textClassName={textClass(roulette.path, false)}
      iconClassName='w-10 h-10'
    />
  ),
  onClick: () => handleClick(roulette.path),
  ...roulette,
})
