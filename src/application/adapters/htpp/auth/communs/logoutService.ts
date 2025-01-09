import { apiRoutes } from '@/routes/apiRoutes'
import { apiRequestInternal } from '@/shared/utils'

export const logoutService = async () => {
  const response = apiRequestInternal({
    method: 'DELETE',
    url: apiRoutes.internas.internalLogout,
  })

  return response
}
