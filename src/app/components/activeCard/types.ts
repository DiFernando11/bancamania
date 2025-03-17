import { SendServiceTypes } from '@/shared'

type SelectedServiceProps = Pick<
  SendServiceTypes<unknown, unknown>,
  'handleActionService' | 'isError' | 'error' | 'isLoading'
>

export interface BaseCardProps {
  status?: string
  isLoadingCard: boolean
  setChecked: (isChecked: boolean) => void
  isChecked: boolean
}

export interface ActiveCardProps extends BaseCardProps, SelectedServiceProps {
  queryKey: string
  paramsQuery?: string
}
