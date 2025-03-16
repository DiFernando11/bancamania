import React from 'react'
import { Box } from '@/ui/atoms'
import { Skeleton } from '@/ui/molecules'

const SkeletonCardsCredit = ({ count = 10 }: { count?: number }) => {
  return (
    <Box className='flex flex-col gap-4'>
      {[...Array(count)].map((_, index) => (
        <Skeleton key={index} className='w-full h-14' />
      ))}
    </Box>
  )
}

export default SkeletonCardsCredit
