'use client'
import { getCardCreditService } from '@/application/adapters/htpp'
import { GetCardCreditResponse, SendFechTypes } from '@/shared'
import { GET_CARD_DEBIT } from '@/shared/utils/constantsQuery'
import { useFetchService } from '../../generics'

export const useGetCardsCredit = (): SendFechTypes<GetCardCreditResponse> => {
  const queryResult = useFetchService<GetCardCreditResponse>(
    [GET_CARD_DEBIT],
    getCardCreditService
  )

  return {
    data: queryResult.data,
    isError: queryResult.isError,
    isLoading: queryResult.isPending,
    isSuccess: queryResult.isSuccess,
  }
}
