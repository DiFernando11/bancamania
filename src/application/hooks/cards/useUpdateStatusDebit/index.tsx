import { updateStatusDebit } from '@/application/adapters/htpp'
import { SendServiceTypes } from '@/shared'
import { useSendService } from '../../generics'

export const useUpdateStatusDebit = (): SendServiceTypes<unknown, unknown> => {
  const queryResult = useSendService<unknown, unknown>(async () =>
    updateStatusDebit()
  )

  return {
    handleActionService: queryResult.mutate,
    isError: queryResult.isError,
    isLoading: queryResult.isPending,
    isSuccess: queryResult.isSuccess,
    reset: queryResult.reset,
  }
}
