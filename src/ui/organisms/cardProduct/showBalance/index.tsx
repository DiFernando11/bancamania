import React from 'react'
import { Box, Icon } from '@/ui/atoms'

const ShowBalance = ({
  isShow,
  setIsShow,
}: {
  isShow: boolean
  setIsShow: (isShow: boolean) => void
}) => {
  return (
    <Box className='cursor-pointer' onClick={() => setIsShow(!isShow)}>
      <Icon name={isShow ? 'EyeOpen' : 'EyeClose'} className='w-8 h-8' />
    </Box>
  )
}

export default ShowBalance
