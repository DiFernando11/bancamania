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
    <Box
      className='cursor-pointer flex justify-end items-center'
      onClick={() => setIsShow(!isShow)}
    >
      <Icon name={isShow ? 'EyeOpen' : 'EyeClose'} className='w-8 h-8' />
    </Box>
  )
}

export default ShowBalance
