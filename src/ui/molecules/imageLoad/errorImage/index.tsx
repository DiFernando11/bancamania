import classNames from 'classnames'
import React from 'react'
import { Box, Icon } from '@/ui/atoms'

const ErrorImage = ({
  width,
  height,
  className,
}: {
  width: number
  height: number
  className?: string
}) => {
  return (
    <Box
      className={classNames(
        'absolute flex justify-center items-center bg-green-500',
        className
      )}
      style={{ height, width }}
    >
      <Box style={{ height: height / 2, width: width / 2 }}>
        <Icon className='text-white' name='Warning' />
      </Box>
    </Box>
  )
}

export default ErrorImage
