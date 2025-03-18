import { clientRoutes } from '@/routes/clientRoutes'
import { DropDown } from '@/ui/molecules'
import { BuildOptionProps } from './types'

const { store } = clientRoutes
export const buildStoreOption = ({
  t,
  handleClick,
  textClass,
}: BuildOptionProps) => ({
  label: (
    <DropDown.Content
      text={t('option.store')}
      textClassName={textClass(store.path)}
      nameIcon='Store'
      iconClassName='w-10 h-10'
    />
  ),
  onClick: () => handleClick(store.path),
  ...store,
})
