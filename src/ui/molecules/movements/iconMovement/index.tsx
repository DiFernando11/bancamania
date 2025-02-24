import classNames from 'classnames'
import React from 'react'
import { Box, Icon } from '@/ui/atoms'
import { IconMovementsProps } from './types'

const IconMovement = ({
  iconName,
  classNameIcon = 'w-5 h-5',
}: IconMovementsProps) => {
  return (
    <Box
      className={classNames(
        'rounded-full border',
        'w-8 h-8 flex justify-center items-center quickAccess min-w-8 min-h-8'
      )}
    >
      <Icon name={iconName} className={classNames(classNameIcon)} />
    </Box>
  )
}

export default IconMovement
