import { apiRoutes } from '@/routes/apiRoutes'
import { apiRequest } from '@/shared/utils'

export const validTokenService = async (): Promise<unknown> => {
  const response = apiRequest<unknown, unknown>({
    method: 'GET',
    url: apiRoutes.auth.validateToken,
  })

  return response
}
