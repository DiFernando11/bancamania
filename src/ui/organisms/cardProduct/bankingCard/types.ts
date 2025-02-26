import { ReactNode } from 'react'

export interface BankingCardProps {
  className: string
  headerBankCard: ReactNode
  isLoading?: boolean
  footerRightComponent?: ReactNode
  onClick?: () => void
  nextStepComponent?: ReactNode
  textAccount?: string
}
