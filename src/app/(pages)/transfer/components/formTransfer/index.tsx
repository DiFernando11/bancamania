'use client'
import React, { useMemo } from 'react'
import { z } from 'zod'
import {
  useCreateContact,
  useI18Text,
  useVerifyAccount,
} from '@/application/hooks'
import { VerifyAccountResponse } from '@/shared'
import FormState from '@/ui/atoms/formState'
import { FormTransferI, FormTransferProps } from './types'
import { DataTransfer } from '../../types'
import ValidateAccount from '../validateAccount'

const FormTransfer = ({
  formID,
  nextStep,
  updateData,
}: FormTransferProps<DataTransfer>) => {
  const t = useI18Text('transfer')
  const { getDataLazy, removeQuery } = useVerifyAccount()
  const { handleActionService } = useCreateContact()

  const formTransferSchema = useMemo(
    () =>
      z
        .object({
          accountId: z
            .string()
            .min(1, t('errors.account_required'))
            .min(10, t('errors.account_exact_length'))
            .max(10, t('errors.account_exact_length'))
            .regex(/^\d+$/, t('errors.account_numeric')),
          alias: z.string().optional(),
          hasValidateAccount: z.literal(true, {
            errorMap: () => ({ message: t('errors.account_must_validate') }),
          }),
          saveAccount: z.boolean(),
        })
        .superRefine((data, ctx) => {
          if (data.saveAccount && (!data.alias || data.alias.trim() === '')) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: t('errors.field_required'),
              path: ['alias'],
            })
          }
        }),
    [t]
  )

  const nextStepValidate = (data?: VerifyAccountResponse) => {
    if (data) {
      updateData(data)
    }
    nextStep()
  }

  const onSubmit = (val: FormTransferI) => {
    const data = getDataLazy({ accountId: val.accountId })
    if (val.saveAccount) {
      return handleActionService(
        { accountId: data?.id as string, alias: val.alias?.trim() as string },
        {
          onSettled: () => {
            nextStepValidate(data)
          },
          onSuccess: () => {
            removeQuery({ accountId: val.accountId })
          },
        }
      )
    }
    nextStepValidate(data)
  }

  return (
    <FormState
      schema={formTransferSchema}
      id={formID}
      defaultValues={{
        accountId: '',
        alias: undefined,
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
