import React from 'react'
import { Box } from '@/ui/atoms'
import { PairSkeleton, Skeleton } from '@/ui/molecules'
import { PairSkeletonGroupProps } from './types'

const PairSkeletonGroup = ({
  isTitle = true,
  count = 3,
}: PairSkeletonGroupProps) => {
  return (
    <Box className='space-y-3'>
      {isTitle && <Skeleton className='h-5 w-32' />}
      {[...Array(count)].map((_, index) => (
        <PairSkeleton key={index} />
      ))}
    </Box>
  )
}

export default PairSkeletonGroup
