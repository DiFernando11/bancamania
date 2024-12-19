import { apiRoutes } from '@/routes/apiRoutes'
import { ValidateCodePhoneResponse, ValidateCodePhoneType } from '@/shared'
import { apiRequest } from '@/shared/utils'

export const loginPhoneService = async ({
  phone,
  code,
}: ValidateCodePhoneType): Promise<ValidateCodePhoneResponse> => {
  const response = apiRequest<ValidateCodePhoneResponse, ValidateCodePhoneType>(
    {
      data: { code, phone },
      url: apiRoutes.auth.loginPhone,
    }
  )

  return response
}
