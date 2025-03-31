import React from 'react'
import { useFormContext } from 'react-hook-form'
import { useI18Text } from '@/application/hooks'
import { formatMoney } from '@/shared/utils'
import { Box, Text } from '@/ui/atoms'
import { ButtonGroup, FormField } from '@/ui/molecules'
import { ButtonGroupProps } from '@/ui/molecules/buttonGroup/types'
import { AlertInfoAnimation } from '@/ui/organisms'
import { MethodPayProps } from './types'
import { FORM_PAY_CREDIT_NAME, FormPayCreditI } from '../formPayCredit/types'

const MethodPay = ({
  minimumPayment,
  totalAmount,
  totalPaymentAtOnce,
}: MethodPayProps) => {
  const t = useI18Text('tarjetas')
  const { setValue, watch } = useFormContext()
  const methodPay = watch(FORM_PAY_CREDIT_NAME.methodPay)

  const cashOption = `cash-${totalPaymentAtOnce ?? 0}`

  const options = [
    {
      id: `min-${minimumPayment ?? 0}`,
      label: t('payMinum', {
        balance: formatMoney({ showSymbol: true, value: minimumPayment }),
      }),
      value: minimumPayment ?? 0,
    },
    {
      id: `cut-${totalAmount ?? 0}`,
      label: t('payCutOff', {
        balance: formatMoney({ showSymbol: true, value: totalAmount }),
      }),
      value: totalAmount ?? 0,
    },
    {
      id: cashOption,
      label: t('payCash', {
        balance: formatMoney({ showSymbol: true, value: totalPaymentAtOnce }),
      }),
      value: totalPaymentAtOnce ?? 0,
    },
  ]

  return (
    <Box className='space-y-4'>
      <FormField<FormPayCreditI, ButtonGroupProps>
        name={FORM_PAY_CREDIT_NAME.methodPay}
        isRequired
        component={ButtonGroup}
        options={options}
        classNameButton='!min-w-36'
        onChange={e => {
          const match = String(e).match(/(\d+(\.\d+)?)/)
          const numericValue = match ? parseFloat(match[0]) : 0
          setValue(
            FORM_PAY_CREDIT_NAME.totalQuota,
            Math.round(numericValue * 100),
            { shouldValidate: true }
          )
        }}
      />
      <AlertInfoAnimation
        isVisible={methodPay === cashOption}
        message='  Pagarás todas tus cuotas pendientes con el banco, incluyendo tus
          compras diferidas a plazos.'
      />
    </Box>
  )
}

export default MethodPay
