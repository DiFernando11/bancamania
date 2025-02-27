import React from 'react'
import { Text } from '@/ui/atoms'
import SkeletonLoader from '../skeletonLoader'
import { TextLoadingProps } from './types'

const TextLoading = ({
  isLoading,
  textType = 'font_16_fw_bold_fm_rob',
  classNameSkeleton,
  children,
  classText,
}: TextLoadingProps) => {
  return (
    <SkeletonLoader classNameSkeleton={classNameSkeleton} isLoading={isLoading}>
      <Text className={classText} textType={textType}>
        {children}
      </Text>
    </SkeletonLoader>
  )
}

export default TextLoading
