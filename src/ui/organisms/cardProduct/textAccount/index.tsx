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
    <>
      <SkeletonLoader height='h-4' width='w-24' isLoading={isLoading}>
        <Text>{isShow ? textAccount : maskReplace({ text: textAccount })}</Text>
      </SkeletonLoader>
    </>
  )
}

export default TextAccount
