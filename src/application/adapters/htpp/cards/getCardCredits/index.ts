import { apiRoutes } from '@/routes/apiRoutes'
import { GetCardCreditResponse } from '@/shared'
import { apiRequest } from '@/shared/utils'

export const getCardCreditService =
  async (): Promise<GetCardCreditResponse> => {
    const response = apiRequest<GetCardCreditResponse, unknown>({
      method: 'GET',
      url: apiRoutes.creditUser,
    })

    return response
  }
