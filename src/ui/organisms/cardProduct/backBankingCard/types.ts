import { ReactNode } from 'react'

export interface BackBankingCardProps {
  className: string
  isLoading: boolean
  footerRightComponent: ReactNode
  onClick?: () => void
  nextStepComponent?: ReactNode
  cv?: string
  validThru?: string
  name?: string
}
