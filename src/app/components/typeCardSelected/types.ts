import { TYPE_CARD, TypeCardCredit } from '@/shared'

export interface PurchaseSelectedCard {
  marca?: TypeCardCredit
  id: string
  version?: string
  cardNumber: string
  typeCard: TYPE_CARD
}
export interface TypeCardSelectedProps {
  selectedCard?: PurchaseSelectedCard
  onClick: (...args: unknown[]) => unknown
  isLoading: boolean
  id?: string
}
