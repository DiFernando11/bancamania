import { ReactNode } from 'react'
import { Mastercard, TypeCardCredit, VisaCard } from '@/shared'

export interface CardCreditProps {
  className?: string
  onClick?: () => void
  isLoading: boolean
  onClickFlip?: () => void
  nextStepComponent?: ReactNode
  textAccount?: string
  brand: TypeCardCredit
  version: VisaCard | Mastercard
}

export interface CardCreditBackProps {
  isLoading: boolean
  brand: TypeCardCredit
  version: Mastercard | VisaCard
  className?: string
  nextStepComponent?: ReactNode
  validThru?: string
  name?: string
  cv?: string
  onClick?: () => void
  onClickFlip?: () => void
}
