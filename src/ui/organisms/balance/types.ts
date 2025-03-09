import { TextType } from '@/ui/atoms/text/types'
import { BitcoinSymbolProps } from '@/ui/molecules/bitcoinSymbol/types'

export interface BalanceProps extends BitcoinSymbolProps {
  isShow: boolean
  isLoading: boolean
  classSkeleton?: string
}
