'use client'
import { validTokenService } from '@/application/adapters/htpp'
import { SendServiceTypes } from '@/shared'
import { useSendService } from '../../generics'

export const useValidToken = (): SendServiceTypes<unknown, unknown> => {
  const queryResult = useSendService(async () => validTokenService())

  return {
    handleActionService: queryResult.mutate,
    isError: queryResult.isError,
    isLoading: queryResult.isPending,
    isSuccess: queryResult.isSuccess,
  }
}
