import classNames from 'classnames'
import React, { forwardRef } from 'react'
import { InputBaseProps } from './types'

const InputBase = forwardRef<HTMLInputElement, InputBaseProps>(
  ({ value, onChange, ...props }, ref) => {
    return (
      <input
        {...props}
        ref={ref}
        className={classNames(
          'border bg-transparent border-primary-100 p-3 rounded',
          'focus:ring-2 focus:ring-accent-100 focus:border-accent-100',
          props.className
        )}
        value={value}
        onChange={onChange}
      />
    )
  }
)

InputBase.displayName = 'InputBase'

export default InputBase
