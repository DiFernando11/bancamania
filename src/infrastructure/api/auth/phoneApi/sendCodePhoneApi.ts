import apiAxios from '@/application/axios'
import { apiRoutes } from '@/routes/apiRoutes'
import { PhoneType, SendCodePhoneResponse } from '@/shared'

export const sendCodePhoneApi = async ({
  phone,
}: PhoneType): Promise<SendCodePhoneResponse> => {
  try {
    const response = await apiAxios.post(`${apiRoutes.auth.sendCodePhone}`, {
      phone,
    })
    if (response.status === 201) {
      return response.data
    }

    throw new Error('Error al obtener las cuentas del usuario')
  } catch (error) {
    console.error('Error en FetchRegisterGoogle:', error)
    throw error
  }
}
