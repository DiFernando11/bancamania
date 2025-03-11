import React from 'react'
import { Box } from '@/ui/atoms'
import { Skeleton } from '@/ui/molecules'

const SkeletonCardContact = ({
  isFirstLetter,
}: {
  isFirstLetter?: boolean
}) => {
  return (
    <Box>
      {isFirstLetter && <Skeleton className='ml-3 sm:ml-4 w-5 mb-8 h-5' />}
      <Box className='flex gap-4 items-center'>
        <Skeleton className='w-10 h-10 min-w-10 sm:w-12 sm:h-12 sm:min-w-12 rounded-full' />
        <Box className='space-y-1 w-full'>
          <Skeleton className='w-full max-w-40 h-5' />
          <Skeleton className='w-full max-w-24 h-4' />
          <Skeleton className='w-full max-w-64 h-4' />
        </Box>
        <Skeleton className='w-5 h-5 min-w-5 rounded-full' />
      </Box>
    </Box>
  )
}

export default SkeletonCardContact
