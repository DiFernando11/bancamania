export interface CreateAccountResponse {
  firstName: string
  lastName: string
  numberAccount: string
}

export interface GetAccountResponse {
  id: string
  accountNumber: string
  balance: string
  status: string
  owner: string
}
