import { apiRoutes } from '@/routes/apiRoutes'
import { AuthenticationResponse, LoginType } from '@/shared'
import { apiRequestInternal } from '@/shared/utils'

export const authenticationService = async ({
  token,
}: LoginType): Promise<AuthenticationResponse> => {
  const response = apiRequestInternal<AuthenticationResponse, LoginType>({
    data: {
      token,
    },
    url: apiRoutes.internas.internalLogin,
  })

  return response
}
