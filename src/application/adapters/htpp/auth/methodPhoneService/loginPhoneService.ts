import { apiRoutes } from '@/routes/apiRoutes'
import { ValidateCodePhoneResponse, ValidateCodePhoneType } from '@/shared'
import { apiRequest } from '@/shared/utils'

export const loginPhoneService = async ({
  phone,
  code,
}: ValidateCodePhoneType): Promise<ValidateCodePhoneResponse> => {
  const response = apiRequest<ValidateCodePhoneResponse, ValidateCodePhoneType>(
    {
      url: apiRoutes.auth.loginPhone,
      data: { phone, code },
    }
  )

  return response
}
