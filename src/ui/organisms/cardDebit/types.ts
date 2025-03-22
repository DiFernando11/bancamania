import { ReactNode } from 'react'

export interface CardDebitProps {
  className?: string
  onClick?: () => void
  isLoading: boolean
  onClickFlip?: () => void
  nextStepComponent?: ReactNode
  textAccount?: string
}

export interface CardDebitBackProps {
  isLoading: boolean
  onClickFlip: () => void
  onClick?: () => void
  name?: string
  className?: string
  nextStepComponent: ReactNode
  cv?: string
  validThru?: string
}
