import React, { forwardRef } from 'react'
import { formatToMoneyString } from '@/shared/utils'
import InputBase from '@/ui/atoms/inputBase'
import { InputMoneyProps } from './types'

const InputMoney = forwardRef<HTMLInputElement, InputMoneyProps>(
  ({ value, onChange, ...props }, ref) => {
    const integerCents = typeof value === 'number' && !isNaN(value) ? value : 0
    const displayValue = formatToMoneyString(integerCents.toString())

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value.replace(/\D/g, '')
      const newVal = parseInt(raw, 10)
      onChange(Number.isNaN(newVal) ? 0 : newVal)
    }

    return (
      <InputBase
        {...props}
        ref={ref}
        value={displayValue}
        onChange={handleChange}
        placeholder='0.00'
      />
    )
  }
)

InputMoney.displayName = 'InputMoney'
export default InputMoney
