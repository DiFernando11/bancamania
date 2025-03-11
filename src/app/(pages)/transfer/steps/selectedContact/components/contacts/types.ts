import { DataTransfer } from '@/app/(pages)/transfer/types'
import { ContactDataMap } from '@/shared'
import { StepProps } from '@/ui/organisms/stepWizard/types'

export type ContactsProps = Pick<
  StepProps<DataTransfer>,
  'goToStep' | 'updateData'
> & {
  data?: ContactDataMap[]
  isFetchingNextPage: boolean
  hasNextPage: boolean
  fetchNextPage: () => void
  isLoading: boolean
  limit: number
}
