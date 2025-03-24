import { METHOD_PAY } from '@/app/(pages)/store/steps/purchaseItems/components/formPurchase/types'
import { PaginationData } from '../generics'
import { TYPE_CARD } from '../tarjetas'

export interface ItemStore {
  id: string
  title: string
  description: string
  image: string
  price: string
  miles: number
}

export interface GetItemsStoreResponse extends PaginationData {
  store: ItemStore[]
}

export interface GetItemsStoreRequest {
  limit?: number
  page?: number
}

export interface PurchaseItemsStoreResponse {
  receiptID: string
}

export interface ProductItem {
  id: string
  quantity: number
}

export interface PurchaseItemsStoreRequest {
  idCard: string
  methodPay: METHOD_PAY
  deferredMonth: number
  products: ProductItem[]
  typeCard: TYPE_CARD
}
