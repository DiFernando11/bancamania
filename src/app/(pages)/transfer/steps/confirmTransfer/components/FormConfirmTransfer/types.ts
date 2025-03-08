export interface FormConfirmTransferI {
  amount: number
  destinationAccountId: string
  originAccountId: string
}

export enum FORM_CONFIRM_TRANSFER_NAME {
  amount = 'amount',
  destinationAccountId = 'destinationAccountId',
  originAccountId = 'originAccountId',
}
