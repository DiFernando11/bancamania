import React from 'react'
import { Box } from '@/ui/atoms'
import { Movements } from '@/ui/molecules'

const Skeleton = () => {
  return (
    <Box className='flex flex-col gap-8'>
      {[1, 2, 3].map(key => (
        <Movements.Skeleton key={key} />
      ))}
    </Box>
  )
}

export default Skeleton
