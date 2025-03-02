'use client'
import classNames from 'classnames'
import { ReactNode, forwardRef } from 'react'
import { AnimationContainer } from '@/ui/atoms'

const AnimationExpand = forwardRef<
  HTMLDivElement,
  { children: ReactNode; className?: string }
>(({ children, className }, ref) => (
  <AnimationContainer
    ref={ref}
    initial={{ height: 0, opacity: 0 }}
    animate={{ height: 'auto', opacity: 1 }}
    transition={{ duration: 0.4, ease: 'easeOut' }}
    className={classNames('overflow-hidden', className)}
  >
    {children}
  </AnimationContainer>
))

AnimationExpand.displayName = 'AnimationExpand'

export default AnimationExpand
