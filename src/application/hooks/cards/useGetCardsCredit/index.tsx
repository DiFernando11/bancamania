'use client'
import { getCardCreditService } from '@/application/adapters/htpp'
import { GetCardCreditResponse, SendFechTypes } from '@/shared'
import { GET_CARD_CREDIT } from '@/shared/utils/constantsQuery'
import { useFetchService } from '../../generics'

export const useGetCardsCredit = (): SendFechTypes<GetCardCreditResponse> => {
  const queryResult = useFetchService<GetCardCreditResponse>(
    [GET_CARD_CREDIT],
    getCardCreditService
  )

  return {
    data: queryResult.data,
    error: queryResult.error,
    isError: queryResult.isError,
    isLoading: queryResult.isPending,
    isSuccess: queryResult.isSuccess,
  }
}
