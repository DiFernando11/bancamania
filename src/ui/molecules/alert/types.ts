import { TextType } from '@/ui/atoms/text/types'

export interface AlertProps {
  type: 'success' | 'warning' | 'info' | 'error'
  textType: TextType
  textClass: string
  text: string
}
