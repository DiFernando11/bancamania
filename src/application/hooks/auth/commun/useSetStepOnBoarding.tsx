'use client'
import { setStepOnBoarding } from '@/application/adapters/htpp'
import { SendServiceTypes, SetStepOnBoardingProps } from '@/shared'
import { useSendService } from '../../generics'

export const useSetStepOnBoarding = (): SendServiceTypes<
  SetStepOnBoardingProps,
  SetStepOnBoardingProps
> => {
  const queryResult = useSendService<
    SetStepOnBoardingProps,
    SetStepOnBoardingProps
  >(async ({ step }) => setStepOnBoarding({ step }))

  return {
    data: queryResult.data,
    handleActionService: queryResult.mutate,
    isError: queryResult.isError,
    isLoading: queryResult.isPending,
    isSuccess: queryResult.isSuccess,
  }
}
