// src/infrastructure/api/accountAPI.ts
import apiAxios from '@/application/axios'
import { apiRoutes } from '@/routes/apiRoutes'
import { ValidateCodePhoneResponse, ValidateCodePhoneType } from '@/shared'

export const loginPhoneApi = async ({
  phone,
  code,
}: ValidateCodePhoneType): Promise<ValidateCodePhoneResponse> => {
  try {
    const body = {
      phone,
      code,
    }
    const response = await apiAxios.post(`${apiRoutes.auth.loginPhone}`, body)

    if (response.status === 201) {
      return response.data
    }

    throw new Error('Error al hacer login method phone')
  } catch (error) {
    console.error('Error en FetchVerifyCodePhone:', error)
    throw error
  }
}
