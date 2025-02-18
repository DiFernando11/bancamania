import React from 'react'
import { Box, Icon } from '@/ui/atoms'

const BackFlip = ({ onClickFlip }: { onClickFlip: () => void }) => {
  return (
    <Box className='flex justify-end items-center' onClick={onClickFlip}>
      <Icon name='Flip' className='w-8 h-8 cursor-pointer' />
    </Box>
  )
}

export default BackFlip
