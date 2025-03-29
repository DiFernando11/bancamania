import classNames from 'classnames'
import React from 'react'
import { z } from 'zod'
import { useI18Text } from '@/application/hooks'
import { FormFieldProps } from '@/shared'
import { FormState } from '@/ui/atoms'
import { FormField, InputMoney } from '@/ui/molecules'
import {
  FORM_PAY_CREDIT_NAME,
  FormPayCreditI,
  FormPayCreditProps,
} from './types'
import MethodPay from '../methodPay'

const FormPayCredit = ({
  minimumPayment,
  totalAmount,
  totalPaymentAtOnce,
}: FormPayCreditProps) => {
  const t = useI18Text('tarjetas')
  const minimum = parseFloat(minimumPayment ?? '0')

  const formPayCreditSchema = z.object({
    methodPay: z.number(),
    totalQuota: z
      .number()
      .transform(val => val / 100)
      .refine(val => val >= minimum, {
        message: t('amountMinumRequired', {
          balance: minimum.toFixed(2),
        }),
      }),
  })

  return (
    <FormState
      schema={formPayCreditSchema}
      id='FORM_PAY_CREDIT'
      onSubmit={data => console.log('OnMount', data)}
      defaultValues={{ methodPay: 0, totalQuota: 0 }}
    >
      <FormField<FormPayCreditI>
        name={FORM_PAY_CREDIT_NAME.totalQuota}
        labelClass='justify-center'
        className={classNames(
          'w-full self-center !max-w-[16rem] !text-4xl text-center',
          'sm:!max-w-[20rem] sm:!text-5xl'
        )}
        classNameTextError='text-center'
        component={InputMoney as unknown as FormFieldProps}
        placeholder='0.00'
        label={t('payCardLabel')}
        maxLength={10}
        isRequired
      />
      <MethodPay
        minimumPayment={minimumPayment}
        totalAmount={totalAmount}
        totalPaymentAtOnce={totalPaymentAtOnce}
      />
    </FormState>
  )
}

export default FormPayCredit
