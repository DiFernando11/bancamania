import { CardCredit } from '@/shared'

export interface FlipCardCreditProps {
  next?: () => void
  isNextStep: boolean
  data: CardCredit
  isLoading: boolean
}
