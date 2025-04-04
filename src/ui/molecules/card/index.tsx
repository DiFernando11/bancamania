import classNames from 'classnames'
import React from 'react'
import { Box } from '@/ui/atoms'
import { CardProps } from './types'

const Card = ({ onClick, className, children, style }: CardProps) => {
  return (
    <Box
      onClick={onClick}
      className={classNames(
        className,
        'w-full border p-4 border-primary-100 rounded-lg flex'
      )}
      style={style}
    >
      {children}
    </Box>
  )
}

export default Card
