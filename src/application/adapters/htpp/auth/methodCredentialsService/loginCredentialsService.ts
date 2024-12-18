import { apiRoutes } from '@/routes/apiRoutes'
import { AuthenticationResponse, LoginCredentials } from '@/shared'
import { apiRequest } from '@/shared/utils'

export const loginCredentialsService = async ({
  email,
  password,
}: LoginCredentials): Promise<AuthenticationResponse> => {
  const response = apiRequest<AuthenticationResponse, LoginCredentials>({
    url: apiRoutes.auth.loginCredentials,
    data: {
      email,
      password,
    },
  })

  return response
}
