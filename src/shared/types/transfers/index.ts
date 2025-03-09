export interface CreateTransferRequest {
  amount: number
  destinationAccountId: string
  originAccountId: string
  motive?: string
}
export interface CreateTransferResponse {
  receiptId: string
}
