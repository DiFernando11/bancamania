import { ReactNode } from 'react'

export interface BankingCardProps {
  className: string
  isLoading: boolean
  headerBankCard: ReactNode
  footerRightComponent: ReactNode
  onClick?: () => void
  nextStepComponent?: ReactNode
  textAccount?: string
}
