import { motion } from 'framer-motion'
import React, { ElementType, ComponentPropsWithRef } from 'react'
import { AnimatedWrapperProps } from './types'

const AnimationContainer = <T extends ElementType = 'div'>({
  as,
  children,
  className,
  variants,
  initial = 'hidden',
  animate = 'visible',
  ...props
}: AnimatedWrapperProps<T> &
  Omit<ComponentPropsWithRef<T>, keyof AnimatedWrapperProps<T>>) => {
  const MotionComponent = motion.create(as || 'div')

  return (
    <MotionComponent
      initial={initial}
      animate={animate}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  )
}

export default AnimationContainer
