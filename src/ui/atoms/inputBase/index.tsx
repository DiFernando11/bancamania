'use client'
import classNames from 'classnames'
import React, { forwardRef, useState } from 'react'
import { InputBaseProps } from './types'

const InputBase = forwardRef<HTMLInputElement, InputBaseProps>(
  (
    {
      value,
      onChange,
      disabled,
      autoSuggestion = false,
      suggestionPlaceholder = '',
      suggestionValue = '',
      onFocus,
      onBlur,
      onKeyDown,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false)

    return (
      <input
        {...props}
        ref={ref}
        className={classNames(
          'border bg-transparent border-primary-100 p-3 rounded text-lg',
          'transition-all duration-300 ease-in-out',
          'focus:ring-2 focus:ring-accent-100 focus:border-accent-100',
          'focus:bg-primary-50',
          {
            '!bg-accent-200 cursor-not-allowed': disabled,
          },
          props.className
        )}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={
          autoSuggestion && isFocused
            ? suggestionPlaceholder
            : props.placeholder
        }
        onFocus={e => {
          setIsFocused(true)
          if (onFocus) onFocus(e)
        }}
        onBlur={e => {
          setIsFocused(false)
          if (onBlur) onBlur(e)
        }}
        onKeyDown={e => {
          if (onKeyDown) onKeyDown(e)

          if (autoSuggestion && e.key === 'Tab' && !value) {
            e.preventDefault()
            if (onChange) {
              const syntheticEvent = {
                target: { value: suggestionValue },
              } as React.ChangeEvent<HTMLInputElement>
              onChange(syntheticEvent)
            }
          }
        }}
      />
    )
  }
)

InputBase.displayName = 'InputBase'

export default InputBase
