import classNames from 'classnames'
import React from 'react'
import { AvatarProps } from './types'

const Avatar = ({ name = 'A', size = 30, className }: AvatarProps) => {
  const getInitial = (name: string): string => {
    return name.trim().charAt(0).toUpperCase()
  }

  const initial = getInitial(name)

  return (
    <span
      className={classNames(
        'rounded-full font-bold flex justify-center items-center bg-primary-100',
        className
      )}
      style={{
        fontSize: `${size * 0.7}px`,
        height: size,
        width: size,
      }}
    >
      {initial}
    </span>
  )
}

export default Avatar
