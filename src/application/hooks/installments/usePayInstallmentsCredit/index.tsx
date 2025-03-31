'use client'
import { payInstallmentsCredit } from '@/application/adapters/htpp'
import {
  PayInstallmentCreditRequest,
  PayInstallmentCreditResponse,
  SendServiceTypes,
} from '@/shared'
import { useSendService } from '../../generics'

export const usePayInstallmentsCredit = (): SendServiceTypes<
  PayInstallmentCreditResponse,
  PayInstallmentCreditRequest
> => {
  const queryResult = useSendService<
    PayInstallmentCreditResponse,
    PayInstallmentCreditRequest
  >(async ({ creditID, amount }) => payInstallmentsCredit({ amount, creditID }))

  return {
    error: queryResult.error,
    handleActionService: queryResult.mutate,
    isError: queryResult.isError,
    isLoading: queryResult.isPending,
    isSuccess: queryResult.isSuccess,
  }
}
