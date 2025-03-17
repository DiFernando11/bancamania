import { DataCredit } from '@/app/(pages)/credit/types'
import { StepProps } from '@/ui/organisms/stepWizard/types'

export interface DetailCreditProps
  extends Pick<StepProps<DataCredit>, 'stepData'> {
  formID: string
}
