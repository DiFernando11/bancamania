import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { ReactNode } from 'react'

export type VerificationInputCasted = React.ComponentType<
  {
    value: string
    onChange: (value: string) => void
    onBlur: () => void
  } & Record<string, unknown>
>

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

export interface MenuContextualProps {
  t: (key: string) => string
  route: AppRouterInstance
}
