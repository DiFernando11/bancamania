import { ReactNode } from 'react'
import { SkeletonLoaderProps } from '../skeletonLoader/types'

export interface ButtonQuickAccessLoaderProps extends SkeletonLoaderProps {
  children: ReactNode
  onClick?: () => void
  className?: string
}
