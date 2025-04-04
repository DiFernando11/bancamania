import classNames from 'classnames'
import React from 'react'
import { ButtonProps } from './types'

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  disabled,
  type = 'button',
  onClick,
  ...rest
}) => {
  return (
    <button
      type={type}
      className={classNames(
        className,
        'border p-4 rounded-lg w-full shadow-all-accent',
        'transition-colors duration-200 ease-in-out',
        {
          'bg-loading-100 cursor-not-allowed': disabled,
          'bg-primary-100 hover:bg-primary-200':
            variant === 'primary' && !disabled,
          'border-accent-100': variant === 'secondary',
          'border-black': variant === 'primary',
          'hover:bg-black hover:border-primary-300':
            variant === 'secondary' && !disabled,
        }
      )}
      disabled={disabled}
      onClick={onClick && !disabled ? onClick : undefined}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
