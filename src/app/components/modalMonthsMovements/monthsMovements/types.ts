import { SelectedOptionProps } from '@/ui/organisms/selectedOption/types'

export interface MonthsMovementsProps
  extends Omit<SelectedOptionProps, 'children'> {
  loadingSelected: boolean
  text: string
  isLoading: boolean
}
