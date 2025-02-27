import React from 'react'
import { ButtonQuickAccess } from '@/ui/molecules'
import SkeletonLoader from '../skeletonLoader'
import { ButtonQuickAccessLoaderProps } from './types'

const ButtonQuickAccessLoader = ({
  children,
  onClick,
  className,
  ...props
}: ButtonQuickAccessLoaderProps) => {
  return (
    <SkeletonLoader {...props}>
      <ButtonQuickAccess onClick={onClick} className={className}>
        {children}
      </ButtonQuickAccess>
    </SkeletonLoader>
  )
}

export default ButtonQuickAccessLoader
