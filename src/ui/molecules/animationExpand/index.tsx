'use client'
import classNames from 'classnames'
import { ReactNode, forwardRef } from 'react'
import { AnimationContainer } from '@/ui/atoms'

const AnimationExpand = forwardRef<
  HTMLDivElement,
  {
    children: ReactNode
    className?: string
    onAnimationEnd?: () => void
    onTransitionEnd?: () => void
  }
>(({ children, className, onAnimationEnd, onTransitionEnd }, ref) => (
  <AnimationContainer
    ref={ref}
    initial={{ height: 0, opacity: 0 }}
    animate={{ height: 'auto', opacity: 1 }}
    exit={{ height: 0, opacity: 0 }}
    transition={{ duration: 0.4, ease: 'easeOut' }}
    className={classNames(className)}
    onAnimationEnd={onAnimationEnd}
    onTransitionEnd={onTransitionEnd}
  >
    {children}
  </AnimationContainer>
))

AnimationExpand.displayName = 'AnimationExpand'

export default AnimationExpand
