import { IconNames } from '@/ui/atoms/icons/icon/types'
import { TextType } from '@/ui/atoms/text/types'

export interface IconTextProps {
  text?: string
  nameIcon: IconNames
  classIcon: string
  textType?: TextType
  iconColor?: string
  classText?: string
}
