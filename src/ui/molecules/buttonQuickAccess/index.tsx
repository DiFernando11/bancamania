import classNames from 'classnames'
import React from 'react'
import { Box } from '@/ui/atoms'
import { ButtonQuickAccessProps } from './types'

const ButtonQuickAccess = ({
  children,
  onClick,
  className,
}: ButtonQuickAccessProps) => {
  return (
    <Box
      onClick={onClick}
      className={classNames(
        'quickAccess p-2 w-full h-full flex items-center justify-center',
        className
      )}
    >
      {children}
    </Box>
  )
}

export default ButtonQuickAccess
