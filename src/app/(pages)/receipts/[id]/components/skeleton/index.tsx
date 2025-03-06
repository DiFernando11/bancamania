import React from 'react'
import { Box } from '@/ui/atoms'
import { Skeleton } from '@/ui/molecules'

const SkeletonReceiptByUUID = () => {
  return (
    <Box className='flex flex-col gap-4'>
      {[9, 6, 12, 10, 16, 8, 7].map(value => (
        <Box key={value} className='flex gap-4 justify-between items-center'>
          <Skeleton className={`h-4`} style={{ width: `${2 + value}rem` }} />
          <Skeleton className='h-4' style={{ width: `${3 + value}rem` }} />
        </Box>
      ))}
    </Box>
  )
}

export default SkeletonReceiptByUUID
