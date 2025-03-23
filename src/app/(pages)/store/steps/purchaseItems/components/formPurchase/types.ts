import { StepProps } from '@/ui/organisms/stepWizard/types'
import { DataItemsPurchase } from '../../../types'

export interface FormPurchaseI {
  idCard: string
  products: {
    idProduct: string
    quantity: number
  }[]
  totalBuy: number
}

export enum FORM_PURCHASE_NAME {
  idCard = 'idCard',
  products = 'products',
  totalBuy = 'totalBuy',
}

export interface FormPurchaseProps
  extends Pick<StepProps<DataItemsPurchase>, 'stepData'> {
  formID: string
}
