import { apiRoutes } from '@/routes/apiRoutes'
import { CreateTransferRequest, CreateTransferResponse } from '@/shared'
import { apiRequest } from '@/shared/utils'

export const createTransferService = async ({
  amount,
  destinationAccountId,
  motive,
  originAccountId,
}: CreateTransferRequest): Promise<CreateTransferResponse> => {
  const response = apiRequest<CreateTransferResponse, CreateTransferRequest>({
    data: {
      amount: amount,
      destinationAccountId,
      motive,
      originAccountId,
    },
    url: apiRoutes.createTransfer,
  })

  return response
}
