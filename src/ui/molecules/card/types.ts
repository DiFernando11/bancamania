import { ReactNode, CSSProperties } from 'react'

export interface CardProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  style?: CSSProperties
}
