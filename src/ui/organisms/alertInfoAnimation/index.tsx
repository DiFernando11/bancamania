import React from 'react'
import { Alert, AnimationVisible } from '@/ui/molecules'

const AlertInfoAnimation = ({
  message,
  isVisible,
}: {
  isVisible: boolean
  message: string
}) => {
  return (
    <AnimationVisible isVisible={isVisible}>
      <Alert type='info'>{message}</Alert>
    </AnimationVisible>
  )
}

export default AlertInfoAnimation
