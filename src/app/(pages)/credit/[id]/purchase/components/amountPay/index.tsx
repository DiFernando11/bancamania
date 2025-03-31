'use client'
import classNames from 'classnames'
import React from 'react'
import { useFormContext } from 'react-hook-form'
import { useI18Text } from '@/application/hooks'
import { FormFieldProps } from '@/shared'
import { FormField, InputMoney } from '@/ui/molecules'
import { FORM_PAY_CREDIT_NAME, FormPayCreditI } from '../formPayCredit/types'

const AmountPay = () => {
  const t = useI18Text('tarjetas')
  const { setValue } = useFormContext()

  return (
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
      onChange={() => setValue(FORM_PAY_CREDIT_NAME.methodPay, '')}
      isRequired
    />
  )
}

export default AmountPay
