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

export interface GetReceiptsRequest {
  limit?: string | number
  page?: string | number
  fechaDesde?: string
  fechaHasta?: string
}

export interface ReceiptI {
  id: string
  title: string
  dataReceipts: {
    key: string
    value?: string | number
    style?: { hr: boolean }
  }[]
  createdAt: string
  description: string
}

// Tipo para un arreglo de recibos

export interface GetReceiptsResponse {
  receipts: ReceiptI[]
  currentPage: number
  isLastPage: boolean
  totalItems: number
  totalPages: number
  nextCursor?: number
  prevCursor?: number
}
