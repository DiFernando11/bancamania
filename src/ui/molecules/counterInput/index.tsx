'use client'
import React, { useState, useEffect } from 'react'
import { Box, Button, Icon } from '@/ui/atoms'
import { CounterInputProps } from './types'

const CounterInput = ({ value, onChange, min, max, id }: CounterInputProps) => {
  const isControlled =
    typeof value === 'number' && typeof onChange === 'function'
  const [internalValue, setInternalValue] = useState(value ?? 0)

  const currentValue = isControlled ? value! : internalValue

  const setValue = (newValue: number) => {
    if (isControlled) {
      onChange?.(newValue)
    } else {
      setInternalValue(newValue)
    }
  }

  const increase = () => setValue(currentValue + 1)
  const decrease = () => setValue(currentValue - 1)

  useEffect(() => {
    if (isControlled) {
      setInternalValue(value!)
    }
  }, [value, isControlled])

  return (
    <Box className='flex items-center gap-2' id={id}>
      <Button
        disabled={min === value}
        variant='secondary'
        onClick={decrease}
        className='!p-2 !w-10 flex justify-center'
      >
        <Icon name='Minus' className='w-5 h-5' />
      </Button>
      <span className='w-8 text-center'>{currentValue}</span>
      <Button
        onClick={increase}
        disabled={max === value}
        className='!p-2 !w-10 flex justify-center'
      >
        <Icon name='Plus' className='w-5 h-5' />
      </Button>
    </Box>
  )
}

export default CounterInput
