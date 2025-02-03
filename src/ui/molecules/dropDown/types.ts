import { ReactNode } from 'react'
import { IconNames } from '@/ui/atoms/icons/icon/types'

export interface DropdownItem {
  label: ReactNode
  onClick?: () => void
  children?: DropdownItem[]
}
export interface DropdownContent {
  text: string
  nameIcon?: IconNames
}

export interface RecursiveDropdownProps {
  items: DropdownItem[]
}
