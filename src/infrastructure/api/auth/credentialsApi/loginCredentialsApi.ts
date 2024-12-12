import apiAxios from '@/application/axios'
import { apiRoutes } from '@/routes/apiRoutes'
import { LoginCredentials } from '@/shared'

export const loginCredentialsApi = async ({
  email,
  password,
}: LoginCredentials) => {
  try {
    const response = await apiAxios.post(apiRoutes.auth.loginCredentials, {
      email,
      password,
    })

    if (response.status === 201) {
      return response.data
    }

    throw new Error('Error al hacer login con credenciales')
  } catch (error) {
    console.error('Error en loginCredentialsApi:', error)
    throw error
  }
}
