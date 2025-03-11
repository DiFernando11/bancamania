import { AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'
import { AnimationContainer } from '@/ui/atoms'

const AnimationVisible = ({
  children,
  isVisible,
  className,
}: {
  children: ReactNode
  isVisible: boolean
  className?: string
}) => {
  const variants = {
    exit: { opacity: 0, scale: 0.5 },
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <AnimatePresence mode='wait'>
      {isVisible && (
        <AnimationContainer
          initial='hidden'
          animate='visible'
          exit='exit'
          variants={variants}
          transition={{ duration: 0.3 }}
          className={className}
        >
          {children}
        </AnimationContainer>
      )}
    </AnimatePresence>
  )
}

export default AnimationVisible
