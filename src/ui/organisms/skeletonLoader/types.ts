import { ReactNode } from 'react'

export type SkeletonLoaderProps = {
  isLoading: boolean
  children: ReactNode
  className?: string
  width?: string
  height?: string
  rounded?: string
  classNameSkeleton?: string
}
