import { ReactNode } from 'react'
import { Mastercard, TypeCardCredit, VisaCard } from '@/shared'

export interface CardCreditProps {
  className?: string
  onClick?: () => void
  isLoading: boolean
  onClickFlip: () => void
  nextStepComponent: ReactNode
  textAccount?: string
  brand: TypeCardCredit
  version: VisaCard | Mastercard
}

export interface CardCreditBackProps {
  isLoading: boolean
  onClickFlip: () => void
  onClick?: () => void
  name?: string
  className?: string
  nextStepComponent: ReactNode
  cv?: string
  validThru?: string
  brand: TypeCardCredit
  version: Mastercard | VisaCard
}
