'use client'
import React, { useMemo } from 'react'
import { z } from 'zod'
import {
  useGetDataByKey,
  useI18Text,
  useLazyGetDataByKey,
  useVerifyAccount,
} from '@/application/hooks'
import { VERIFY_ACCOUNT } from '@/shared/utils/constantsQuery'
import FormState from '@/ui/atoms/formState'
import { FormTransferProps } from './types'
import { DataTransfer } from '../../types'
import ValidateAccount from '../validateAccount'

const FormTransfer = ({
  formID,
  nextStep,
  updateData,
}: FormTransferProps<DataTransfer>) => {
  const t = useI18Text('transfer')
  const getValue = useLazyGetDataByKey()

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

  const onSubmit = () => {
    const data = getValue([VERIFY_ACCOUNT])
    if (data) {
      updateData(data)
    }
    nextStep()
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
