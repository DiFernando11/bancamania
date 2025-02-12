'use client'
import React, { useState } from 'react'
import { useLottieMethods } from '@/shared/hooks'
import { LottiePlayerInteractive } from '@/ui/atoms'
import { GiftLottieProps } from './types'

const GiftLottie = ({ setIsOpen, isOpen }: GiftLottieProps) => {
  const { lottieRef, play, reset } = useLottieMethods()
  const [isInterLottie, setIsInterLottie] = useState(false)
  const playLottie = () => {
    if (!isOpen) {
      setIsOpen(true)
    }
    if (isInterLottie) {
      reset()
    } else {
      play()
    }
    setIsInterLottie(!isInterLottie)
  }

  return (
    <button onClick={playLottie}>
      <LottiePlayerInteractive
        className='w-full h-full'
        actions={[]}
        name='giftDollar'
        isCursorPointer={false}
        viewBox='20 0 350 280'
        ref={lottieRef}
      />
    </button>
  )
}

export default GiftLottie
