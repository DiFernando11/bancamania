import React from 'react'
import LottiePlayerInteractive from '@/ui/atoms/lotties/lottiePlayerInteractive'

const LottieLogout = () => {
  return (
    <LottiePlayerInteractive
      name='logout'
      width={80}
      height={80}
      mode='cursor'
      loop={true}
      autoPlay
      autoplay
      actions={[
        {
          frames: [0, 100],
          position: { x: [0, 1], y: [0, 1] },
          type: 'seek',
        },
      ]}
    />
  )
}

export default LottieLogout
