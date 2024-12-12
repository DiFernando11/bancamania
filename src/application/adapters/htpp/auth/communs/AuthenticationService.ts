import { AuthenticationApi } from '@/infrastructure/api'
import { AuthenticationResponse, LoginType } from '@/shared'

export const authenticationService = async ({
  token,
}: LoginType): Promise<AuthenticationResponse> => {
  const data = await AuthenticationApi({ token })

  return data
}
