import { CSSProperties, ReactNode } from 'react'

export interface CardProductProps {
  className?: string
  onClick?: () => void
  LeftContent: ReactNode
  RightContent: ReactNode
  height?: CSSProperties['height']
  maxHeight?: CSSProperties['maxHeight']
  minHeight?: CSSProperties['minHeight']
}
