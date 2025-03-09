'use client'
import { verifyAccountService } from '@/application/adapters/htpp'
import {
  SendServiceTypes,
  VerifyAccountRequest,
  VerifyAccountResponse,
} from '@/shared'
import { VERIFY_ACCOUNT } from '@/shared/utils/constantsQuery'
import { useSendService } from '../../generics'

export const useVerifyAccount = (): SendServiceTypes<
  VerifyAccountResponse,
  VerifyAccountRequest
> => {
  const queryResult = useSendService<
    VerifyAccountResponse,
    VerifyAccountRequest
  >(async ({ accountId }) => verifyAccountService({ accountId }), {
    cacheKey: VERIFY_ACCOUNT,
  })

  return {
    data: queryResult.data,
    error: queryResult.error,
    handleActionService: queryResult.mutate,
    isError: queryResult.isError,
    isLoading: queryResult.isPending,
    isSuccess: queryResult.isSuccess,
    reset: queryResult.reset,
  }
}
