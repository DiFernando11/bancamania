import { DataTransfer } from '@/app/(pages)/transfer/types'
import { StepProps } from '@/ui/organisms/stepWizard/types'

export interface FormConfirmTransferProps
  extends Pick<StepProps<DataTransfer>, 'stepData'> {
  formID: string
}
export type DataDestinationProps = Pick<StepProps<DataTransfer>, 'stepData'>

export interface FormConfirmTransferI {
  amount: number
  destinationAccountId: string
  originAccountId: string
  motive: string
}

export enum FORM_CONFIRM_TRANSFER_NAME {
  amount = 'amount',
  destinationAccountId = 'destinationAccountId',
  originAccountId = 'originAccountId',
  motive = 'motive',
}
