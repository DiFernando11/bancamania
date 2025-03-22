import { GetCardCreditResponse, GetCardResponse } from '@/shared'

export interface TypeCardSelectedProps {
  id: string
  cardDebit?: GetCardResponse
  cardCredit?: GetCardCreditResponse
  onClick: (...args: unknown[]) => unknown
  isLoading: boolean
}
