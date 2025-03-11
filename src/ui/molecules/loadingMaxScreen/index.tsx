import { AnimatePresence } from 'framer-motion'
import React, { ReactNode } from 'react'
import { AnimationContainer } from '@/ui/atoms'
import LoadingLogo from './loadingLogo'

const LoadingMaxScreen = ({
  isLoading,
  loadingContent,
}: {
  isLoading: boolean
  loadingContent?: ReactNode
}) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <AnimationContainer
          className='fixed inset-0 flex flex-col gap-4
          items-center justify-center bg-gradient-primary z-[10000]'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {loadingContent ?? <LoadingLogo />}
        </AnimationContainer>
      )}
    </AnimatePresence>
  )
}

export default LoadingMaxScreen
