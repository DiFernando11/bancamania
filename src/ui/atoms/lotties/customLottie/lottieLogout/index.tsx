'use client'
import React, { forwardRef } from 'react'
import { LottiePlayerRef } from '@/shared'
import LottiePlayerInteractive from '@/ui/atoms/lotties/lottiePlayerInteractive'

const LottieLogout = forwardRef<LottiePlayerRef, unknown>((_, ref) => {
  return (
    <LottiePlayerInteractive
      ref={ref}
      name='logout'
      sizeLottie={70}
      loop={false}
      mode='cursor'
      actions={[
        {
          frames: [0, 100],
          position: { x: [0, 1], y: [0, 1] },
          type: 'seek',
        },
      ]}
    />
  )
})

LottieLogout.displayName = 'LottieLogout'

export default LottieLogout
