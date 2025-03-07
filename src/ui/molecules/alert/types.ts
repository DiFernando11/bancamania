import { TextType } from '@/ui/atoms/text/types'

export interface AlertProps {
  type: 'success' | 'warning' | 'info' | 'error'
  text: string
  textType?: TextType
  textClass?: string
}
