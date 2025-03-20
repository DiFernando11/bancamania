import { ItemStore } from '@/shared'

export interface CardItemStoreProps {
  image: string
  title: string
  description: string
  miles: number
  price: string
  id: string
  selectedValues: ItemStore[]
  onChange: (selected: ItemStore[]) => void
}
