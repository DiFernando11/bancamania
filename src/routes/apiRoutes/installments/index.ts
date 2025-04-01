const baseInstallment = '/deferredInstallment'
const baseIdInstall = `${baseInstallment}/:id`

export const apiInstallments = {
  getInstallmentCredit: baseIdInstall,
  getMonthsStatementCredit: `${baseIdInstall}/mothsStatement`,
  payInstallmentCredit: `${baseIdInstall}/pay`,
}
