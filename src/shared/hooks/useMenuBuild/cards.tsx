import { clientRoutes } from '@/routes/clientRoutes'
import { DropDown } from '@/ui/molecules'
import { BuildOptionProps } from './types'

const { debit, credit } = clientRoutes
export const buildTarjetasOption = ({
  t,
  handleClick,
  textClass,
}: BuildOptionProps) => ({
  ...debit,
  children: [
    {
      label: (
        <DropDown.Content
          text={t('option.debit')}
          textClassName={textClass(debit.path)}
        />
      ),
      onClick: () => handleClick(debit.path),
      ...debit,
    },
    {
      label: (
        <DropDown.Content
          text={t('option.credit')}
          textClassName={textClass(credit.path)}
        />
      ),
      onClick: () => handleClick(credit.path),
      ...credit,
    },
  ],
  label: (
    <DropDown.Content
      nameIcon='Card'
      text={t('option.misTarjetas')}
      iconClassName='w-10 h-10'
    />
  ),
})
