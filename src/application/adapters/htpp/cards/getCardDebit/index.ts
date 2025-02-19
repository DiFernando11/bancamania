import { apiRoutes } from '@/routes/apiRoutes'
import { GetCardResponse } from '@/shared'
import { apiRequest } from '@/shared/utils'

export const getCardDebitService = async (): Promise<GetCardResponse> => {
  const response = apiRequest<GetCardResponse, unknown>({
    method: 'GET',
    url: apiRoutes.debitUser,
  })

  return response
}
