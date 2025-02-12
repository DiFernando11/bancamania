export interface StepWizardProps {
  steps: React.ComponentType<StepProps>[]
  initialStep?: number
  className?: string
}

export interface StepProps {
  currentStep: number
  goToStep: (step: number) => void
  next: () => void
  prev: () => void
  reset: () => void
}
