import classNames from 'classnames'
import React from 'react'
import { Box } from '@/ui/atoms'
import { CardProps } from './types'

const Card = ({ onClick, className, children }: CardProps) => {
  return (
    <Box
      onClick={onClick}
      className={classNames(
        className,
        'w-full shadow-all-accent rounded-lg flex flex-col p-4'
      )}
    >
      {children}
    </Box>
  )
}

export default Card
