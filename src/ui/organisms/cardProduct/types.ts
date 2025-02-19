import { CSSProperties, ReactNode } from 'react'

export interface CardProductProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  height?: CSSProperties['height']
  maxHeight?: CSSProperties['maxHeight']
  minHeight?: CSSProperties['minHeight']
}
