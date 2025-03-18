import { apiRoutes } from '@/routes/apiRoutes'
import { UpgradeCreditRequest, UpgradeCreditResponse } from '@/shared'
import { apiRequest } from '@/shared/utils'

export const upgradeCredit = async ({
  id,
}: UpgradeCreditRequest): Promise<UpgradeCreditResponse> => {
  const url = apiRoutes.upgradeCredit.replace(':id', id as string)
  const response = apiRequest<UpgradeCreditResponse, UpgradeCreditRequest>({
    method: 'PUT',
    url,
  })

  return response
}
