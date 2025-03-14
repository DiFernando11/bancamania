import { apiRoutes } from '@/routes/apiRoutes'
import { CreateCardCreditRequest } from '@/shared'
import { apiRequest } from '@/shared/utils'

export const createCreditService = async ({
  marca,
}: CreateCardCreditRequest): Promise<unknown> => {
  const response = apiRequest<unknown, CreateCardCreditRequest>({
    data: {
      marca,
    },
    url: apiRoutes.creditUser,
  })

  return response
}
