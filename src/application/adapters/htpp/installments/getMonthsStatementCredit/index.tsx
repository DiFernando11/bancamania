import { apiRoutes } from '@/routes/apiRoutes'
import {
  GetInstallmentsCreditsRequest,
  GetMonthsStatementCreditResponse,
} from '@/shared/types/installments'
import { apiRequest } from '@/shared/utils'

export const getMonthsStatementCredit = async ({
  creditId,
}: GetInstallmentsCreditsRequest): Promise<GetMonthsStatementCreditResponse> => {
  const url = apiRoutes.getMonthsStatementCredit.replace(':id', creditId)
  const response = apiRequest<
    GetMonthsStatementCreditResponse,
    GetInstallmentsCreditsRequest
  >({
    method: 'GET',
    url,
  })

  return response
}
