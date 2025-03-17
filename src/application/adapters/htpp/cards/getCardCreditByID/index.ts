import { apiRoutes } from '@/routes/apiRoutes'
import { GetCardCreditIDRequest, GetCardCreditIDResponse } from '@/shared'
import { apiRequest } from '@/shared/utils'

export const getCardCreditByIDService = async ({
  creditID,
}: GetCardCreditIDRequest): Promise<GetCardCreditIDResponse> => {
  const url = apiRoutes.creditByID.replace(':id', creditID)

  const response = apiRequest<GetCardCreditIDResponse, GetCardCreditIDRequest>({
    method: 'GET',
    url,
  })

  return response
}
