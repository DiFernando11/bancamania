export interface FormTransferI {
  accountId: string
  saveAccount: boolean
  hasValidateAccount: boolean
  alias?: string
}

export enum FORM_TRANSFER_NAME {
  accountId = 'accountId',
  hasValidateAccount = 'hasValidateAccount',
  saveAccount = 'saveAccount',
  alias = 'alias',
}

export interface FormTransferProps<T> {
  formID: string
  nextStep: () => void
  updateData: (data: Partial<T>) => void
}
