import { VerifyAccountResponse } from '@/shared'

export interface DataTransfer extends VerifyAccountResponse {
  amount?: number
  alias?: string
}
