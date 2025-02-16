import { ReactNode } from 'react'

export type SkeletonLoaderProps = {
  isLoading: boolean
  children: ReactNode
  width?: string
  height?: string
  rounded?: string
}
