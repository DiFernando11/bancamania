import { NewCards } from '@/shared'

export interface FormNewTcI {
  brand: string
}

export enum FORM_NEW_TC_NAME {
  brand = 'brand',
}

export interface FormNewTcProps {
  formID: string
  newCards?: NewCards[]
}
