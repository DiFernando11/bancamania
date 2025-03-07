import { AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'
import { AnimationContainer } from '@/ui/atoms'

const AnimationVisible = ({
  children,
  isVisible,
}: {
  children: ReactNode
  isVisible: boolean
}) => {
  const variants = {
    exit: { opacity: 0, scale: 0.8 },
    hidden: { opacity: 0, scale: 0.8 },
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
        >
          {children}
        </AnimationContainer>
      )}
    </AnimatePresence>
  )
}

export default AnimationVisible
