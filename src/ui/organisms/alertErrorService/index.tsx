import React from 'react'
import {
  ApiResponseError,
  ErrorField,
} from '@/shared/types/generics/apiRequest'
import { ScrollIntoView, Text } from '@/ui/atoms'
import { Alert, AnimationVisible } from '@/ui/molecules'
import ShowFieldError from '../showFieldError'

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
  const errorObj = error as ApiResponseError
  const errorMessage = errorObj?.message || messageDefault
  const hasFieldErrors = Array.isArray(errorObj?.error)

  console.log({ error, hasFieldErrors, isError })

  return (
    <AnimationVisible isVisible={isError}>
      {isScroll ? (
        <ScrollIntoView isVisible={isError}>
          <Alert type='error'>
            <Text>{errorMessage}</Text>
            {hasFieldErrors && (
              <ShowFieldError errors={errorObj?.error as ErrorField[]} />
            )}
          </Alert>
        </ScrollIntoView>
      ) : (
        <Alert type='error'>
          <Text>{errorMessage}</Text>
          {hasFieldErrors && (
            <ShowFieldError errors={errorObj?.error as ErrorField[]} />
          )}
        </Alert>
      )}
    </AnimationVisible>
  )
}

export default AlertErrorService
