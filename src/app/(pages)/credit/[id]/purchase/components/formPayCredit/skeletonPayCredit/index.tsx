import React from 'react'
import { Box } from '@/ui/atoms'
import { Skeleton } from '@/ui/molecules'
import GaleryCards from '@/ui/organisms/galeryCards'

const SkeletonPayCredit = () => {
  return (
    <Box className='flex flex-col items-center gap-2 w-full justify-center'>
      <Skeleton className='w-40 h-4' />
      <Skeleton className='w-full max-w-80 h-20' />
      <GaleryCards className='w-full mt-2'>
        <GaleryCards.Card minWidth='9rem' className='!p-0'>
          <Skeleton className='w-full h-16' />
        </GaleryCards.Card>
        <GaleryCards.Card minWidth='9rem' className='!p-0'>
          <Skeleton className='w-full h-16' />
        </GaleryCards.Card>
        <GaleryCards.Card minWidth='9rem' className='!p-0'>
          <Skeleton className='w-full h-16' />
        </GaleryCards.Card>
      </GaleryCards>
    </Box>
  )
}

export default SkeletonPayCredit
