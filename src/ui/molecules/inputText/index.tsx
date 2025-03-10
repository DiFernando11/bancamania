import React, { forwardRef } from 'react'
import { InputBaseProps } from '@/ui/atoms/inputBase/types'
import InputBase from '../../atoms/inputBase'

const InputText = forwardRef<HTMLInputElement, InputBaseProps>(
  ({ value = '', maxLength = 24, onChange, ...props }, ref) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const sanitizedValue = event.target.value.replace(/\s+/g, ' ').trimStart()

      if (onChange) {
        onChange({
          ...event,
          target: { ...event.target, value: sanitizedValue },
        })
      }
    }

    return (
      <InputBase
        {...props}
        ref={ref}
        type='text'
        value={value}
        maxLength={maxLength}
        onChange={handleChange}
      />
    )
  }
)

InputText.displayName = 'InputText'

export default InputText
