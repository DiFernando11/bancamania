import { ReactNode } from 'react'

export interface CardProductProps {
  onClick?: () => void
  className?: string
  children: ReactNode
}
