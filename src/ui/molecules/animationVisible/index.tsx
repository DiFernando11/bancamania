import { ReactNode } from 'react'
import { AnimationContainer } from '@/ui/atoms'

const AnimationVisible = ({ children }: { children: ReactNode }) => {
  const variants = {
    exit: { opacity: 0, scale: 0.8 },
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <AnimationContainer
      initial='hidden'
      animate='visible'
      exit='exit'
      variants={variants}
      transition={{ duration: 0.3 }}
    >
      {children}
    </AnimationContainer>
  )
}

export default AnimationVisible
