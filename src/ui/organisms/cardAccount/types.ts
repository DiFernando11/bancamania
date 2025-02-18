import { ReactNode } from 'react'

export interface CardAccountProps {
  balance?: string
  className?: string
  onClick?: () => void
  isLoading: boolean
  onClickFlip: () => void
  height?: string
  nextStepComponent: ReactNode
}

export interface CardAccountBackProps {
  isLoading: boolean
  onClickFlip: () => void
  onClick?: () => void
  name?: string
  textAccount?: string
  className?: string
  height?: string
  nextStepComponent: ReactNode
}
