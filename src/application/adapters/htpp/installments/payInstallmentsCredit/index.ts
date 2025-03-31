import { apiRoutes } from '@/routes/apiRoutes'
import {
  PayInstallmentCreditRequest,
  PayInstallmentCreditResponse,
} from '@/shared'
import { apiRequest } from '@/shared/utils'

export const payInstallmentsCredit = async ({
  creditID,
  amount,
}: PayInstallmentCreditRequest): Promise<PayInstallmentCreditResponse> => {
  const url = apiRoutes.payInstallmentCredit.replace(':id', creditID)
  const response = apiRequest<PayInstallmentCreditResponse, unknown>({
    data: {
      amount,
    },
    method: 'POST',
    url,
  })

  return response
}
