'use client'

import { createCreditService } from '@/application/adapters/htpp'
import { CreateCardCreditRequest, SendServiceTypes } from '@/shared'
import { useSendService } from '../../generics'

export const useCreateCredit = (): SendServiceTypes<
  unknown,
  CreateCardCreditRequest
> => {
  const queryResult = useSendService<unknown, CreateCardCreditRequest>(
    async ({ marca }) => createCreditService({ marca })
  )

  return {
    handleActionService: queryResult.mutate,
    isError: queryResult.isError,
    isLoading: queryResult.isPending,
    isSuccess: queryResult.isSuccess,
  }
}
