export interface SelectableCardProps {
  value: string
  selectedValue?: string
  onChange?: (value: string) => void
  children: React.ReactNode
}
