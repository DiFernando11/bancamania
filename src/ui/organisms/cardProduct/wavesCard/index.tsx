import React from 'react'
import { Box, Icon } from '@/ui/atoms'

const WavesCard = () => {
  return (
    <Box className='flex items-center gap-2'>
      <Icon name='ChipCard' className='w-10 h-10' />
      <Icon name='Waves' className='w-6 h-6 rotate-45' />
    </Box>
  )
}

export default WavesCard
