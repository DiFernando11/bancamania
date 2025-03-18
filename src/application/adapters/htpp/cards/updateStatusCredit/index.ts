import { apiRoutes } from '@/routes/apiRoutes'
import { UpdataStatusCreditRequest } from '@/shared'
import { apiRequest } from '@/shared/utils'

export const updateStatusCredit = async ({
  id,
}: UpdataStatusCreditRequest): Promise<unknown> => {
  const url = apiRoutes.updateStatusCredit.replace(':id', id as string)
  const response = apiRequest<unknown, UpdataStatusCreditRequest>({
    method: 'PUT',
    url,
  })

  return response
}
