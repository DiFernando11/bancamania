import { apiRoutes } from '@/routes/apiRoutes'
import { PhoneType, SendCodePhoneResponse } from '@/shared'
import { apiRequest } from '@/shared/utils'

export const sendCodePhoneService = async ({
  phone,
}: PhoneType): Promise<SendCodePhoneResponse> => {
  const response = apiRequest<SendCodePhoneResponse, PhoneType>({
    data: { phone },
    url: apiRoutes.auth.sendCodePhone,
  })

  return response
}
