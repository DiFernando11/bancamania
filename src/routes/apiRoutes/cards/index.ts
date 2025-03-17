const baseCard = '/cards'
const baseDebit = `${baseCard}/debit`
const baseCredit = `${baseCard}/credit`

export const apiCards = {
  creditByID: `${baseCredit}/:id`,
  creditUser: baseCredit,
  debitUser: baseDebit,
  ofertCredit: `${baseCredit}/offerts`,
  updateStatusCredit: `${baseCredit}/status/:id`,
  updateStatusDebit: `${baseDebit}/status`,
}
