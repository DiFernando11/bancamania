'use client'

import { createCreditService } from '@/application/adapters/htpp'
import {
  CreateCardCreditRequest,
  CreateCardCreditResponse,
  SendServiceTypes,
} from '@/shared'
import { useSendService } from '../../generics'

export const useCreateCredit = (): SendServiceTypes<
  CreateCardCreditResponse,
  CreateCardCreditRequest
> => {
  const queryResult = useSendService<
    CreateCardCreditResponse,
    CreateCardCreditRequest
  >(async ({ marca }) => createCreditService({ marca }))

  return {
    error: queryResult.error,
    handleActionService: queryResult.mutate,
    isError: queryResult.isError,
    isLoading: queryResult.isPending,
    isSuccess: queryResult.isSuccess,
  }
}
