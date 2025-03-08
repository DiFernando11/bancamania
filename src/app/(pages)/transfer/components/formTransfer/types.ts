export interface FormTransferI {
  accountId: string
  saveAccount: boolean
  hasValidateAccount: boolean
}

export enum FORM_TRANSFER_NAME {
  accountId = 'accountId',
  hasValidateAccount = 'hasValidateAccount',
  saveAccount = 'saveAccount',
}

export interface FormTransferProps<T> {
  formID: string
  nextStep: () => void
  updateData: (data: Partial<T>) => void
}
