import React, { forwardRef } from 'react'
import { InputBaseProps } from '@/ui/atoms/inputBase/types'
import InputBase from '../../atoms/inputBase'

const InputText = forwardRef<HTMLInputElement, InputBaseProps>(
  ({ value, maxLength = 24, ...props }, ref) => {
    return (
      <InputBase
        {...props}
        ref={ref}
        type='text'
        value={value}
        maxLength={maxLength}
      />
    )
  }
)

InputText.displayName = 'InputText'

export default InputText
