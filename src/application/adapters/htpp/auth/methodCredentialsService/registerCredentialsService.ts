import { apiRoutes } from '@/routes/apiRoutes'
import { AuthenticationResponse, RegisterCredentials } from '@/shared'
import { apiRequest } from '@/shared/utils'

export const registerCredentialsService = async ({
  code,
  firstName,
  lastName,
  email,
  password,
}: RegisterCredentials): Promise<AuthenticationResponse> => {
  const response = apiRequest<AuthenticationResponse, RegisterCredentials>({
    url: apiRoutes.auth.registerCredentials,
    data: {
      code,
      firstName,
      lastName,
      email,
      password,
    },
  })

  return response
}
