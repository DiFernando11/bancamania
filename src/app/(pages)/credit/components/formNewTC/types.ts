import { DataTransfer } from '@/app/(pages)/transfer/types'
import { NewCards } from '@/shared'
import { StepProps } from '@/ui/organisms/stepWizard/types'

export interface FormNewTcI {
  brand: string
}

export enum FORM_NEW_TC_NAME {
  brand = 'brand',
}

export interface FormNewTcProps
  extends Pick<StepProps<DataTransfer>, 'nextStep'> {
  formID: string
  newCards?: NewCards[]
}
