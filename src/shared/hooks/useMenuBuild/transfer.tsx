import { clientRoutes } from '@/routes/clientRoutes'
import { DropDown } from '@/ui/molecules'
import { BuildOptionProps } from './types'

const { transfer } = clientRoutes
export const buildTransferOption = ({
  t,
  handleClick,
  textClass,
}: BuildOptionProps) => ({
  label: (
    <DropDown.Content
      text={t('option.transfer')}
      nameIcon='Transfers'
      textClassName={textClass(transfer.path, false)}
      iconClassName='w-10 h-10'
    />
  ),
  onClick: () => handleClick(transfer.path),
  ...transfer,
})
