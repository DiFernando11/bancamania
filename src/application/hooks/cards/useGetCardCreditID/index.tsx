'use client'
import { getCardCreditByIDService } from '@/application/adapters/htpp'
import { GetCardCreditIDRequest, GetCardCreditIDResponse } from '@/shared'
import { isValidUUIDv4 } from '@/shared/utils'
import { GET_CREDIT_BY_ID } from '@/shared/utils/constantsQuery'
import { useFetchService } from '../../generics'

export const useGetCardCreditID = ({ creditID }: GetCardCreditIDRequest) => {
  const queryResult = useFetchService<GetCardCreditIDResponse>(
    [GET_CREDIT_BY_ID, creditID],
    () => getCardCreditByIDService({ creditID }),
    {
      enabled: isValidUUIDv4(creditID),
    }
  )

  return {
    data: queryResult.data,
    error: queryResult.error,
    isError: queryResult.isError,
    isLoading: queryResult.isPending,
    isSuccess: queryResult.isSuccess,
  }
}
