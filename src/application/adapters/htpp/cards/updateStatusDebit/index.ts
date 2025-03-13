import { apiRoutes } from '@/routes/apiRoutes'
import { apiRequest } from '@/shared/utils'

export const updateStatusDebit = async (): Promise<unknown> => {
  const response = apiRequest<unknown, unknown>({
    method: 'PUT',
    url: apiRoutes.updateStatusDebit,
  })

  return response
}
