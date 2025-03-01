import React from 'react'
import { maskReplace } from '@/shared/utils/strings'
import { Text } from '@/ui/atoms'
import { TextAccountProps } from './types'
import SkeletonLoader from '../../skeletonLoader'

const TextAccount = ({
  isShow,
  isLoading,
  textAccount = '',
  textType = 'font_18_fw_bold_fm_rob',
  classNameSkeleton = 'w-24 h-4',
}: TextAccountProps) => {
  return (
    <SkeletonLoader classNameSkeleton={classNameSkeleton} isLoading={isLoading}>
      <Text textType={textType}>
        {isShow ? textAccount : maskReplace({ text: textAccount })}
      </Text>
    </SkeletonLoader>
  )
}

export default TextAccount
