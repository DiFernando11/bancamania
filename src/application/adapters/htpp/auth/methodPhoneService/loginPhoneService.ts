import { loginPhoneApi } from '@/infrastructure/api'
import { ValidateCodePhoneResponse, ValidateCodePhoneType } from '@/shared'

export const loginPhoneService = async ({
  phone,
  code,
}: ValidateCodePhoneType): Promise<ValidateCodePhoneResponse> => {
  const data = await loginPhoneApi({ phone, code })

  return data
}
