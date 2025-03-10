'use client'
import { verifyAccountService } from '@/application/adapters/htpp'
import {
  SendServiceTypes,
  VerifyAccountRequest,
  VerifyAccountResponse,
} from '@/shared'
import { VERIFY_ACCOUNT } from '@/shared/utils/constantsQuery'
import { useSendService, useLazyGetDataByKey } from '../../generics'
import useCacheService from '../../generics/useCacheService'

export const useVerifyAccount = (): SendServiceTypes<
  VerifyAccountResponse,
  VerifyAccountRequest
> &
  Required<
    Pick<
      SendServiceTypes<VerifyAccountResponse, VerifyAccountRequest>,
      'getDataLazy' | 'removeQuery' | 'reset'
    >
  > => {
  const getData = useLazyGetDataByKey<VerifyAccountResponse>()
  const { removeQuery, getDataLazy } = useCacheService({
    key: VERIFY_ACCOUNT,
  })

  const queryResult = useSendService<
    VerifyAccountResponse,
    VerifyAccountRequest
  >(
    async ({ accountId }) => {
      const cacheKey = [VERIFY_ACCOUNT, accountId]
      const cachedData = getData(cacheKey)
      if (cachedData) return cachedData
      const response = await verifyAccountService({ accountId })

      return response
    },
    {
      cacheKey: ({ accountId }: VerifyAccountRequest) => [
        VERIFY_ACCOUNT,
        accountId,
      ],
    }
  )

  const getDataLazySend = ({
    accountId,
  }: Partial<VerifyAccountRequest> = {}) => {
    return getDataLazy<VerifyAccountResponse>([accountId])
  }

  const removeQuerySend = ({ accountId }: VerifyAccountRequest) => {
    removeQuery({ queryParams: [accountId] })
  }

  return {
    data: queryResult.data,
    error: queryResult.error,
    getDataLazy: getDataLazySend,
    handleActionService: queryResult.mutate,
    isError: queryResult.isError,
    isLoading: queryResult.isPending,
    isSuccess: queryResult.isSuccess,
    removeQuery: removeQuerySend,
    reset: queryResult.reset,
  }
}
