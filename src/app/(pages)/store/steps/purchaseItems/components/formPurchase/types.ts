import { TYPE_CARD, TypeCardCredit } from '@/shared'
import { StepProps } from '@/ui/organisms/stepWizard/types'
import { DataItemsPurchase } from '../../../types'

export interface PurchaseSelectedCard {
  marca?: TypeCardCredit
  id: string
  version?: string
  cardNumber: string
  typeCard: TYPE_CARD
}

export interface FormPurchaseI {
  products: {
    idProduct: string
    quantity: number
  }[]
  totalBuy: number
  typeBuy: string
  deferredMonth: string
  selectedCard?: PurchaseSelectedCard
}

export enum FORM_PURCHASE_NAME {
  products = 'products',
  totalBuy = 'totalBuy',
  typeBuy = 'typeBuy',
  deferredMonth = 'deferredMonth',
  selectedCard = 'selectedCard',
}

export enum METHOD_PAY {
  BITCOIN = 'BITCOIN',
  MILES = 'MILES',
}

export interface FormPurchaseProps
  extends Pick<StepProps<DataItemsPurchase>, 'stepData'> {
  formID: string
}
