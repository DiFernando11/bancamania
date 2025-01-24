'use client'
import classNames from 'classnames'
import { useLottie, useLottieInteractivity } from 'lottie-react'
import React, { forwardRef, useImperativeHandle } from 'react'
import { LottiePlayerRef } from '@/shared'
import { useLoadLottie } from '@/shared/hooks'
import { InteractiveLottiePlayerProps } from '../types'

const LottiePlayerInteractive = forwardRef<
  LottiePlayerRef,
  InteractiveLottiePlayerProps
>(
  (
    {
      name = 'maintenance',
      sizeLottie = 40,
      sizeLoading,
      className,
      loop,
      mode = 'cursor',
      actions = [],
      isCursorPointer = true,
    },
    ref
  ) => {
    const { animationData, loading } = useLoadLottie({ name })

    const options = {
      animationData,
      loop,
    }

    const style = {
      height: sizeLottie,
      width: sizeLottie,
    }

    const lottieObj = useLottie(options, style)

    const Animation = useLottieInteractivity({
      actions: actions.length ? actions : [],
      lottieObj,
      mode,
    })

    useImperativeHandle(ref, () => ({
      destroy: () => lottieObj?.destroy(),
      getDuration: (inFrames: boolean = false) =>
        lottieObj?.getDuration(inFrames),
      goToAndPlay: (frame: number, isFrame?: boolean) =>
        lottieObj?.goToAndPlay(frame, isFrame),
      goToAndStop: (frame: number, isFrame?: boolean) =>
        lottieObj?.goToAndStop(frame, isFrame),
      pause: () => lottieObj?.pause(),
      play: () => lottieObj?.play(),
      playSegments: (segments: [number, number], forceFlag?: boolean) =>
        lottieObj?.playSegments(segments, forceFlag),
      setSpeed: (speed: number) => lottieObj?.setSpeed(speed),
      setSubframe: (useSubFrames: boolean) =>
        lottieObj?.setSubframe(useSubFrames),
      stop: () => lottieObj?.stop(),
    }))

    if (loading)
      return (
        <div
          className='flex items-center justify-center'
          style={{
            height: sizeLoading ?? sizeLottie,
            width: sizeLoading ?? sizeLottie,
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
)

LottiePlayerInteractive.displayName = 'LottiePlayerInteractive'

export default LottiePlayerInteractive
