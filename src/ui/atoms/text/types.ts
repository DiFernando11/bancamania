import { ReactNode } from 'react'

export interface TextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  textType?: 'headingLarge' | 'headingMedium' | 'headingSmall'
  className?: string
  children?: ReactNode
}
