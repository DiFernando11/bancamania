import { ButtonProps } from '@/ui/atoms/button/types'
import { TextType } from '@/ui/atoms/text/types'

export interface ButtonTextProps extends Omit<ButtonProps, 'children'> {
  textType?: TextType
  text: string
}
