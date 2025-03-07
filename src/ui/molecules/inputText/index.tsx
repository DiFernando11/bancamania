import React, { forwardRef } from 'react'
import { InputBaseProps } from '@/ui/atoms/inputBase/types'
import InputBase from '../../atoms/inputBase'

const InputText = forwardRef<HTMLInputElement, InputBaseProps>(
  ({ value, ...props }, ref) => {
    return <InputBase {...props} ref={ref} type='text' value={value} />
  }
)

InputText.displayName = 'InputText'

export default InputText
