import { apiRoutes } from '@/routes/apiRoutes'
import {
  GetInstallmentsCreditsRequest,
  GetInstallmentsCreditsResponse,
} from '@/shared/types/installments'
import { apiRequest } from '@/shared/utils'

export const getInstallmentsCredit = async ({
  creditId,
}: GetInstallmentsCreditsRequest): Promise<GetInstallmentsCreditsResponse> => {
  const url = apiRoutes.getInstallmentCredit.replace(':id', creditId)
  const response = apiRequest<
    GetInstallmentsCreditsResponse,
    GetInstallmentsCreditsRequest
  >({
    method: 'GET',
    url,
  })

  return response
}
