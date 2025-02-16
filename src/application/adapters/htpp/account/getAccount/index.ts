import { apiRoutes } from '@/routes/apiRoutes'
import { GetAccountResponse, ObtenerNose } from '@/shared/types/account'
import { apiRequest } from '@/shared/utils'

export const getAccountService = async (): Promise<GetAccountResponse> => {
  const response = apiRequest<GetAccountResponse>({
    method: 'GET',
    url: apiRoutes.accountUser,
  })

  return response
}
