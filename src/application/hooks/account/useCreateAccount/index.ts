'use client'
import { createAccountService } from '@/application/adapters/htpp'
import { SendServiceTypes } from '@/shared'
import { CreateAccountResponse } from '@/shared/types/account'
import { useSendService } from '../../generics'

export const useCreateAccount = (): SendServiceTypes<
  CreateAccountResponse,
  unknown
> => {
  const queryResult = useSendService<CreateAccountResponse, unknown>(async () =>
    createAccountService()
  )

  return {
    handleActionService: queryResult.mutate,
    isError: queryResult.isError,
    isLoading: queryResult.isPending,
    isSuccess: queryResult.isSuccess,
  }
}
