import { PaginationData } from '../generics'

export interface CreateContactResponse {
  id: string
  alias: string
}

export interface CreateContactRequest {
  alias?: string
  accountId: string
}

export interface ContactData {
  id: string
  alias: string
  account: {
    owner: string
    accountNumber: string
    id: string
    user: {
      email: string
    }
  }
}
export interface ContactDataMap extends ContactData {
  isFirstElement: boolean
}

export interface GetContactResponse extends PaginationData {
  contacts: ContactData[]
}

export interface GetContactRequest {
  limit?: number
  page?: number
  search?: string
}
