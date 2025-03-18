import { apiRoutes } from '@/routes/apiRoutes'
import { CreateCardCreditRequest, CreateCardCreditResponse } from '@/shared'
import { apiRequest } from '@/shared/utils'

export const createCreditService = async ({
  marca,
}: CreateCardCreditRequest): Promise<CreateCardCreditResponse> => {
  const response = apiRequest<
    CreateCardCreditResponse,
    CreateCardCreditRequest
  >({
    data: {
      marca,
    },
    url: apiRoutes.createCreditReceipt,
  })

  return response
}
