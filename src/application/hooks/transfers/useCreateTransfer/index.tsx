'use client'
import { createTransferService } from '@/application/adapters/htpp'
import {
  CreateTransferRequest,
  CreateTransferResponse,
  SendServiceTypes,
} from '@/shared'
import { useSendService } from '../../generics'

export const useCreateTransfer = (): SendServiceTypes<
  CreateTransferResponse,
  CreateTransferRequest
> => {
  const queryResult = useSendService<
    CreateTransferResponse,
    CreateTransferRequest
  >(async ({ amount, destinationAccountId, motive, originAccountId }) =>
    createTransferService({
      amount,
      destinationAccountId,
      motive,
      originAccountId,
    })
  )

  return {
    handleActionService: queryResult.mutate,
    isError: queryResult.isError,
    isLoading: queryResult.isPending,
    isSuccess: queryResult.isSuccess,
  }
}
