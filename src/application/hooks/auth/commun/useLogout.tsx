'use client'
import { logoutService } from '@/application/adapters/htpp'
import { SendServiceTypes } from '@/shared'
import { useSendService } from '../../generics'

export const useLogout = (): SendServiceTypes<unknown, unknown> => {
  const queryResult = useSendService<unknown, unknown>(async () =>
    logoutService()
  )

  return {
    handleActionService: queryResult.mutate,
    isError: queryResult.isError,
    isLoading: queryResult.isPending,
    isSuccess: queryResult.isSuccess,
  }
}
