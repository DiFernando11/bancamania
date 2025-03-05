import { ReactNode } from 'react'

export interface SelectedOptionProps {
  onClick: () => void
  children: ReactNode
  className?: string
  ComponentAction?: React.ReactNode
}
