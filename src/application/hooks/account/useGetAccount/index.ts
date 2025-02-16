'use client'
import { getAccountService } from '@/application/adapters/htpp'
import { SendFechTypes } from '@/shared'
import { GetAccountResponse } from '@/shared/types/account'
import { GET_ACCOUNT } from '@/shared/utils/constantsQuery'
import { useFetchService } from '../../generics'

export const useGetAccount = (): SendFechTypes<GetAccountResponse> => {
  const queryResult = useFetchService<GetAccountResponse>(
    [GET_ACCOUNT],
    getAccountService
  )

  return {
    data: queryResult.data,
    isError: queryResult.isError,
    isLoading: queryResult.isPending,
    isSuccess: queryResult.isSuccess,
  }
}
