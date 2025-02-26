import { TextType } from '@/ui/atoms/text/types'

export interface SelectedOptionProps {
  text: string
  onClick: () => void
  className?: string
  textType?: TextType
  classIcon?: string
  isLoading: boolean
}
