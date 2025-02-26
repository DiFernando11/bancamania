import { apiRoutes } from '@/routes/apiRoutes'
import { GetMonthMovementsResponse } from '@/shared'
import { apiRequest } from '@/shared/utils'

export const getMonthMovements =
  async (): Promise<GetMonthMovementsResponse> => {
    const response = apiRequest<GetMonthMovementsResponse, unknown>({
      method: 'GET',
      url: apiRoutes.monthMovements,
    })

    return response
  }
