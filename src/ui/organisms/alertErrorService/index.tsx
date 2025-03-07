import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { ApiResponseError } from '@/shared/types/generics/apiRequest'
import { Alert, AnimationVisible } from '@/ui/molecules'

const AlertErrorService = ({ error }: { error?: ApiResponseError | null }) => {
  return (
    <AnimatePresence mode='wait'>
      {error && (
        <AnimationVisible key={error.message}>
          <Alert text={error.message} type='error' />
        </AnimationVisible>
      )}
    </AnimatePresence>
  )
}

export default AlertErrorService
