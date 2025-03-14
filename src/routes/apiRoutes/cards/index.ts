const baseCard = '/cards'
const baseDebit = `${baseCard}/debit`
const baseCredit = `${baseCard}/credit`

export const apiCards = {
  creditUser: baseCredit,
  debitUser: baseDebit,
  updateStatusDebit: `${baseDebit}/status`,
}
