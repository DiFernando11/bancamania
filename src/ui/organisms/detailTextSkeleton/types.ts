import { PairTextProps } from '@/ui/molecules/pairText/types'

interface DetailCreditItem extends PairTextProps {
  classSkeleton?: string
}

export interface DetailCreditListProps {
  isLoading: boolean
  items: DetailCreditItem[]
}
