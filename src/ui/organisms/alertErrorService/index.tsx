import React from 'react'
import { ApiResponseError } from '@/shared/types/generics/apiRequest'
import { Alert, AnimationVisible } from '@/ui/molecules'

const AlertErrorService = ({
  error,
  isError,
}: {
  error?: ApiResponseError | null | unknown
  isError: boolean
}) => {
  const messageDefault = 'Tipo de error nor encontrado, intentalo mas tarde'
  const errorMessage = (error as ApiResponseError)?.message || messageDefault

  return (
    <AnimationVisible isVisible={isError}>
      <Alert text={errorMessage} type='error' />
    </AnimationVisible>
  )
}

export default AlertErrorService
