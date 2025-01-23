'use client'

import { useRef } from 'react'
import { LottiePlayerRef } from '@/shared/types'

export const useLottieMethods = () => {
  const lottieRef = useRef<LottiePlayerRef>(null)

  const play = () => {
    lottieRef?.current?.play()
  }

  const stop = () => {
    lottieRef?.current?.stop()
  }

  const pause = () => {
    lottieRef?.current?.pause()
  }

  const destroy = () => {
    lottieRef?.current?.destroy()
  }

  const getDuration = (inFrames: boolean = false) => {
    return lottieRef?.current?.getDuration(inFrames)
  }

  const goToAndPlay = (frame: number, isFrame?: boolean) => {
    lottieRef?.current?.goToAndPlay(frame, isFrame)
  }

  const goToAndStop = (frame: number, isFrame?: boolean) => {
    lottieRef?.current?.goToAndStop(frame, isFrame)
  }

  const playSegments = (segments: [number, number], forceFlag?: boolean) => {
    lottieRef?.current?.playSegments(segments, forceFlag)
  }

  const setSpeed = (speed: number) => {
    lottieRef?.current?.setSpeed(speed)
  }

  const setSubframe = (useSubFrames: boolean) => {
    lottieRef?.current?.setSubframe(useSubFrames)
  }

  return {
    destroy,
    getDuration,
    goToAndPlay,
    goToAndStop,
    lottieRef,
    pause,
    play,
    playSegments,
    setSpeed,
    setSubframe,
    stop,
  }
}
