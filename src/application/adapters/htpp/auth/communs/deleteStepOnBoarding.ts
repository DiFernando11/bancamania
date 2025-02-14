import { apiRoutes } from '@/routes/apiRoutes'
import { apiRequestInternal } from '@/shared/utils'

export const deleteStepOnBoarding = async (): Promise<unknown> => {
  const response = apiRequestInternal<unknown, unknown>({
    method: 'DELETE',
    url: apiRoutes.internas.internalDeleteOnBoarding,
  })

  return response
}
