import { clientRoutes } from '@/routes/clientRoutes'
import { DropDown } from '@/ui/molecules'
import { BuildOptionProps } from './types'

const { receipts } = clientRoutes
export const buildReceipts = ({
  t,
  handleClick,
  textClass,
}: BuildOptionProps) => ({
  label: (
    <DropDown.Content
      nameIcon='Receipt'
      text={t('option.receipts')}
      textClassName={textClass(receipts.path, false)}
      iconClassName='w-10 h-10'
    />
  ),
  onClick: () => handleClick(receipts.path),
  ...receipts,
})
