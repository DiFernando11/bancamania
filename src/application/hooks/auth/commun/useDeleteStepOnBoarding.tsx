'use client'
import { deleteStepOnBoarding } from '@/application/adapters/htpp'
import { SendServiceTypes } from '@/shared'
import { useSendService } from '../../generics'

export const useDeleteStepOnBoarding = (): SendServiceTypes<
  unknown,
  unknown
> => {
  const queryResult = useSendService<unknown, unknown>(async () =>
    deleteStepOnBoarding()
  )

  return {
    data: queryResult.data,
    handleActionService: queryResult.mutate,
    isError: queryResult.isError,
    isLoading: queryResult.isPending,
    isSuccess: queryResult.isSuccess,
  }
}
