import { apiRoutes } from '@/routes/apiRoutes'
import { RegisterPhone, ValidateCodePhoneResponse } from '@/shared'
import { apiRequest } from '@/shared/utils'

export const registerPhoneService = async ({
  phone,
  idToken,
}: RegisterPhone): Promise<ValidateCodePhoneResponse> => {
  const response = apiRequest<ValidateCodePhoneResponse, RegisterPhone>({
    url: apiRoutes.auth.registerPhone,
    data: { phone, idToken },
  })

  return response
}
