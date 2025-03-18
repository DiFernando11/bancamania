import { upgradeCredit } from '@/application/adapters/htpp'
import {
  SendServiceTypes,
  UpgradeCreditRequest,
  UpgradeCreditResponse,
} from '@/shared'
import { useSendService } from '../../generics'

export const useUpgradeCredit = (): SendServiceTypes<
  UpgradeCreditResponse,
  UpgradeCreditRequest
> => {
  const queryResult = useSendService<
    UpgradeCreditResponse,
    UpgradeCreditRequest
  >(async ({ id }) => upgradeCredit({ id }))

  return {
    handleActionService: queryResult.mutate,
    isError: queryResult.isError,
    isLoading: queryResult.isPending,
    isSuccess: queryResult.isSuccess,
    reset: queryResult.reset,
  }
}
