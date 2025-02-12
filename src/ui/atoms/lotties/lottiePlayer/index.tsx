'use client'
import classNames from 'classnames'
import Lottie from 'lottie-react'
import React from 'react'
import { useLoadLottie } from '@/shared/hooks'
import { LottiePlayerProps } from '../types'

const LottiePlayer: React.FC<LottiePlayerProps> = ({
  name = 'maintenance',
  sizeLoading,
  className,
  isCursorPointer = true,
  viewBox,
  showLoading = true,
  ...props
}) => {
  const { loading, animationData, lottieContainerRef } = useLoadLottie({
    name,
    viewBox,
  })

  // Cambiar a component Spinner
  if (loading && showLoading)
    return (
      <div
        className={classNames(
          'flex items-center justify-center',
          sizeLoading ?? className
        )}
      >
        <div
          className='animate-spin border-4 border-t-4 rounded-full
    border-gray-300 border-t-blue-500 w-3/6 h-3/6'
        />
      </div>
    )

  return (
    <div ref={lottieContainerRef}>
      <Lottie
        className={classNames({ 'cursor-pointer': isCursorPointer }, className)}
        animationData={animationData}
        {...props}
      />
    </div>
  )
}

export default LottiePlayer
