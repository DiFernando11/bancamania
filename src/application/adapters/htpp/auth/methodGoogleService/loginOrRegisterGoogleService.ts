import { User } from 'next-auth'
import { loginOrRegisterGoogleApi } from '@/infrastructure/api'
import { AuthenticationResponse } from '@/shared'

export const loginOrRegisterGoogleService = async ({
  idToken,
}: Pick<User, 'idToken'>): Promise<AuthenticationResponse> => {
  const data = await loginOrRegisterGoogleApi({ idToken })

  return data
}
