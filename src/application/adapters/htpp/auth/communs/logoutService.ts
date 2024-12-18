import { apiRoutes } from '@/routes/apiRoutes'
import { apiRequestInternal } from '@/shared/utils'

export const logoutService = async () => {
  const response = apiRequestInternal({
    url: apiRoutes.internas.internalLogout,
    method: 'DELETE',
  })

  return response
}
