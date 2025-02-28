'use client'
import { motion } from 'framer-motion'
import React, { ElementType, ComponentPropsWithRef } from 'react'
import { AnimatedWrapperProps } from './types'

const AnimationContainer = <T extends ElementType = 'div'>({
  children,
  className,
  variants,
  initial = 'hidden',
  animate = 'visible',
  ...props
}: AnimatedWrapperProps<T> &
  Omit<ComponentPropsWithRef<T>, keyof AnimatedWrapperProps<T>>) => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default AnimationContainer
