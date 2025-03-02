'use client'
import { motion } from 'framer-motion'
import React, { ElementType, ComponentPropsWithRef, forwardRef } from 'react'
import { AnimatedWrapperProps } from './types'

const AnimationContainer = forwardRef<
  HTMLDivElement, // Cambiamos de HTMLElement a HTMLDivElement
  AnimatedWrapperProps<ElementType> &
    Omit<
      ComponentPropsWithRef<ElementType>,
      keyof AnimatedWrapperProps<ElementType>
    >
>(
  (
    {
      children,
      className,
      variants,
      initial = 'hidden',
      animate = 'visible',
      ...props
    },
    ref
  ) => {
    return (
      <motion.div
        ref={ref as React.Ref<HTMLDivElement>}
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
)

AnimationContainer.displayName = 'AnimationContainer'

export default AnimationContainer
