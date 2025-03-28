import { TYPE_CARD, TypeCardCredit } from '@/shared'
import { StepProps } from '@/ui/organisms/stepWizard/types'
import { DataItemsPurchase } from '../../../types'

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

export interface FormPurchaseI {
  products: {
    idProduct: string
    quantity: number
  }[]
  totalBuy: number
  methodPay: METHOD_PAY
  deferredMonth: number
  selectedCard?: PurchaseSelectedCard
}

export enum FORM_PURCHASE_NAME {
  products = 'products',
  totalBuy = 'totalBuy',
  methodPay = 'methodPay',
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
