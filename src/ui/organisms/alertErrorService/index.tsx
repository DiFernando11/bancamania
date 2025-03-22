import React from 'react'
import { ApiResponseError } from '@/shared/types/generics/apiRequest'
import { ScrollIntoView } from '@/ui/atoms'
import { Alert, AnimationVisible } from '@/ui/molecules'

const AlertErrorService = ({
  error,
  isError,
  isScroll = false,
}: {
  isError: boolean
  error?: ApiResponseError | null | unknown
  isScroll?: boolean
}) => {
  const messageDefault = 'Tipo de error nor encontrado, intentalo mas tarde'
  const errorMessage = (error as ApiResponseError)?.message || messageDefault

  return (
    <AnimationVisible isVisible={isError}>
      <ScrollIntoView isVisible={isError} isNotScroll={isError && isScroll}>
        <Alert text={errorMessage} type='error' />
      </ScrollIntoView>
    </AnimationVisible>
  )
}

export default AlertErrorService
