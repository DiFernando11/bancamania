import classNames from 'classnames'
import React from 'react'
import { findColorByLetter } from '@/shared/utils'
import { AvatarProps } from './types'

const Avatar = ({ name = 'A', size = 30, className }: AvatarProps) => {
  const getInitial = (name: string): string => {
    return name.trim().charAt(0).toUpperCase()
  }

  const getColor = (initial: string): string => {
    return findColorByLetter[initial] || findColorByLetter.A
  }

  const initial = getInitial(name)
  const backgroundColor = getColor(initial)

  return (
    <span
      className={classNames(
        'rounded-full font-bold flex justify-center items-center',
        className
      )}
      style={{
        backgroundColor: backgroundColor,
        fontSize: `${size * 0.5}px`,
        height: size,
        width: size, // Ajusta el tamaño de fuente como un porcentaje del tamaño del contenedor
      }}
    >
      {initial}
    </span>
  )
}

export default Avatar
