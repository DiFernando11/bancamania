import { TYPE_CARD, TypeCardCredit } from '@/shared'

export interface PurchaseSelectedCard {
  brand?: TypeCardCredit
  id: string
  version?: string
  cardNumber: string
  typeCard: TYPE_CARD
  interestRate?: number
  maxInstallmentsWithoutInterest?: number
  quota?: number
  miles?: number
  account?: {
    balance: number
  }
}
export interface TypeCardSelectedProps {
  selectedCard?: PurchaseSelectedCard
  onClick: (...args: unknown[]) => unknown
  isLoading: boolean
  id?: string
  isBitcoinMethod: boolean
}
