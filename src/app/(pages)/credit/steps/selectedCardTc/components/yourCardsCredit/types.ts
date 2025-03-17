import { DataCredit } from '@/app/(pages)/credit/types'
import { StepProps } from '@/ui/organisms/stepWizard/types'

export type YourCardCreditProps = Pick<
  StepProps<DataCredit>,
  'nextStep' | 'updateData'
>
