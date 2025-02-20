import React from 'react'
import { AnimationContainer } from '@/ui/atoms'

const PointAnimation = ({ delay }: { delay: number }) => {
  return (
    <AnimationContainer
      as='span'
      className='block w-2 h-2 bg-white rounded-full mr-1'
      animate={{ opacity: [1, 0.3, 1], y: [0, -4, 0] }}
      transition={{
        delay,
        duration: 0.6,
        repeat: Infinity,
        repeatType: 'loop',
      }}
    />
  )
}

export default PointAnimation
