const baseInstallment = '/deferredInstallment'

export const apiInstallments = {
  getInstallmentCredit: `${baseInstallment}/:id`,
  payInstallmentCredit: `${baseInstallment}/:id/pay`,
}
