export interface CreateAccountResponse {
  firstName: string
  lastName: string
  numberAccount: string
}

export interface AccountResponse {
  id: string
  accountNumber: string
  balance: string
  status: string
}

export interface GetAccountResponse {
  firstName: string
  lastName: string
  account: AccountResponse
}
