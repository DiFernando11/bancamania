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

export interface VerifyAccountRequest {
  accountId: string
}
export interface VerifyAccountResponse {
  accountNumber: string
  email: string
  id: string
  owner: string
}
