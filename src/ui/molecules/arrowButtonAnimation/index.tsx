import React from 'react'
import { AnimationContainer, Box, Icon } from '@/ui/atoms'
import { ArrowButtonAnimationProps } from './types'

const ArrowButtonAnimation = ({
  className,
  classIcon,
  onClick,
}: ArrowButtonAnimationProps) => {
  return (
    <AnimationContainer
      animate={{
        x: [0, 5, 0],
      }}
      transition={{
        duration: 1,
        ease: 'easeInOut',
        repeat: Infinity,
      }}
    >
      <Box className={className} onClick={onClick}>
        <Icon name='Arrown' className={classIcon} />
      </Box>
    </AnimationContainer>
  )
}

export default ArrowButtonAnimation
