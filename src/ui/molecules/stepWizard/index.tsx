import { motion, AnimatePresence } from 'framer-motion'
import { useState, forwardRef, useImperativeHandle, useEffect } from 'react'
import { StepWizardHandle } from '@/shared'
import { StepProps, StepWizardProps } from './types'

const StepWizard = forwardRef<StepWizardHandle, StepWizardProps>(
  ({ steps = [], className, initialStep = 0 }, ref) => {
    const [currentStep, setCurrentStep] = useState(initialStep)
    const [direction, setDirection] = useState(1)

    const next = () => {
      if (currentStep < steps.length - 1) {
        setDirection(1)
        setCurrentStep(prev => prev + 1)
      }
    }

    const prev = () => {
      if (currentStep > 0) {
        setDirection(-1)
        setCurrentStep(prev => prev - 1)
      }
    }

    const goToStep = (step: number) => {
      if (step >= 0 && step < steps.length) {
        setDirection(step > currentStep ? 1 : -1)
        setCurrentStep(step)
      }
    }

    const reset = () => {
      setDirection(1)
      setCurrentStep(initialStep)
    }

    useImperativeHandle(ref, () => ({
      currentStep: currentStep,
      goToStep,
      isLastStep: () => currentStep === steps.length - 1,
      next,
      prev,
      reset,
    }))

    const stepProps: StepProps = { currentStep, goToStep, next, prev, reset }
    const StepComponent = steps[currentStep]

    return (
      <AnimatePresence mode='wait' custom={direction}>
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: direction * 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -direction * 100 }}
          transition={{ duration: 0.3 }}
          className={className}
        >
          {typeof StepComponent === 'function' ? (
            <StepComponent {...stepProps} />
          ) : (
            <div className='text-center text-gray-500'>Paso no válido</div>
          )}
        </motion.div>
      </AnimatePresence>
    )
  }
)

StepWizard.displayName = 'StepWizard'

export default StepWizard
