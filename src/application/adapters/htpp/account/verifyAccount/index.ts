import { apiRoutes } from '@/routes/apiRoutes'
import { VerifyAccountRequest, VerifyAccountResponse } from '@/shared'
import { apiRequest } from '@/shared/utils'

export const verifyAccountService = async ({
  accountId,
}: VerifyAccountRequest): Promise<VerifyAccountResponse> => {
  const url = apiRoutes.verifyAccount.replace(':id', accountId)
  const response = apiRequest<VerifyAccountResponse, VerifyAccountRequest>({
    method: 'GET',
    url,
  })

  return response
}
