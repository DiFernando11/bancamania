import classNames from 'classnames'
import React from 'react'
import { AvatarProps } from './types'

const Avatar = ({ name = 'A', className }: AvatarProps) => {
  const getInitial = (name: string): string => {
    return name.trim().charAt(0).toUpperCase()
  }

  // Permite definir un tamaño base como `data-size="8"`
  return (
    <span
      className={classNames(
        'rounded-full font-bold flex justify-center items-center bg-primary-100',
        className
      )}
    >
      {getInitial(name)}
    </span>
  )
}

export default Avatar
