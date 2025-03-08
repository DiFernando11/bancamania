export interface StepProps<T> {
  currentStep: number
  nextStep: () => void
  prevStep: () => void
  goToStep: (step: number) => void
  stepData: T
  updateData: (data: Partial<T>) => void
  triggerRender: () => void
}

export interface StepWizardProps<T> {
  steps: Array<(props: StepProps<T>) => JSX.Element>
  initialStep?: number
}
