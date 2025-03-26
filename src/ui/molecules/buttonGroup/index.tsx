'use client'

import classNames from 'classnames'
import React, { useState, forwardRef } from 'react'
import { Button, Text } from '@/ui/atoms'
import GaleryCards from '@/ui/organisms/galeryCards'
import { ButtonGroupProps } from './types'

const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  (
    { options, defaultSelected, value, onChange, className, classNameButton },
    ref
  ) => {
    const isControlled = value !== undefined
    const [internalSelected, setInternalSelected] = useState(
      defaultSelected ?? options[0]?.id
    )

    const selected = isControlled ? value : internalSelected

    const handleClick = (id: string | number) => {
      if (!isControlled) {
        setInternalSelected(id)
      }
      onChange?.(id)
    }

    return (
      <GaleryCards ref={ref} className={classNames('flex', className)}>
        {options.map(option => (
          <Button
            key={option.id}
            variant={selected === option.id ? 'primary' : 'secondary'}
            onClick={() => handleClick(option.id)}
            className={classNames(
              classNameButton,
              'flex-1 w-full h-auto min-w-16'
            )}
          >
            <Text>{option.label}</Text>
          </Button>
        ))}
      </GaleryCards>
    )
  }
)

ButtonGroup.displayName = 'ButtonGroup'

export default ButtonGroup
