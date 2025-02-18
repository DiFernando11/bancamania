import React from 'react'
import { maskReplace } from '@/shared/utils/strings'
import { Text } from '@/ui/atoms'
import { TextAccountProps } from './types'
import SkeletonLoader from '../../skeletonLoader'

const TextAccount = ({
  isShow,
  isLoading,
  textAccount = '',
}: TextAccountProps) => {
  return (
    <SkeletonLoader
      height='h-4'
      width='w-24'
      className='self-end'
      isLoading={isLoading}
    >
      <Text className='font_18_fw_bold_fm_rob'>
        # {isShow ? textAccount : maskReplace({ text: textAccount })}
      </Text>
    </SkeletonLoader>
  )
}

export default TextAccount
