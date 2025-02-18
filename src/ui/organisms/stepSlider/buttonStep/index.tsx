import classNames from 'classnames'
import React from 'react'
import { ArrowButtonAnimation } from '@/ui/molecules'
import { ArrowButtonProps } from './types'

export const ArrowButtonNext = ({
  classIcon,
  className,
  onClick,
}: ArrowButtonProps) => {
  return (
    <ArrowButtonAnimation
      onClick={onClick}
      classIcon={classNames('-rotate-90', classIcon)}
      className={classNames(
        className,
        'justify-center items-center flex shadow-all-accent'
      )}
    />
  )
}

export const ArrowButtonPrev = ({
  classIcon,
  className,
  onClick,
}: ArrowButtonProps) => {
  return (
    <ArrowButtonAnimation
      onClick={onClick}
      classIcon={classNames('-rotate-180', classIcon)}
      className={classNames(
        className,
        'justify-center items-center flex shadow-all-accent'
      )}
    />
  )
}
