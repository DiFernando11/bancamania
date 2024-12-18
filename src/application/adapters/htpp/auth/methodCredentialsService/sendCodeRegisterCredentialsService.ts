import { User } from 'next-auth'
import { apiRoutes } from '@/routes/apiRoutes'
import { SendCodePhoneResponse } from '@/shared'
import { apiRequest } from '@/shared/utils'

export const sendCodeRegisterCredentialsService = async ({
  email,
}: Pick<User, 'email'>): Promise<SendCodePhoneResponse> => {
  const response = apiRequest<SendCodePhoneResponse, Pick<User, 'email'>>({
    url: apiRoutes.auth.validateCodeCredentials,
    data: {
      email,
    },
  })

  return response
}
