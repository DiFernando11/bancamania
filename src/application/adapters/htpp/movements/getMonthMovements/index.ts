import { apiRoutes } from '@/routes/apiRoutes'
import { GetMonthMovementRequest, GetMonthMovementsResponse } from '@/shared'
import { apiRequest } from '@/shared/utils'

export const getMonthMovements = async ({
  accountId,
}: GetMonthMovementRequest): Promise<GetMonthMovementsResponse> => {
  const response = apiRequest<
    GetMonthMovementsResponse,
    GetMonthMovementRequest
  >({
    method: 'GET',
    params: {
      ...(accountId ? { accountId } : {}),
    },
    url: apiRoutes.monthMovements,
  })

  return response
}
