'use client'
import { getCardDebitService } from '@/application/adapters/htpp'
import { GetCardResponse, SendFechTypes } from '@/shared'
import { GET_CARD_DEBIT } from '@/shared/utils/constantsQuery'
import { useFetchService } from '../../generics'

export const useGetCardDebit = (
  enabled?: boolean
): SendFechTypes<GetCardResponse> => {
  const queryResult = useFetchService<GetCardResponse>(
    [GET_CARD_DEBIT],
    getCardDebitService,
    {
      enabled,
    }
  )

  return {
    data: queryResult.data,
    isError: queryResult.isError,
    isLoading: queryResult.isPending,
    isSuccess: queryResult.isSuccess,
  }
}
