import React from 'react'
import { Box } from '@/ui/atoms'
import { Skeleton } from '@/ui/molecules'

const SkeletonCards = ({ count = 2 }: { count?: number }) => {
  return (
    <Box className='flex flex-col gap-4'>
      {[...Array(count)].map((_, index) => (
        <Skeleton key={index} className='w-full h-48 rounded-lg' />
      ))}
    </Box>
  )
}

export default SkeletonCards
