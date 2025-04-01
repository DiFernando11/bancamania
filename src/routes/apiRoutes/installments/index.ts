const baseInstallment = '/deferredInstallment'
const baseIdInstall = `${baseInstallment}/:id`

export const apiInstallments = {
  downloadStatementeCredit: `${baseIdInstall}/pdf/statement`,
  getInstallmentCredit: baseIdInstall,
  getMonthsStatementCredit: `${baseIdInstall}/mothsStatement`,
  payInstallmentCredit: `${baseIdInstall}/pay`,
}
