'use client'
import { motion, AnimatePresence } from 'framer-motion'
import React, { useState, useCallback } from 'react'
import { createStepContext } from './stepContext'
import { StepWizardProps } from './types'

const { StepProvider, useStepData } = createStepContext<object>()

const StepWizardComponent = <T extends object>({
  steps,
  initialStep = 0,
}: StepWizardProps<T>) => {
  const validInitialStep = Math.min(Math.max(initialStep, 0), steps.length - 1)
  const [currentStep, setCurrentStep] = useState(validInitialStep)
  const [direction, setDirection] = useState(1)

  const nextStep = useCallback(() => {
    setDirection(1)
    setCurrentStep(prev => (prev < steps.length - 1 ? prev + 1 : prev))
  }, [steps.length])

  const prevStep = useCallback(() => {
    setDirection(-1)
    setCurrentStep(prev => (prev > 0 ? prev - 1 : prev))
  }, [])

  const goToStep = useCallback(
    (step: number) => {
      const validStep = Math.min(Math.max(step, 0), steps.length - 1)
      setDirection(validStep > currentStep ? 1 : -1)
      setCurrentStep(validStep)
    },
    [steps.length, currentStep]
  )

  const { stepData, updateData, triggerRender } = useStepData<T>()

  const variants = {
    center: { opacity: 1, x: 0 },
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? '100%' : '-100%' }),
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? '-100%' : '100%' }),
  }

  if (!steps[currentStep]) return <>Paso no encontrado</>

  return (
    <div className='relative w-full h-full overflow-hidden'>
      <AnimatePresence mode='wait' custom={direction}>
        <motion.div
          key={currentStep}
          variants={variants}
          initial='enter'
          animate='center'
          exit='exit'
          transition={{ duration: 0.5, type: 'tween' }}
          custom={direction}
          className='absolute w-full h-full'
        >
          {steps[currentStep]({
            currentStep,
            goToStep,
            nextStep,
            prevStep,
            stepData,
            triggerRender,
            updateData,
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export const StepWizard = <T extends object>(props: StepWizardProps<T>) => {
  return (
    <StepProvider>
      <StepWizardComponent {...props} />
    </StepProvider>
  )
}

export default StepWizard
