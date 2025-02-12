'use client'
import { useRef, useCallback } from 'react'
import { StepWizardHandle } from '@/shared/types'

export const useStepWizard = () => {
  const wizardRef = useRef<StepWizardHandle>(null)

  const next = useCallback(() => wizardRef.current?.next(), [])
  const prev = useCallback(() => wizardRef.current?.prev(), [])
  const goToStep = useCallback(
    (step: number) => wizardRef.current?.goToStep(step),
    []
  )
  const reset = useCallback(() => wizardRef.current?.reset(), [])

  return {
    goToStep,
    next,
    prev,
    reset,
    wizardRef,
  }
}
