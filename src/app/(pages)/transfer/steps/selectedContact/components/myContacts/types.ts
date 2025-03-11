import { DataTransfer } from '@/app/(pages)/transfer/types'
import { StepProps } from '@/ui/organisms/stepWizard/types'

export type MyContactsProps = Pick<
  StepProps<DataTransfer>,
  'goToStep' | 'updateData'
>
