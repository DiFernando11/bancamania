import { ReactNode } from 'react'

export interface CardDebitProps {
  balance?: string
  className?: string
  onClick?: () => void
  isLoading: boolean
  onClickFlip: () => void
  nextStepComponent: ReactNode
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
