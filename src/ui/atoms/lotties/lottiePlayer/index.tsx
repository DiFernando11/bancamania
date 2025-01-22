'use client'
import classNames from 'classnames'
import Lottie from 'lottie-react'
import React from 'react'
import { useLoadLottie } from '@/shared/hooks'
import { LottiePlayerProps } from '../types'

const LottiePlayer: React.FC<LottiePlayerProps> = ({
  name = 'maintenance',
  width = 40,
  height = 40,
  className,
  isCursorPointer = true,
  ...props
}) => {
  const { loading, animationData } = useLoadLottie({ name })

  // Cambiar a component Spinner
  if (loading)
    return (
      <div
        className='flex items-center justify-center'
        style={{
          height: height,
          width: width,
        }}
      >
        <div
          className='animate-spin border-4 border-t-4 rounded-full
    border-gray-300 border-t-blue-500 w-3/6 h-3/6'
        />
      </div>
    )

  return (
    <Lottie
      className={classNames({ 'cursor-pointer': isCursorPointer }, className)}
      animationData={animationData}
      style={{
        height: height,
        width: width,
      }}
      {...props}
    />
  )
}

export default LottiePlayer
