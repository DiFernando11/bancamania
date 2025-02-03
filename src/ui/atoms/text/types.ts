import React, { ReactNode, ElementType } from 'react'

export type TextProps<T extends ElementType = 'p'> = {
  variant?: T
  textType?: 'headingLarge' | 'headingMedium' | 'headingSmall'
  className?: string
  children?: ReactNode
} & React.ComponentPropsWithoutRef<T>
