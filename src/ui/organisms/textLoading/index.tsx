import React from 'react'
import { Text } from '@/ui/atoms'
import SkeletonLoader from '../skeletonLoader'
import { TextLoadingProps } from './types'

const TextLoading = ({
  isLoading,
  text = '',
  textType = 'font_16_fw_bold_fm_rob',
  classNameSkeleton,
}: TextLoadingProps) => {
  return (
    <SkeletonLoader classNameSkeleton={classNameSkeleton} isLoading={isLoading}>
      <Text textType={textType}>{text}</Text>
    </SkeletonLoader>
  )
}

export default TextLoading
