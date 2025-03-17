import { DataCredit } from '@/app/(pages)/credit/types'
import { BaseCardProps } from '@/app/components/activeCard/types'
import { StepProps } from '@/ui/organisms/stepWizard/types'

type SelectedServiceProps = Pick<StepProps<DataCredit>, 'stepData'>

export interface ActiveCardCreditProps
  extends BaseCardProps,
    SelectedServiceProps {}
