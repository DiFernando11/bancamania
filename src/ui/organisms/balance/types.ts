import { TextType } from '@/ui/atoms/text/types'

export interface BalanceProps {
  isShow: boolean
  isLoading: boolean
  classIcon: string
  textType: TextType
  balance?: string
  classSkeleton?: string
}
