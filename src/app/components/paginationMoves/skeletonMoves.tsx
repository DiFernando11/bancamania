import React from 'react'
import { Box } from '@/ui/atoms'
import { Movements } from '@/ui/molecules'

const SkeletonMoves = ({ count = 10 }: { count?: number }) => {
  return (
    <Box className='flex flex-col gap-8'>
      {[...Array(count)].map((_, index) => (
        <Movements.Skeleton key={index} />
      ))}
    </Box>
  )
}

export default SkeletonMoves
