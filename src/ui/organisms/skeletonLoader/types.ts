import { ReactNode } from 'react'

export type SkeletonLoaderProps = {
  isLoading: boolean
  children: ReactNode
  classNameSkeleton?: string
}

export type SkeletonLoaderPropsWithoutChildren = Omit<
  SkeletonLoaderProps,
  'children'
>
