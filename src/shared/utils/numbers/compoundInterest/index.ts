import { TYPE_CARD } from '@/shared/types'

export const compoundInterest = ({
  total,
  interestRate = 0,
  deferredMonth,
  typeCredit,
  maxInstallmentsWithoutInterest = 0,
}: {
  total: number
  interestRate?: number
  deferredMonth: number
  typeCredit?: TYPE_CARD
  maxInstallmentsWithoutInterest?: number
}) => {
  if (typeCredit === TYPE_CARD.DEBIT) {
    return {
      totalPurchase: total.toFixed(2),
    }
  }

  const isInterest = deferredMonth > maxInstallmentsWithoutInterest
  const interestRateVersion = isInterest ? Number(interestRate) : 0
  const totalWithInterest =
    total * Math.pow(1 + Number(interestRateVersion), deferredMonth)

  const installment = parseFloat((totalWithInterest / deferredMonth).toFixed(2))

  return {
    installment,
    interestTotal: (totalWithInterest - total).toFixed(2),
    isBenefit: !isInterest,
    totalPurchase: totalWithInterest.toFixed(2),
  }
}
