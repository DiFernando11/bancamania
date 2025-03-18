import { apiRoutes } from '@/routes/apiRoutes'
import { GetMovementRequest, GetMovementsResponse } from '@/shared'
import { apiRequest } from '@/shared/utils'

export const getMovementsService = async ({
  limit = 10,
  page = 1,
  accountId,
  debitCardId,
  creditCardId,
}: GetMovementRequest): Promise<GetMovementsResponse> => {
  const response = apiRequest<GetMovementsResponse, GetMovementRequest>({
    method: 'GET',
    params: {
      accountId,
      creditCardId,
      debitCardId,
      limit,
      page,
    },
    url: apiRoutes.lastMovements,
  })

  return response
}
