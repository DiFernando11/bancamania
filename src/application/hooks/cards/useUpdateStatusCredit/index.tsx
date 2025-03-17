import { updateStatusCredit } from '@/application/adapters/htpp'
import { SendServiceTypes, UpdataStatusCreditRequest } from '@/shared'
import { useSendService } from '../../generics'

export const useUpdateStatusCredit = ({
  id,
}: UpdataStatusCreditRequest): SendServiceTypes<unknown, unknown> => {
  const queryResult = useSendService<unknown, unknown>(async () =>
    updateStatusCredit({ id })
  )

  return {
    handleActionService: queryResult.mutate,
    isError: queryResult.isError,
    isLoading: queryResult.isPending,
    isSuccess: queryResult.isSuccess,
    reset: queryResult.reset,
  }
}
