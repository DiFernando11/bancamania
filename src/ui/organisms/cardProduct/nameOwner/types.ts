import { TextType } from '@/ui/atoms/text/types'

export interface NameOwnerProps {
  isLoading: boolean
  name?: string
  textType?: TextType
  classNameSkeleton?: string
}
