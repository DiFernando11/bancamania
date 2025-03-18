import { DataCredit } from '@/app/(pages)/credit/types'
import { StepProps } from '@/ui/organisms/stepWizard/types'

export type NewVersionProps = Pick<StepProps<DataCredit>, 'stepData'>
