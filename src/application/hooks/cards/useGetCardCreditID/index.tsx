'use client'
import { getCardCreditByIDService } from '@/application/adapters/htpp'
import { GetCardCreditIDRequest, GetCardCreditIDResponse } from '@/shared'
import { GET_CREDIT_BY_ID } from '@/shared/utils/constantsQuery'
import { useFetchService } from '../../generics'

export const useGetCardCreditID = ({ creditID }: GetCardCreditIDRequest) => {
  const queryResult = useFetchService<GetCardCreditIDResponse>(
    [GET_CREDIT_BY_ID, creditID],
    () => getCardCreditByIDService({ creditID }),
    {
      enabled: !!creditID,
    }
  )

  return {
    data: queryResult.data,
    isError: queryResult.isError,
    isLoading: queryResult.isPending,
    isSuccess: queryResult.isSuccess,
  }
}
