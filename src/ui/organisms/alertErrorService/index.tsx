import React from 'react'
import { ApiResponseError } from '@/shared/types/generics/apiRequest'
import { Alert, AnimationVisible } from '@/ui/molecules'

const AlertErrorService = ({
  error,
  isError,
}: {
  error?: ApiResponseError | null
  isError: boolean
}) => {
  return (
    <AnimationVisible isVisible={isError}>
      <Alert text={error?.message || ''} type='error' />
    </AnimationVisible>
  )
}

export default AlertErrorService
