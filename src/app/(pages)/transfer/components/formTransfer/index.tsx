'use client'
import React, { useMemo } from 'react'
import { z } from 'zod'
import { useI18Text } from '@/application/hooks'
import FormState from '@/ui/atoms/formState'
import { FormTransferI } from './types'
import ValidateAccount from '../validateAccount'

const FormTransfer = ({ formID }: { formID: string }) => {
  const t = useI18Text('transfer')

  const formTransferSchema = useMemo(
    () =>
      z.object({
        accountId: z
          .string()
          .min(1, t('errors.account_required'))
          .min(10, t('errors.account_exact_length'))
          .max(10, t('errors.account_exact_length'))
          .regex(/^\d+$/, t('errors.account_numeric')),
        hasValidateAccount: z.literal(true, {
          errorMap: () => ({ message: t('errors.account_must_validate') }),
        }),
        saveAccount: z.boolean(),
      }),
    [t]
  )

  const onSubmit = (val: FormTransferI) => {
    console.log(val)
  }

  return (
    <FormState
      schema={formTransferSchema}
      id={formID}
      defaultValues={{
        accountId: '',
        hasValidateAccount: false,
        saveAccount: false,
      }}
      onSubmit={onSubmit}
    >
      <ValidateAccount />
    </FormState>
  )
}

export default FormTransfer
