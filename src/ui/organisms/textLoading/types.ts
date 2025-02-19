import { TextType } from '@/ui/atoms/text/types'

export interface TextLoadingProps {
  isLoading: boolean
  textType: TextType
  classNameSkeleton: string
  text?: string
}
