import classNames from 'classnames'
import React, { forwardRef } from 'react'
import { InputBaseProps } from '@/ui/atoms/inputBase/types'
import InputBase from '../../atoms/inputBase'

const CheckBox = forwardRef<HTMLInputElement, InputBaseProps>(
  ({ className, disabled, ...props }, ref) => {
    return (
      <InputBase
        {...props}
        className={classNames(
          'w-6 h-6 cursor-pointer rounded-md border border-primary-100',
          'appearance-none transition-all duration-300 ease-in-out',
          'bg-white checked:bg-primary-100 checked:border-primary-100',
          'relative before:content-["✔"] before:absolute before:top-1/2 before:left-1/2',
          'before:-translate-x-1/2 before:-translate-y-1/2 before:scale-0',
          'checked:before:scale-100 checked:before:text-white checked:before:text-lg',
          {
            'border-gray-300 checked:bg-gray-400 checked:border-gray-500':
              disabled,
            'opacity-50 !cursor-not-allowed bg-gray-200': disabled,
          },
          className
        )}
        ref={ref}
        type='checkbox'
        disabled={disabled}
      />
    )
  }
)

CheckBox.displayName = 'CheckBox'

export default CheckBox
