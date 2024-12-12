import { sendCodePhoneApi } from '@/infrastructure/api'
import { PhoneType, SendCodePhoneResponse } from '@/shared'

export const sendCodePhoneService = async ({
  phone,
}: PhoneType): Promise<SendCodePhoneResponse> => {
  const data = await sendCodePhoneApi({ phone })

  return data
}
