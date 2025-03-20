import { ItemStore } from '@/shared'

export interface FormSelectedItems {
  selectedCards: ItemStore[]
}

export enum FORM_SELECTED_ITEMS_NAME {
  selectedCards = 'selectedCards',
}
