import { ItemStore } from '@/shared'

export interface SelectableCardsGroupStoreProps {
  value?: ItemStore[]
  onChange: (selected: ItemStore[]) => void
}
