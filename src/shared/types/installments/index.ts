export interface GetInstallmentsCreditsRequest {
  creditId: string
}

export interface Installments {
  amount: number
  dayOfpurchase: Date
  description: string
  dueDate: Date
  id: string
  installmentNumber: number
  isOverdue: boolean
  lateFee: number
  overdueDays: number
  paid: boolean
  totalInstallments: number
  totalToPay: number
  versionName: string
}

export interface GetInstallmentsCreditsResponse {
  totalAmount: string
  installments: Installments[]
  lastDayWithoutInterest: Date
  minimumPayment: string
  totalPaymentAtOnce: string
}

export interface PayInstallmentCreditRequest {
  creditID: string
  amount: number
}
export interface PayInstallmentCreditResponse {
  receiptID: string
}
