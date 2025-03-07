import classNames from 'classnames'
import React, { forwardRef } from 'react'
import { InputBaseProps } from './types'

const InputBase = forwardRef<HTMLInputElement, InputBaseProps>(
  ({ value, onChange, disabled, ...props }, ref) => {
    return (
      <input
        {...props}
        ref={ref}
        className={classNames(
          'border bg-transparent border-primary-100 p-3 rounded',
          'focus:ring-2 focus:ring-accent-100 focus:border-accent-100 text-lg',
          {
            'bg-gray-200 text-black cursor-not-allowed opacity-60': disabled,
          },
          props.className
        )}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    )
  }
)

InputBase.displayName = 'InputBase'

export default InputBase
