'use client'

import classNames from 'classnames'
import React, { useState } from 'react'
import { Box, Button } from '@/ui/atoms'
import { ButtonGroupProps } from './types'

const ButtonGroup = ({
  options,
  defaultSelected,
  value,
  onChange,
  className,
}: ButtonGroupProps) => {
  const isControlled = value !== undefined
  const [internalSelected, setInternalSelected] = useState(
    defaultSelected ?? options[0]?.id
  )

  const selected = isControlled ? value : internalSelected

  const handleClick = (id: string) => {
    if (!isControlled) {
      setInternalSelected(id)
    }
    onChange?.(id)
  }

  return (
    <Box className={classNames('flex', className)}>
      {options.map(option => (
        <Button
          key={option.id}
          variant={selected === option.id ? 'primary' : 'secondary'}
          onClick={() => handleClick(option.id)}
        >
          {option.label}
        </Button>
      ))}
    </Box>
  )
}

export default ButtonGroup
