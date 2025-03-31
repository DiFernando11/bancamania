'use client'
import React from 'react'
import { z } from 'zod'
import {
  useI18Text,
  usePayInstallmentsCredit,
  useRemoveQueries,
} from '@/application/hooks'
import { clientRoutes } from '@/routes/clientRoutes'
import { useGlobalLoading, useNavigation } from '@/shared/hooks'
import { replaceDynamicsRoutes } from '@/shared/utils'
import {
  GET_ACCOUNT,
  GET_INSTALLMENT,
  GET_MOVEMENTS,
  GET_PREVIEW_RECEIPT,
} from '@/shared/utils/constantsQuery'
import { FormState } from '@/ui/atoms'
import { AlertErrorService } from '@/ui/organisms'
import { FormPayCreditI, FormPayCreditProps } from './types'
import AmountPay from '../amountPay'
import MethodPay from '../methodPay'

const FormPayCredit = ({
  minimumPayment,
  totalAmount,
  totalPaymentAtOnce,
  id,
}: FormPayCreditProps) => {
  const t = useI18Text('tarjetas')
  const minimum = parseFloat(minimumPayment ?? '0')
  const totalPayAtOnce = parseFloat(totalPaymentAtOnce ?? '0')
  const { invalidate } = useRemoveQueries()
  const { handleActionService, isLoading, isError, error } =
    usePayInstallmentsCredit()
  useGlobalLoading([isLoading])
  const router = useNavigation()

  const formPayCreditSchema = z.object({
    methodPay: z.string(),
    totalQuota: z
      .number()
      .transform(val => val / 100)
      .refine(val => val >= minimum, {
        message: t('amountMinumRequired', {
          balance: minimum.toFixed(2),
        }),
      })
      .refine(val => val <= totalPayAtOnce, {
        message: t('amountMaxRequired', {
          max: totalPayAtOnce.toFixed(2),
        }),
      }),
  })

  const handleSubmit = (data: FormPayCreditI) => {
    handleActionService(
      { amount: data.totalQuota, creditID: id },
      {
        onSuccess: ({ receiptID }) => {
          invalidate({ queryKey: [GET_INSTALLMENT, id] })
          invalidate({ queryKey: [GET_ACCOUNT] })
          invalidate({ queryKey: [GET_MOVEMENTS] })
          invalidate({ queryKey: [GET_PREVIEW_RECEIPT] })
          router.push(
            replaceDynamicsRoutes(clientRoutes.receiptsID.path, {
              id: receiptID,
            })
          )
        },
      }
    )
  }

  return (
    <FormState
      schema={formPayCreditSchema}
      id='FORM_PAY_CREDIT'
      onSubmit={handleSubmit}
      defaultValues={{ methodPay: '', totalQuota: 0 }}
    >
      <AmountPay />
      <AlertErrorService isError={isError} error={error} />
      <MethodPay
        minimumPayment={minimumPayment}
        totalAmount={totalAmount}
        totalPaymentAtOnce={totalPaymentAtOnce}
      />
    </FormState>
  )
}

export default FormPayCredit
