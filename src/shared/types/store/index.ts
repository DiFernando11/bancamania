import { PaginationData } from '../generics'

export interface ItemStore {
  id: string
  title: string
  description: string
  image: string
  price: string | number
  miles: number
}

export interface GetItemsStoreResponse extends PaginationData {
  store: ItemStore[]
}

export interface GetItemsStoreRequest {
  limit?: number
  page?: number
}
