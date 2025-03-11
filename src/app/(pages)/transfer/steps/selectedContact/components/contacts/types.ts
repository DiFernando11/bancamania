import { DataTransfer } from '@/app/(pages)/transfer/types'
import { ContactData } from '@/shared'
import { StepProps } from '@/ui/organisms/stepWizard/types'

export type ContactsProps = Pick<
  StepProps<DataTransfer>,
  'goToStep' | 'updateData'
> & {
  data?: ContactData[]
  isFetchingNextPage: boolean
  hasNextPage: boolean
  fetchNextPage: () => void
  isLoading: boolean
}
