import { GetCardResponse } from '@/shared'

export interface CardSelectedProps {
  cardDebit?: GetCardResponse
  isLoading: boolean
  isError: boolean
}
