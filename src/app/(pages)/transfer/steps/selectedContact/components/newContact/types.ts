import { DataTransfer } from '@/app/(pages)/transfer/types'
import { StepProps } from '@/ui/organisms/stepWizard/types'

export type NewAccountProps = Pick<StepProps<DataTransfer>, 'goToStep'>
