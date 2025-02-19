import { TextType } from '@/ui/atoms/text/types'

export interface TextAccountProps {
  isShow: boolean
  isLoading: boolean
  textAccount?: string
  textType?: TextType
  className?: string
}
