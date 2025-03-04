export interface GetReceiptsByUUIDRequest {
  receiptId: string
}
export interface GetReceiptsByUUIDResponse {
  id: string
  title: string
  dataReceipts: {
    key: string
    value?: string | number
    style?: { hr: boolean }
  }[]
  createdAt: string
}
