export interface CreateContactResponse {
  id: string
  alias: string
}

export interface CreateContactRequest {
  alias: string
  accountId: string
}
