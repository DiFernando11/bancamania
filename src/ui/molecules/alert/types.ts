import { ReactNode } from 'react'
import { TextType } from '@/ui/atoms/text/types'

export interface AlertProps {
  type: 'success' | 'warning' | 'info' | 'error'
  children: ReactNode
  textType?: TextType
  textClass?: string
}
