'use client'
import { getOffertsCredit } from '@/application/adapters/htpp'
import { GetOffertsResponse, SendFechTypes } from '@/shared'
import { GET_OFFERTS_CREDIT } from '@/shared/utils/constantsQuery'
import { useFetchService } from '../../generics'

export const useGetOffertsCredit = (): SendFechTypes<GetOffertsResponse> => {
  const queryResult = useFetchService<GetOffertsResponse>(
    [GET_OFFERTS_CREDIT],
    getOffertsCredit
  )

  return {
    data: queryResult.data,
    error: queryResult.error,
    isError: queryResult.isError,
    isLoading: queryResult.isPending,
    isSuccess: queryResult.isSuccess,
  }
}
