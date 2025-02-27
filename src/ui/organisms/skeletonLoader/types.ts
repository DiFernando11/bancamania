import { ReactNode } from 'react'

export type SkeletonLoaderProps = {
  isLoading: boolean
  children: ReactNode
  classNameSkeleton?: string
}
