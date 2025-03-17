import { StepProps } from '@/ui/organisms/stepWizard/types'
import { DataCredit } from '../../types'

export type YourCardCreditProps = Pick<
  StepProps<DataCredit>,
  'nextStep' | 'updateData'
>
