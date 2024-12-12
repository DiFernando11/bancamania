'use client'
import { logoutService } from '@/application/adapters/htpp'
import { SendServiceTypes } from '@/shared'
import { useSendService } from '../../generics'

export const useLogout = (): SendServiceTypes<unknown, unknown> => {
  const queryResult = useSendService(async () => logoutService())

  return {
    handleActionService: queryResult.mutate,
    isLoading: queryResult.isPending,
    isError: queryResult.isError,
    isSuccess: queryResult.isSuccess,
  }
}
