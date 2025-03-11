import { InputBaseProps } from '@/ui/atoms/inputBase/types'

export interface InputSearchProps extends Omit<InputBaseProps, 'value'> {
  debounceDelay?: number
  onSearch: (query: string) => void
  value?: string
}
