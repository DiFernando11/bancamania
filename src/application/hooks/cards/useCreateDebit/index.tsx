'use client'

import { createDebitService } from '@/application/adapters/htpp'
import { SendServiceTypes } from '@/shared'
import { useSendService } from '../../generics'

export const useCreateDebit = (): SendServiceTypes<unknown, unknown> => {
  const queryResult = useSendService<unknown, unknown>(async () =>
    createDebitService()
  )

  return {
    handleActionService: queryResult.mutate,
    isError: queryResult.isError,
    isLoading: queryResult.isPending,
    isSuccess: queryResult.isSuccess,
  }
}
