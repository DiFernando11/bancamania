import { apiRoutes } from '@/routes/apiRoutes'
import { apiRequest } from '@/shared/utils'

export const createDebitService = async (): Promise<unknown> => {
  const response = apiRequest<unknown, unknown>({
    url: apiRoutes.debitUser,
  })

  return response
}
