import { DataCredit } from '@/app/(pages)/credit/types'
import { NewCards } from '@/shared'
import { StepProps } from '@/ui/organisms/stepWizard/types'

export interface FormNewTcI {
  brand: string
}

export enum FORM_NEW_TC_NAME {
  brand = 'brand',
}

export interface FormNewTcProps
  extends Pick<StepProps<DataCredit>, 'nextStep'> {
  formID: string
  newCards?: NewCards[]
}
