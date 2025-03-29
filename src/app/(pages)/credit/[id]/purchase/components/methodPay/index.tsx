import React from 'react'
import { useFormContext } from 'react-hook-form'
import { useI18Text } from '@/application/hooks'
import { formatMoney } from '@/shared/utils'
import { ButtonGroup, FormField } from '@/ui/molecules'
import { ButtonGroupProps } from '@/ui/molecules/buttonGroup/types'
import {
  FORM_PAY_CREDIT_NAME,
  FormPayCreditI,
  FormPayCreditProps,
} from '../formPayCredit/types'

const MethodPay = ({
  minimumPayment,
  totalAmount,
  totalPaymentAtOnce,
}: FormPayCreditProps) => {
  const t = useI18Text('tarjetas')
  const { setValue } = useFormContext()
  const options = [
    {
      id: minimumPayment ?? 0,
      label: t('payMinum', {
        balance: formatMoney({ showSymbol: true, value: minimumPayment }),
      }),
    },
    {
      id: totalAmount ?? 0,
      label: t('payCutOff', {
        balance: formatMoney({ showSymbol: true, value: totalAmount }),
      }),
    },
    {
      id: totalPaymentAtOnce ?? 0,
      label: t('payCash', {
        balance: formatMoney({ showSymbol: true, value: totalPaymentAtOnce }),
      }),
    },
  ]

  return (
    <FormField<FormPayCreditI, ButtonGroupProps>
      name={FORM_PAY_CREDIT_NAME.methodPay}
      isRequired
      component={ButtonGroup}
      options={options}
      classNameButton='!min-w-36'
      onChange={e =>
        setValue(
          FORM_PAY_CREDIT_NAME.totalQuota,
          Math.round(parseFloat(e as string) * 100),
          { shouldValidate: true }
        )
      }
    />
  )
}

export default MethodPay
