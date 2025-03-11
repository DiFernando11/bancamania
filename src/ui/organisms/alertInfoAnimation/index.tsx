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
      <Alert text={message || ''} type='info' />
    </AnimationVisible>
  )
}

export default AlertInfoAnimation
