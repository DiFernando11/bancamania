'use client'
import classNames from 'classnames'
import { useLottie, useLottieInteractivity } from 'lottie-react'
import React from 'react'
import { useLoadLottie } from '@/shared/hooks'
import { InteractiveLottiePlayerProps } from '../types'

const LottiePlayerInteractive: React.FC<InteractiveLottiePlayerProps> = ({
  name = 'maintenance',
  width = 40,
  height = 40,
  className,
  mode = 'cursor',
  actions = [],
  isCursorPointer = true,
}) => {
  const { animationData, loading } = useLoadLottie({ name })

  const options = {
    animationData,
  }

  const style = {
    height,
    width,
  }

  const lottieObj = useLottie(options, style)

  const Animation = useLottieInteractivity({
    actions: actions.length ? actions : [],
    lottieObj,
    mode,
  })

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
    <div
      className={classNames({ 'cursor-pointer': isCursorPointer }, className)}
    >
      {Animation}
    </div>
  )
}

export default LottiePlayerInteractive
