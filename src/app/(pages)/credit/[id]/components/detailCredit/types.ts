import { GetCardCreditIDResponse } from '@/shared'

export interface DetailCreditProps {
  formID: string
  isLoading: boolean
  data?: GetCardCreditIDResponse
  isChecked: boolean
  id: string
}
