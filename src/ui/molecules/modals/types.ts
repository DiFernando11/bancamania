import { ReactNode } from 'react'

export interface ModalProps {
  position?: 'bottom' | 'center' | 'left' | 'right'
  width?: string | number
  height?: string | number
  minWidth?: string | number
  minHeight?: string | number
  maxWidth?: string | number
  maxHeight?: string | number
  children: ReactNode
}

export interface ContentProps {
  children: ReactNode | string
  className?: string
}
