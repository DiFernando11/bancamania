import { FetchLogoutSession } from '@/infrastructure/api'

export const logoutService = async () => {
  const data = await FetchLogoutSession()

  return data
}
