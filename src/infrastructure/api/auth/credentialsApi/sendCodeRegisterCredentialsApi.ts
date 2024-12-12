import { User } from 'next-auth'
import apiAxios from '@/application/axios'
import { apiRoutes } from '@/routes/apiRoutes'

export const sendCodeRegisterCredentialsApi = async ({
  email,
}: Pick<User, 'email'>) => {
  try {
    const response = await apiAxios.post(
      apiRoutes.auth.validateCodeCredentials,
      {
        email,
      }
    )

    if (response.status === 201) {
      return response.data
    }

    throw new Error('Error al cerrar la session del usuario')
  } catch (error) {
    console.error('Error en FetchLogoutSession:', error)
    throw error
  }
}
