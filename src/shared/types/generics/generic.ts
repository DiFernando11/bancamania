import { ReactNode } from 'react'

export type StoragePrimitive =
  | string
  | number
  | boolean
  | null
  | undefined
  | { [key: string]: StoragePrimitive }
  | Date

export interface MenuOption {
  label: string | ReactNode
  code?: string
  lineageCode?: string
  children?: MenuOption[]
  onClick?: () => void
  path?: string
  alwaysShow?: boolean
  isDefaultOpen?: boolean
}

export interface StepWizardHandle {
  next: () => void
  prev: () => void
  goToStep: (step: number) => void
  reset: () => void
  isLastStep: () => boolean
}
