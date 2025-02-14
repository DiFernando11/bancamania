import { apiRoutes } from '@/routes/apiRoutes'
import { CreateAccountResponse } from '@/shared/types/account'
import { apiRequest } from '@/shared/utils'

export const createAccountService =
  async (): Promise<CreateAccountResponse> => {
    const response = apiRequest<CreateAccountResponse, unknown>({
      url: apiRoutes.createAccount,
    })

    return response
  }
