import React from 'react'
import { Box } from '@/ui/atoms'
import Skeleton from '../skeleton'

const PairSkeleton = () => {
  return (
    <Box className='flex justify-between gap-4'>
      <Skeleton className='h-4 w-24' />
      <Skeleton className='h-4 w-32' />
    </Box>
  )
}

export default PairSkeleton
