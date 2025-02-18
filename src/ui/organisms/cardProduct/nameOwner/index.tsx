import React from 'react'
import { Text } from '@/ui/atoms'
import { NameOwnerProps } from './types'
import SkeletonLoader from '../../skeletonLoader'

const NameOwner = ({ isLoading, name }: NameOwnerProps) => {
  return (
    <SkeletonLoader
      height='h-4'
      width='w-24'
      className='self-end'
      isLoading={isLoading}
    >
      <Text textType='font_18_fw_bold_fm_rob' className='flex flex-col'>
        {name}
      </Text>
    </SkeletonLoader>
  )
}

export default NameOwner
