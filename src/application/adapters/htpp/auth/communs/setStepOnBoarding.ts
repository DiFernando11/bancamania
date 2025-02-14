import { apiRoutes } from '@/routes/apiRoutes'
import { SetStepOnBoardingProps } from '@/shared'
import { apiRequestInternal } from '@/shared/utils'

export const setStepOnBoarding = async ({
  step,
}: SetStepOnBoardingProps): Promise<SetStepOnBoardingProps> => {
  const response = apiRequestInternal<
    SetStepOnBoardingProps,
    SetStepOnBoardingProps
  >({
    data: {
      step,
    },
    url: apiRoutes.internas.internalOnBoarding,
  })

  return response
}
