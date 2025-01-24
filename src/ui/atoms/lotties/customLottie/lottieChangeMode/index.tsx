'use client'
import React, { forwardRef } from 'react'
import { LottiePlayerRef } from '@/shared/types'
import LottiePlayerInteractive from '@/ui/atoms/lotties/lottiePlayerInteractive'
import { LottieChangeModeProps } from './types'

const LottieChangeMode = forwardRef<LottiePlayerRef, LottieChangeModeProps>(
  ({ startFrame }, ref) => {
    return (
      <LottiePlayerInteractive
        ref={ref}
        name='changeMode'
        sizeLottie={70}
        viewBox='120 120 390 390'
        mode='cursor'
        actions={[]}
        startFrame={startFrame}
      />
    )
  }
)

LottieChangeMode.displayName = 'LottieChangeMode'

export default LottieChangeMode
