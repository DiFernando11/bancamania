import { apiRoutes } from '@/routes/apiRoutes'
import { CreateCardCreditRequest, CreateCardCreditResponse } from '@/shared'
import { apiRequest } from '@/shared/utils'

export const createCreditService = async ({
  brand,
}: CreateCardCreditRequest): Promise<CreateCardCreditResponse> => {
  const response = apiRequest<
    CreateCardCreditResponse,
    CreateCardCreditRequest
  >({
    data: {
      brand,
    },
    url: apiRoutes.createCreditReceipt,
  })

  return response
}
