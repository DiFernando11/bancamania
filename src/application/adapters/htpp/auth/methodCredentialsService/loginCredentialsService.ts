import { loginCredentialsApi } from '@/infrastructure/api'
import { AuthenticationResponse, LoginCredentials } from '@/shared'

export const loginCredentialsService = async ({
  email,
  password,
}: LoginCredentials): Promise<AuthenticationResponse> => {
  const data = await loginCredentialsApi({
    email,
    password,
  })

  return data
}
