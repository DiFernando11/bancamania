import { clientRoutes } from '@/routes/clientRoutes'
import { DropDown } from '@/ui/molecules'
import { BuildOptionProps } from './types'

const { loans } = clientRoutes
export const buildLoansOption = ({
  t,
  handleClick,
  textClass,
}: BuildOptionProps) => ({
  label: (
    <DropDown.Content
      text={t('option.loans')}
      nameIcon='Loans'
      textClassName={textClass(loans.path, false)}
      iconClassName='w-10 h-10'
    />
  ),
  onClick: () => handleClick(loans.path),
  ...loans,
})
