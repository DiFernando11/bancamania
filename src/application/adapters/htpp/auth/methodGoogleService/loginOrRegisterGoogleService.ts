import { User } from 'next-auth'
import { apiRoutes } from '@/routes/apiRoutes'
import { AuthenticationResponse } from '@/shared'
import { apiRequest } from '@/shared/utils'

export const loginOrRegisterGoogleService = async ({
  idToken,
}: Pick<User, 'idToken'>): Promise<AuthenticationResponse> => {
  const response = apiRequest<AuthenticationResponse, Pick<User, 'idToken'>>({
    url: apiRoutes.auth.authGoogle,
    data: {
      idToken,
    },
  })

  return response
}
