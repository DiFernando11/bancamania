import { GetCardCreditResponse, GetCardResponse } from '@/shared'

export interface TypeCardSelectedProps {
  cardDebit?: GetCardResponse
  cardCredit?: GetCardCreditResponse
  onClick: (...args: unknown[]) => unknown
  isLoading: boolean
  id?: string
}
