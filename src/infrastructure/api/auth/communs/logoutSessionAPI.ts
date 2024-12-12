import axios from 'axios'

const API_BASE_URL = '/api/auth/logout'

export const FetchLogoutSession = async () => {
  try {
    const response = await axios.delete(`${API_BASE_URL}`)

    if (response.status === 200) {
      return response.data.results
    }

    throw new Error('Error al cerrar la session del usuario')
  } catch (error) {
    console.error('Error en FetchLogoutSession:', error)
    throw error
  }
}
