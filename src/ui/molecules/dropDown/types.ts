import { ReactNode } from 'react'
import { IconNames } from '@/ui/atoms/icons/icon/types'

export interface DropdownItem {
  label: ReactNode
  onClick?: () => void
  children?: DropdownItem[]
  isChildrenActive?: boolean
  isActive?: boolean
}

export interface DropdownItemProps {
  item: DropdownItem
  level: number
  isRoot: boolean
  levelDifferent?: boolean
  component: React.FC<DropDownMenuProps>
}

export interface DropdownContent {
  text: string
  nameIcon?: IconNames
}

export interface RecursiveDropdownProps {
  items: DropdownItem[]
  component: React.FC<DropDownMenuProps>
}

export interface IconConfigureDropDown {
  name: IconNames
  size: number
}

export interface DropDownMenuProps {
  item: DropdownItem
  setIsOpen: (isOpen: boolean) => void
  isOpen: boolean | undefined
  isRoot: boolean
}
