import { User } from 'next-auth'
import apiAxios from '@/application/axios'
import { apiRoutes } from '@/routes/apiRoutes'

export const loginOrRegisterGoogleApi = async ({
  idToken,
}: Pick<User, 'idToken'>) => {
  try {
    const response = await apiAxios.post(apiRoutes.auth.authGoogle, {
      idToken,
    })

    if (response.status === 201) {
      return response.data
    }

    throw new Error('Error al cerrar la session del usuario')
  } catch (error) {
    console.error('Error en FetchLogoutSession:', error)
    throw error
  }
}
