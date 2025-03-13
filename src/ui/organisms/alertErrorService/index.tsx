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
  const messageDefault = 'Tipo de error nor encontrado, intentalo mas tarde'

  return (
    <AnimationVisible isVisible={isError}>
      <Alert text={error?.message || messageDefault} type='error' />
    </AnimationVisible>
  )
}

export default AlertErrorService
